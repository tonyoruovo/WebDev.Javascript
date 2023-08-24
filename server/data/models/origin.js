import mongoose from "mongoose";

const originSchema = new mongoose.Schema({
	name: String,
	domain: String,
	host: String,
	protocol: String,
	origin: String,
	internal: Boolean,
},
{
	timestamps: true
}
);

const Origin = mongoose.model("Origin", originSchema);

export default Origin;
