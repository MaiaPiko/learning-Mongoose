import mongoose from "mongoose";
const { Schema, SchemaTypes, model } = mongoose;

const blogSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	slug: {
		type: String,
		required: true,
		lowercase: true,
	},
	published: {
		type: Boolean,
		default: false,
	},
	author: {
    type: SchemaTypes.ObjectId,
		ref: "User",
		required: true,
	},
	content: String,
	tags: [String],
	createdAt: {
		type: Date,
		default: () => Date.now(),
		immutable: true,
	},
	updatedAt: Date,
	comments: [
		{
			user: {
				type: SchemaTypes.ObjectId,
				ref: "User",
				required: true,
			},
			content: String,
			votes: Number,
		},
	],
});

const Blog = model("Blog", blogSchema);
export default Blog;
