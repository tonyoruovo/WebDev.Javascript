import asyncHandler from "express-async-handler";
import ac from "../data/models/account.js";
import { Administrators } from "../data/models/account.js";
import {
  createAccount,
  updateAccountById,
  removeAccountById,
  createAdmin,
} from "../data/user.js";

export const documentLimit = 25;

/**
 * @summary a bulk retrieve operation of user account data
 * @description gets all user account data from the `Account` database in an array, where the following data
 * is retrieved with a status code of 200:
 * ```json
 * {
 *     "username": "username1992",
 *     "email": {
 *         "email": "jane@snail.com",
 *         "verified": false
 *     },
 *     "phone": {
 *         "phoneType": "home",
 *         "phoneNumber": "09070504001",
 *         "verified": false
 *     },
 *     "full_name": "Jane Doe",
 *     "photos": []
 * }
 * ```
 * This route also supports pagination. For example, adding a `?page={page}&limit={limit}` where `page` is
 * a number will get return that section of users limited to `limit` or `25`.
 * This route is protected and only admins can access it.
 * @method GET
 * @route http://localhost:8080/users
 * @access protected admins only
 * @param {express.Request<{}, any, any, express.QueryString.ParsedQs, Record<string, any>>} req the request made to this server
 * @param {express.Response<any, Record<string, any>, number>} res The response from this server
 */
export const getAccounts = asyncHandler(async function (req, res) {
	const page = parseInt(req.query.page) || 0;
	const limit = parseInt(req.query.limit) || documentLimit;
  res.status(200).json(
    await ac
      .find({})
	  .skip(page * limit)
	  .limit(limit)
      .populate({
        path: "email",
        model: "Email",
        select: "-_id -createdAt -updatedAt -__v",
      })
      .populate({
        path: "phone",
        model: "Phone",
        select: "-_id -createdAt -updatedAt -__v",
      })
      .select("-_id -createdAt -updatedAt -__v -password")
      .exec()
  );
});
/**
 * @summary a retrieve operation of the user account data
 * @description gets the user account data from the `Account` database, where the following data
 * is retrieved with a status code of 200:
 * ```json
 * {
 *     "username": "username1992",
 *     "email": {
 *         "email": "jane@snail.com",
 *         "verified": false
 *     },
 *     "phone": {
 *         "phoneType": "home",
 *         "phoneNumber": "09070504001",
 *         "verified": false
 *     },
 *     "full_name": "Jane Doe",
 *     "photos": []
 * }
 * ```
 * The user data returned is the same as the user that is logged in. When an admin
 * uses this route, then that admin's user data is retrieved if the `Authorization`
 * header is set and the appropriate `Bearer` token is provided else a `500` error
 * will be returned.
 * This route is protected and only users and admins can access it.
 * @method GET
 * @route http://localhost:8080/users/user
 * @access protected users and admins only
 * @param {express.Request<{}, any, any, express.QueryString.ParsedQs, Record<string, any>>} req the request made to this server
 * @param {express.Response<any, Record<string, any>, number>} res The response from this server
 */
export const getAccount = asyncHandler(async function (req, res) {
  res.status(200).json(
    ac
      .findById(req.user.id)
      .populate({
        path: "email",
        model: "Email",
        select: "-_id -createdAt -updatedAt -__v",
      })
      .populate({
        path: "phone",
        model: "Phone",
        select: "-_id -createdAt -updatedAt -__v",
      })
      .select("-_id -createdAt -updatedAt -__v -password")
      .exec()
  );
});
/**
 * @summary a bulk create operation of the user account data
 * @description posts an array of user account data to the `Account` database, where the following data
 * is expected:
 * ```json
 * {
 *     "username": "username1992",
 *     "email": "jane@snail.com",
 *     "phone": "09070504001",
 *     "password": "password",
 *     "type": "home",
 *     "name": "Jane",
 *     "surname": "Doe"
 * }
 * ```
 * An array of the same length as the payload is returned with user data of the same
 * structure as {@link postAccount}. This route is protected and only admins can
 * access it.
 * @method POST
 * @route http://localhost:8080/users
 * @access protected admins only
 * @param {express.Request<{}, any, any, express.QueryString.ParsedQs, Record<string, any>>} req the request made to this server
 * @param {express.Response<any, Record<string, any>, number>} res The response from this server
 */
export const postAccounts = asyncHandler(async function (req, res) {
  const data = (typeof req.body === "string" ? JSON.parse(req.body) : req.body);
  const reqBody = data.accounts.map(
    async (body) => await createAccount(body)
  );
  res.status(201).json(reqBody);
});
/**
 * @summary a bulk create operation of the user account data
 * @description posts a new user account data to the `Account` database, where the following data
 * is expected:
 * ```json
 * {
 *     "username": "username1992",
 *     "email": "jane@snail.com",
 *     "phone": "09070504001",
 *     "password": "password",
 *     "type": "home",
 *     "name": "Jane",
 *     "surname": "Doe"
 * }
 * ```
 * The server will respond with a staus code of `201` and data with the following structure:
 * ```json
 * {
 *     "id": "642a28123d61c62a728efa6e",
 *     "name": "Jane Doe",
 *     "email": "jane@snail.com",
 *     "username": "username1992",
 *     "phone": {
 *         "type": "home",
 *         "value": "09070504001"
 *     }
 * }
 * ```
 * This route is public and anyone can access from
 * an unbanned IP address
 * @method POST
 * @route http://localhost:8080/users/add
 * @access public available from anonymous
 * @param {express.Request<{}, any, any, express.QueryString.ParsedQs, Record<string, any>>} req the request made to this server
 * @param {express.Response<any, Record<string, any>, number>} res The response from this server
 */
export const postAccount = asyncHandler(async function (req, res) {
  const r = await createAccount(typeof req.body === "string" ? JSON.parse(req.body) : req.body);
  res.status(201).json(r);
  // let x = encrypt(req.body.password, `${root}private_key`);
  // req.body.password = undefined;
  // console.info(req.body);
  // console.info(x.toString("base64"));
  // console.info(decrypt(x, `${root}private_key`).toString("utf-8") + " :what");
  // res.status(201)
  // .send(JSON.stringify(req.body, null, 2) + "\n201 Created!");
});
/**
 * @summary a bulk update operation of the user account data
 * @description sends a request to update an array of user account data to the `Account` database, where at least one of the fields in
 * the following data is expected:
 * ```json
 * {
 *     "username": "username1992",
 *     "email": "jane@snail.com",
 *     "phone": "09070504001",
 *     "type": "home",
 *     "name": "Jane",
 *     "surname": "Doe"
 * }
 * ```
 * The server will respond with a staus code of `204` with no response data.
 * Note that passwords cannot be updated here. This route available only
 * for users and admins
 * @method PUT
 * @route http://localhost:8080/users/
 * @access public available from anonymous
 * @param {express.Request<{}, any, any, express.QueryString.ParsedQs, Record<string, any>>} req the request made to this server
 * @param {express.Response<any, Record<string, any>, number>} res The response from this server
 */
export const updateAccounts = asyncHandler(async function (req, res) {
  const data = (typeof req.body === "string" ? JSON.parse(req.body) : req.body);
  const reqBody = data.updates.map(
    async (body) => await updateAccountById(body)
  );
  res.status(204);
});

/**
 * @summary an update operation that updates the user account data
 * @description posts an updated field to a user account data to the `Account` database, where at least one of the field in
 * the following data is expected:
 * ```json
 * {
 *     "username": "username1992",
 *     "email": "jane@snail.com",
 *     "phone": "09070504001",
 *     "type": "home",
 *     "name": "Jane",
 *     "surname": "Doe"
 * }
 * ```
 * The server will respond with a staus code of `204` with no response data.
 * Note that passwords cannot be updated here. This route available only
 * for users and admins
 * @method PUT
 * @route http://localhost:8080/users/user
 * @access protected users and admins only
 * @param {express.Request<{}, any, any, express.QueryString.ParsedQs, Record<string, any>>} req the request made to this server
 * @param {express.Response<any, Record<string, any>, number>} res The response from this server
 */
export const updateAccount = asyncHandler(async function (req, res) {
  const r = await updateAccountById(req.user.id, typeof req.body === "string" ? JSON.parse(req.body) : req.body);
  res.status(204);
});
/**
 * @summary a delete operation that deletes multiple accounts
 * @description deletes mutiple user accounts in the `Account` database, where the following payload
 * is expected:
 * ```json
 * {
 *     "accounts": [ "id1", "id2", "id3" ]
 * }
 * ```
 * The items of the array above are the ids of their respective account.
 * The server will respond with a staus code of `204` with no response data.
 * This route available only for admins
 * @method DELETE
 * @route http://localhost:8080/users
 * @access protected admins only
 * @param {express.Request<{}, any, any, express.QueryString.ParsedQs, Record<string, any>>} req the request made to this server
 * @param {express.Response<any, Record<string, any>, number>} res The response from this server
 */
export const deleteAccounts = asyncHandler(async function (req, res) {
  const data = (typeof req.body === "string" ? JSON.parse(req.body) : req.body);
  const reqBody = data.accounts.map(
    async (id) => await removeAccountById(id)
  );
  res.status(204);
});
/**
 * @summary a delete operation that deletes the current user account
 * @description deletes the current user accounts in the `Account` database. \
 * The server will respond with a staus code of `204` with no response data.
 * This route available only for users, however admins can access this
 * route by using the same header that they may use as a user
 * @method DELETE
 * @route http://localhost:8080/users/user
 * @access protected users only
 * @param {express.Request<{}, any, any, express.QueryString.ParsedQs, Record<string, any>>} req the request made to this server
 * @param {express.Response<any, Record<string, any>, number>} res The response from this server
 */
export const deleteAccount = asyncHandler(async function (req, res) {
  const r = await removeAccountById(req.user.id);
  res.status(204);
});

/**
 * @summary a create operation that creates an admin account
 * @description Creates an admin account in the `Administrators` database, where the following payload
 * is expected:
 * ```json
 * {
 *     "passcode": "qwert1"
 * }
 * ```
 * The `accountId` is the id of the current logged in user as this route is protected, the `passcode`
 * is the the password of the given admin to be created.
 * The server will respond with a staus code of `200` with a response data matching:
 * ```json
 * {
 *     "id": "642a28e43d61c62a728efa75",
 *     "accountId": "642a28123d61c62a728efa6e"
 * }
 * ```
 * This route available only for users. admins should not access it for the time being
 * @method POST
 * @route http://localhost:8080/users/admins/add
 * @access protected users only
 * @param {express.Request<{}, any, any, express.QueryString.ParsedQs, Record<string, any>>} req the request made to this server
 * @param {express.Response<any, Record<string, any>, number>} res The response from this server
 */
export const postAdmin = asyncHandler(async function (req, res) {
  req.body.accountId = req.user.id;
  const r = await createAdmin(typeof req.body === "string" ? JSON.parse(req.body) : req.body);
  res.status(201).json(r);
});
/**
 * @summary a bulk retrieve operation that gets an array of admin account
 * @description Retrieves all the admin accounts in the `Administrators` database.
 * The server will respond with a staus code of `200` with a response data where each item
 * in the returned json array will match:
 * ```json
 * {
 *     "id": "642a28e43d61c62a728efa75",
 *     "accountId": "642a28123d61c62a728efa6e"
 * }
 * ```
 * Just as `getUsers` uses pagination, this also does.
 * This route available only for admins.
 * @method GET
 * @route http://localhost:8080/users/admins/
 * @access protected admins only
 * @param {express.Request<{}, any, any, express.QueryString.ParsedQs, Record<string, any>>} req the request made to this server
 * @param {express.Response<any, Record<string, any>, number>} res The response from this server
 * @see {@link getUsers}
 */
export const getAdmins = asyncHandler(async function (req, res) {
	const page = parseInt(req.query.page) || 0;
	const limit = parseInt(req.query.limit) || documentLimit;
  res
    .status(200)
    .json(
      await Administrators.find({})
		  .skip(page * limit)
		  .limit(limit)
        .select("-createdAt -updatedAt -__v -passcode")
        .exec()
    );
});
/**
 * @summary retrieves a single admin account
 * @description Retrieves a single admin account in the `Administrators` database.
 * The server will respond with a staus code of `200` with a response data matching:
 * ```json
 * {
 *     "id": "642a28e43d61c62a728efa75",
 *     "accountId": "642a28123d61c62a728efa6e"
 * }
 * ```
 * This route available only for admins.
 * @method GET
 * @route http://localhost:8080/users/admins/admin
 * @access protected admins only
 * @param {express.Request<{}, any, any, express.QueryString.ParsedQs, Record<string, any>>} req the request made to this server
 * @param {express.Response<any, Record<string, any>, number>} res The response from this server
 */
export const getAdmin = asyncHandler(async function (req, res) {
  const admin = await Administrators.findById(req.admin.id).exec();
  res.status(200).json({
    id: admin._id.toString(),
    accountId: admin.accountId.toString(),
  });
});
