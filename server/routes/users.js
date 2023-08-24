import express from "express";
import {
  getAccounts,
  getAccount,
  postAccounts,
  updateAccounts,
  deleteAccounts,
  postAccount,
  updateAccount,
  deleteAccount,
  postAdmin,
  getAdmin,
  getAdmins,
} from "../controller/users.js";
import jwtAuthenticate, { adminAuthenticate } from "../middleware/auth.js";

/**
 * Multiple routes that are logically related to user and admin accounts
 */
const router = express.Router();
router
  .route("/")
  /**@todo For all the routes that are plural I shall add a different authentication such as an admin authentication */
  // .get(adminAuthenticate, getAccounts)
  // .post(adminAuthenticate, postAccounts)
  // .put(adminAuthenticate, updateAccounts)
  // .delete(adminAuthenticate, deleteAccounts);
  .get(jwtAuthenticate, getAccounts)
  .post(jwtAuthenticate, postAccounts)
  .put(jwtAuthenticate, updateAccounts)
  .delete(jwtAuthenticate, deleteAccounts);
router
  .route("/user")
  /**single user authentication works here */
  .get(jwtAuthenticate, getAccount)
  .put(jwtAuthenticate, updateAccount)
  .delete(jwtAuthenticate, deleteAccount);
/**No auth required here */
router.route("/add").post(postAccount);
router.route("/admins/add").post(jwtAuthenticate, postAdmin);
router.route("/admins/admin").get(jwtAuthenticate, getAdmin);
router.route("/admins").get(jwtAuthenticate, getAdmins);

export default router;
