
import asyncHandler from "express-async-handler";
import Origin from "../data/models/origin.js";
import { handleBadRequest } from "../middleware/error.js";
import mongoose from "mongoose";

export const documentLimit = 25;

/**This is the controller for the route located at ../routes/cors.js*/

const getOrigin = asyncHandler(async function(req, res) {
	res.status(200).json(await Origin.find({id: req.params.id}).exec());
});

const getOrigins = asyncHandler(async function(req, res) {
	const page = parseInt(req.query.page) || 0;
	const limit = parseInt(req.query.limit) || documentLimit;
	res.status(200).json(await Origin.find({}).skip(page * limit).limit(limit).exec());
});

const putOrigin = asyncHandler(async function(req, res) {
	const data = (typeof req.body === "string" ? JSON.parse(req.body) : req.body);
	const cors = await Origin.findByIdAndUpdate(req.params.id, data);
	if(cors) {
		res.status(204);	
	} else handleBadRequest(`id: ${req.params.id}, is not valid`);
});

const addOrigin = asyncHandler(async function(req, res) {
	console.log(req.body);
	const data = (typeof req.body === "string" ? JSON.parse(req.body) : req.body);
	const cors = new Origin({
		_id: new mongoose.Types.ObjectId(),
		...data
	});
	try {
		await cors.save();
	} catch(e) {
		handleBadRequest(`Could not complete CORs registeration: ${data}`, e);
	}
	res.status(200).json(await Origin.find({}));
});

const deleteOrigin = asyncHandler(async function(req, res) {
	try {
		await Origin.findByIdAndRemove(req.params.id).exec();
		return res.status(204);
	} catch(e) {
		handleBadRequest(new Error("An error occured", e));
	}
	res.status(200).json();
});

export {addOrigin, deleteOrigin, getOrigin, getOrigins, putOrigin};
