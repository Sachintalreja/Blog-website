import mongoose from 'mongoose';

const BlogSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		short_excerpt: {
			type: String,
		},
		image: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
		},
		date: {
			type: String,
			required: true,
		},
		content: {
			type: String,
		}
	},
	{
		timestamps: true,
	}
);

const Blog = mongoose.model('Blog', BlogSchema);

export default Blog;
