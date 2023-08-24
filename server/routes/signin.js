import express from "express";
import { post, postAdmin } from "../controller/signin.js";
import jwtAuthenticate from "../middleware/auth.js";

/**
 * A `Router` that contains the route for user and admin login
 */
const router = express.Router();

router.route("/").post(post);
router.route("/admin").post(jwtAuthenticate, postAdmin);

export default router;
