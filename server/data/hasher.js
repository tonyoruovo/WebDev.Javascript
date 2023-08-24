import fs from "fs";
import crypto from "crypto";
import root from "../../root.js";
import { pj } from "../../root.js";
/**
 * This algorithm is copied from geeksforgeeks.org
 */
/**
 * Creates a file name 'private_key' at the root of this project which stored info
 * regarding the algorithm for encryption/decryption of data
 * @param {string} passcode the secret key for public and private decryption
 * @param {number} keyBits the value specifying the largest number of bits that this
 * algorithm should accept from plain data. For example if this value if 32, then strings
 * longer than 32 cannot be used during encryption/decyption
 * @returns {void}
 */
function generateKeyFiles(passcode, keyBits) {
  const keyPair = crypto.generateKeyPairSync("rsa", {
    modulusLength: keyBits,
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      format: "pem",
      type: "pkcs8",
      cipher: "aes-256-cbc",
      passphrase: passcode,
    },
  });

  //create private key file
  fs.writeFileSync(root + "private_key", keyPair.privateKey);
  //writeFileSync("public_key", keyPair.publicKey);
}
if (!fs.existsSync(`${root}private_key`))
  generateKeyFiles(pj.private_key, 1024);
/**
 * Encrypts the first argument using the key file provided by the second argument
 * @param {string} plainText a plain string preferably unencoded
 * @param {string} privateKeyFile a string as the name of the key
 * file, probably the same file generated from {@link generateKeyFiles}
 * @returns { Buffer } a buffer containing the encrypted character bits
 */
export function encrypt(plainText, privateKeyFile) {
  const privateKey = fs.readFileSync(privateKeyFile, "utf8");

  const encrypted = crypto.privateEncrypt(
    {
      key: privateKey,
      passphrase: pj.private_key,
    },
    Buffer.from(plainText)
  );

  return encrypted; //.toString("base64");
}
/**
 * Decrypts the first argument using the key file provided by the second argument
 * @param {string} plainText a plain string most likely encoded as base64
 * @param {string} privateKeyFile a string as the name of the key
 * file, probably the same file generated from {@link generateKeyFiles}
 * @returns { Buffer } a buffer containing the decryptd character bits
 */
export function decrypt(encryptedText, privateKeyFile) {
  const privateKey = fs.readFileSync(privateKeyFile, "utf8");

  const decrypted = crypto.publicDecrypt(
    {
      key: privateKey,
      passphrase: pj.private_key,
    },
    Buffer.from(encryptedText)
  );

  return decrypted; //.toString("base64");
}
