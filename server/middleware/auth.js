import jwt from "jsonwebtoken";
import expressAsyncHandler from "express-async-handler";
import Account, { Administrators } from "../data/models/account.js";
import root from "../../root.js";
import { handleNotAuthourised, handleBadRequest } from "./error.js";
import { decrypt } from "../data/hasher.js";

/**
 * Middleware for JWT authentication. This provides protection of routes for users and validation of Bearer authentication headers. \
 * We have also added the ability to authenticate admins by adding an `admin` object to req if the token was verified and the id on
 * the token was found on the `Administrators` database.
 * @param {express.Request<{}, any, any, express.QueryString.ParsedQs, Record<string, any>>} req the request made to this server
 * @param {express.Response<any, Record<string, any>, number>} res The response from this server
 * @param {NextFunction} next the the next middleware in the chain
 * @todo Personally I think we should implement our own `jwt.verify` and `jwt.sign` because the way it is current set up, we are
 * giving away our secret key to the client which is not advisable. We should reserve the secret key (which we would encode in 256
 * bits using the `crypto` module) to ourselves when we assign it to the user during signin and then when we are verifying it in 
 * authenticate middleware, we would then use it to decrypt/verify the token. Even as I type this I see that this could be redundant,
 * But I am just not comfortable putting the secret key in the hands of the client.
 */
const jwtAuthenticate = expressAsyncHandler(async (req, res, next) => {
  // let t;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      let t = req.headers.authorization.split(" ")[1];
      const verified = jwt.verify(t, root.jwt);
      req.user = await Account.findById(verified.id).select("-password");
      const admin = await Administrators.findOne({accountId: req.user._id.toString()}).select("-passcode").exec()
      if(admin)
        req.admin = admin;
      next();
    } catch (e) {
      handleNotAuthourised(e);
    }
  } else handleNotAuthourised(new Error("Not authourised"));
  //if (!t) handleNotAuthourised(new Error("Not authourised"));
});
/**
 * Middleware for Basic authentication. This provides protection of routes for admin and validation of Basic authentication headers
 * @param {express.Request<{}, any, any, express.QueryString.ParsedQs, Record<string, any>>} req the request made to this server
 * @param {express.Response<any, Record<string, any>, number>} res The response from this server
 * @param {NextFunction} next the the next middleware in the chain
 */
const adminAuthenticate = expressAsyncHandler(async (req, res, next) => {
  let t;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Basic")
  ) {
    try {
      t = req.headers.authorization.split(" ")[1];
      const verified = verifyBasic(t);
      const ad = await Administrators.findById(verified[0]).exec();
      if (!ad) handleNotAuthourised(new Error("Illegal credentials"));
      if (
        verified[1] !==
        decrypt(
          Buffer.from(ad.passcode, "base64"),
          `${root}private_key`
        ).toString("utf-8")
      )
        handleBadRequest(Error("Illegal credentials"));
      req.admin = {
        id: ad._id.toString(),
        accountId: ad.accountId.toString(),
      };
      next();
    } catch (e) {
      handleNotAuthourised(e);
    }
  } else handleNotAuthourised(new Error("Not authourised"));
  if (!t) handleNotAuthourised(new Error("Not authourised"));
});

/**
 * Parses and validates the argument and returns the data inside it.
 * @param {string} token a base64 string representing the Basic token to be validated
 * @returns { [string, string] } a string tuple of length 2. The first is the actual id and the next is the actual passcode
 */
function verifyBasic(token) {
  const a = Buffer.from(token, "base64").toString("utf-8").split(":");
  if (!Array.isArray(a)) return [];
  if (a.length !== 2) return [];
  return [a[0], a[1]];
}

export default jwtAuthenticate;
export { adminAuthenticate };
