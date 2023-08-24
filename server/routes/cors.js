import express from "express";
import jwtAuthenticate from "../middleware/auth.js";

import {
	addOrigin, deleteOrigin, getOrigins, getOrigin, putOrigin
} from "../controller/origin.js";

const router = express.Router();

router.route("/")
	.get(jwtAuthenticate, getOrigins)
	.post(jwtAuthenticate, addOrigin);

router.route("/:id")
	.get(jwtAuthenticate, getOrigin)
	.put(jwtAuthenticate, putOrigin)
	.delete(jwtAuthenticate, deleteOrigin);
	
export default router;