import asyncHandler from "express-async-handler";
import util from "userdb/utility.js";
import { handleBadRequest } from "../middleware/error.js";
import Account, { Administrators } from "../data/models/account.js";
import { decrypt } from "../data/hasher.js";
import root, { pj } from "../../root.js";
import jwt from "jsonwebtoken";

/**
 * @summary a post operation that attempts a user signin on the server
 * @description Posts data to the server in an attempt to sign in the owner of
 * the data. The request body will be like:
 * ```json
 * {
 *     "username": "username1992",
 *     "password": "password"
 * }
 * ```
 * The server will respond with a staus code of `200` with a response data matching:
 * ```json
 * {
 *     "id": "642a28123d61c62a728efa6e",
 *     "username": "username1992",
 *     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmEyODEyM2Q2MWM2MmE3MjhlZmE2ZSIsImlhdCI6MTY4MDQ4NDQ1OSwiZXhwIjoxNjgwNDg1MzU5fQ.nJEVsHfAVQCHc2BYu6eNuzFPwepnb5p6-85beXT6cRU"
 * }
 * ```
 * In the response data, a token is returned. This is a json web token, and may be used in
 * authentication headers.
 * This route is available for all but will only return valid response if the credentials are valid i.e
 * the credentials are part of a users credential.
 * @method POST
 * @route http://localhost:8080/signin/
 * @route http://localhost:8080/login/
 * @access public available for all
 * @param {express.Request<{}, any, any, express.QueryString.ParsedQs, Record<string, any>>} req the request made to this server
 * @param {express.Response<any, Record<string, any>, number>} res The response from this server
 */
export const post = asyncHandler(async function (req, res) {
  const data = (typeof req.body === "string" ? JSON.parse(req.body) : req.body);
  const username = data["username"];
  const password = data["password"];
  if (!username) {
    handleBadRequest(Error(`Invalid username: ${username}`));
  }
  if (!password) {
    handleBadRequest(Error(`Invalid password: ${password} for the username: ${username}`));
  }
  const user = await Account.findOne({ username: username })
    .select("password username")
    .exec();
    console.log(user)
  if (
    password !==
    decrypt(
      Buffer.from(user.password, "base64"),
      `${root}private_key`
    ).toString("utf-8")
  ){
    handleBadRequest(Error(`The password: ${password} did not match the username: ${username}`));
  }
  res.status(200).json({
    id: user._id,
    username: user.username,
    token: generateToken(user._id, pj.jwt),
  });
});

/**
 * @todo I just found out that we dont need this method as the user is also
 * assigned a an id that can be used to search in get the admin in the `Administrators`
 * database. As a result, we also don't need the `passcode` field
 * @summary a post operation that attempts an admin signin on the server
 * @description Posts data to the server in an attempt to sign in the owner of
 * the data. The request body will be like:
 * ```json
 * {
 *     "id": "642a28e43d61c62a728efa75",
 *     "passcode": "qwerty1"
 * }
 * ```
 * The server will respond with a staus code of `200` with a response data matching:
 * ```json
 * {
 *     "id": "642a28123d61c62a728efa6e",
 *     "token": "NjQyYTI4ZTQzZDYxYzYyYTcyOGVmYTc1OnF3ZXJ0eTE="
 * }
 * ```
 * In the response data, a token is returned. This is a base64 encoded data containing
 * the id and the passcode of the admin in a `Basic` authetication header format such
 * as `id:passcode`, and may be used in authentication headers. This route is
 * available for users but will only return valid response if the credentials are valid
 * i.e the credentials are part of an admins credential.
 * @method POST
 * @route http://localhost:8080/signin/admin
 * @route http://localhost:8080/login/admin
 * @access protected only for users
 * @param {express.Request<{}, any, any, express.QueryString.ParsedQs, Record<string, any>>} req the request made to this server
 * @param {express.Response<any, Record<string, any>, number>} res The response from this server
 */
export const postAdmin = asyncHandler(async function (req, res) {
  const data = (typeof req.body === "string" ? JSON.parse(req.body) : req.body);
  const id = data.id;
  const pass = req.body.passcode;
  if (!util.isValid(id)) {
    handleBadRequest(Error("Invalid id"));
  }
  if (!util.isValid(pass)) {
    handleBadRequest(Error("Invalid passcode"));
  }
  const admin = await Administrators.findById(id).exec();
  if (admin.accountId.toString() !== req.user.id)
    handleBadRequest(new Error("accountId did not match"));
  if (
    pass !==
    decrypt(
      Buffer.from(admin.passcode, "base64"),
      `${root}private_key`
    ).toString("utf-8")
  )
    handleBadRequest(Error("passcode did not match"));
  res.status(200).json({
    id,
    token: generateToken(id, pj.jwt), //generateToken(id, pj.adminJWT)//generateBasicToken(id, pass),
  });
});

/**
 * Encodes the given arguments in `Basic` authentication syntax which is:
 * `id:passcode` and then returns it as a base64 string.
 * @param {string} id the id of the admin that will be assigned this token
 * @param {string} passcode the passcode as a plain unencoded text
 * @returns { string } a base64 string
 */
function generateBasicToken(id, passcode) {
  return Buffer.from(`${id}:${passcode}`, "utf-8").toString("base64");
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
