const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		name: { type: String, required: false },
		email: { type: String },
		avatar: {
			type: String,
			required: false,
		},
		activated:{ type: Boolean, required: false},
		googleId: { type: String, required: false },
		facebookId: { type: String, required: false },
	},
	{
		timestamps: true,
		toJSON: { getters: true },
	}
);

module.exports = mongoose.model("User", userSchema, "users");
