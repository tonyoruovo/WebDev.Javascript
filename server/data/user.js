import util from "userdb/utility.js";
import { handleBadRequest } from "../middleware/error.js";
import jwt from "jsonwebtoken";

import Account, { Administrators } from "./models/account.js";
import { Email, Phone } from "./models/account.js";

import { encrypt } from "./hasher.js";
import mongoose from "mongoose";
import root, { pj } from "../../root.js";

/**
 * Checks every parameter for `null` and `undefined` value and returns `true` if `null` and `undefined` is not a parameter
 * @param  {...any} x unlimited parameters of any type
 * @returns {boolean} `true` if every parameter is not `null` and not `undefined` otherwise returns `false`
 */
function allIsValid(...x) {
  return x.reduce((y, z) => y && util.isValid(z), true);
}

/**
 * Creates an account without an explicit provider (such as Facebook, Twitter or Google), and stores the account inside a database specified by
 * `Account`.
 * @param {{username: string, email: string, phone: string, password: string, type: "mobile"|"home"|"work", name: string, surname: string}} body
 * The object to be stored in the database.
 * @returns {{id: string, name: string, email: string, username: string, phone: { type: "mobile"|"home"|"work", value: string }} | never}
 * an object of the account created if successful or throws if failed
 * @todo will be adding gender, date-of-birth and also checking for existing email, username and phone
 */
export async function createAccount(body) {
	console.log(body);
  //will be adding date of birth, gender
  const username = body.username;
  const email = body.email;
  const phone = body.phone;
  const x = await Account.find({ username: username }).exec();
  if (x.length !== 0) handleBadRequest(new Error(`Username: ${username}, already exists`));
  const y = await Email.find({ email: email }).exec();
  if (y.length !== 0) handleBadRequest(new Error(`Email: ${email}, already exists`));
  const z = await Phone.find({ phoneNumber: phone }).exec();
  if (z.length !== 0) handleBadRequest(new Error(`Phone: ${phone}, already exists`));
  const password = body.password;
  const type = (body.type || "mobile").toLowerCase();
  const name = body.name;
  const surname = body.surname;

  /**@todo check if the username, email and phone already exists in the database and return 400 if they do */

  if (allIsValid(username, email, password, phone, name, surname)) {
    const mail = new Email({
      _id: new mongoose.Types.ObjectId(),
      email: email,
      verified: false,
    });
    const num = new Phone({
      _id: new mongoose.Types.ObjectId(),
      phoneNumber: phone,
      phoneType:
        ["mobile", "home", "work"].indexOf(type) >= 0 ? type : "mobile",
      verified: false,
    });

	/*TODO need to provided validation (server-side) for these values*/
    const ac = new Account({
      _id: new mongoose.Types.ObjectId(),
      email: mail._id,
      full_name: `${body.title?body.title:""}|${name}|${body.otherNames?body.otherNames:""}|${surname}`,
      phone: num._id,
      photos: [],
      username: username,
      password: encrypt(password, `${root}private_key`).toString("base64"),
	  address: (body.address || body.address1) ? (body.address || body.address1) : undefined,
	  address2: body.address2 ? body.address2 : undefined,
	  dob: body.dob ? new Date(body.dob) : undefined,
	  postal: body.postal && /[0-9]{6}/.test(body.postal) ? body.postal : undefined,
    });

    try {
      await ac.save();
    } catch (e) {
      handleBadRequest(e);
    }
    try {
      await mail.save();
    } catch (e) {
      handleBadRequest(e);
    }
    try {
      await num.save();
    } catch (e) {
      handleBadRequest(e);
    }
	console.log(ac);
    return {
      id: ac._id.toString(),
      name: ac.full_name,
      email: mail.email,
      username: ac.username,
      phone: { type: num.phoneType, value: num.phoneNumber },
      token: generateToken(ac._id, pj.jwt),
    };
  } else {
    handleBadRequest(new Error(`BadRequest. Details ${body}`));
  }
}
/**
 * Generates a jwt and returns it as a jwt authorization header compatible `string`
 * @param {string} id the id of the user to which this token is assigned
 * @param {string} token the JSON Web token key with which a token will be generated
 * @returns { string } a string representing the jwt
 */
function generateToken(id, token) {
  return jwt.sign({ id }, token, {
    expiresIn: 15 * 60,
  });
}
/**
 * @returns {never} unimplemented for now
 */
export async function createAccountFromProvider(req, res) {
  throw new Error("Method not implemented");
}
/**
 * Sets the fields specified by the `body` argument and returns the updated user
 * object. \
 * It is strongly advised for security reasons that the `password`
 * property should not be set here, rather a dedicated method should be created
 * for it because this method lacks the proper validation needed for such a method.
 * @param {string} id the `_id` property which is the id of the user to be updated
 * @param {any} body an object of key/value pairs that correspond with fields of the
 * `Account` database
 * @returns {any} the user that was updated
 */
export async function updateAccountById(id, body) {
  if (body.password) delete body.password;
  try {
    return await Account.findByIdAndUpdate(id, body.update).exec();
  } catch (e) {
    handleBadRequest(new Error("Phone number already exists", e));
  }
}

/**
 * Romoves the account with the given id from the `Account` database
 * @param {string} id the id of the `Account` data to be deleted
 * @returns {any} the user that was deleted
 */
export async function removeAccountById(id) {
  try {
    // const a = await Account.findById(id).exec()
    await Email.findByIdAndRemove(a.email._id).exec();
    await Phone.findByIdAndRemove(a.phone._id).exec();
    return await Account.findByIdAndDelete(id).exec();
  } catch (e) {
    handleBadRequest(new Error("Phone number already exists", e));
  }
}

/**
 * Creates a new admin in the `Administrators` databse and returns part of the
 * data used in the creation.
 * @param {{ accountId: string, passcode: string }} body the values with which a
 * new admin is to created
 * @returns {{id: string, accountId: string}} the id and th `accountId` of the newly
 * created admin in an object. The `accountId` property links the created user to
 * the `Account` database buit does not reference it and so cannot be gotten through
 * the `populate` method
 */
export async function createAdmin(body) {
  if (!body)
    handleBadRequest(new Error("Illegal Request syntax. No body was found"));
  const accountId = body.accountId;
  const passcode = body.passcode;
  if (!allIsValid(passcode))
    handleBadRequest(new Error("Illegal values specified in the body"));
  const account = await Account.findById(accountId).exec();
  if (!allIsValid(account))
    handleBadRequest(new Error("The associated account was not found"));
  const newAdmin = new Administrators({
    _id: new mongoose.Types.ObjectId(),
    accountId: account._id,
    passcode: encrypt(passcode, `${root}private_key`).toString("base64"),
  });
  try {
    await newAdmin.save();
  } catch (e) {
    throw e;
  }
  return {
    id: newAdmin._id,
    accountId: newAdmin.accountId,
  };
}
