const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mySchema = new Schema({
	userId: {
		type: Schema.ObjectId,
		ref: "User",
	},
	title: String,
	description: String,
});

const model = mongoose.model("task", mySchema);
module.exports = model;
