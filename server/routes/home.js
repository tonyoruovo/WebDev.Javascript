import express from "express";
import { getHome, setHome, updateHome, deleteHome } from "../controller/home.js";

const router = express.Router();

router.route("/").get(getHome).post(setHome);
router.route("/:id").put(updateHome).delete(deleteHome);

export default router;