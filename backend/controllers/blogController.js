
import Blog from "../models/blogModel.js";

/**
 * @desc		Get all blogs
 * @router	GET /api/blogs
 * @access	public
 */

const getBlogs = async (req, res) => {
	const blogs = await Blog.find({});
	res.json(blogs);
};

/**
 * @desc		Get single products
 * @router	GET /api/products/:id
 * @access	public
 */
const getBlogById = async (req, res) => {
	const blog = await Blog.findById(req.params.id);

	if (blog) {
		res.json(blog);
	} else {
		res.status(404);
		throw new Error('Blog not found');
	}
};

/**
 * @desc		Delete a product
 * @router	DELETE /api/products/:id
 * @access	private/admin
 */
const deleteblog = async (req, res) => {
	const blog = await Blog.findById(req.params.id);

	if (blog) {
		await Blog.deleteOne(blog);
		res.json({ message: 'Blog deleted' });
	} else {
		res.status(404);
		throw new Error('Blog not found');
	}
};


const createBlog = async (req, res) => {
	const blog = new Blog({
		user: req.user._id,
		title: 'Building microservices with Dropwizard, MongoDB & Docker',
		short_excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, magni! Earum sunt quis voluptatem provident consequatur totam odio sint architecto repellendus.',
		image: '/images/sample.jpg',
		author: 'John Doe',
		date: 'MM DD, YY',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, magni! Earum sunt quis voluptatem provident consequatur totam odio sint architecto repellendus. Possimus fugit eius dolores. Magnam hic, in ad laborum soluta, explicabo, at quas distinctio nihil et ipsam dolores labore praesentium veniam ducimus qui rem. Autem voluptate nihil eaque sapiente.',
	});

	const createdBlog = await blog.save();
	res.status(201).json(createdBlog);
};

const updateBlog = async (req, res) => {
	const { title, short_excerpt, image, author, date, content } =
		req.body;

	const blog = await Blog.findById(req.params.id);

	if (blog) {
		blog.title = title;
		blog.short_excerpt = short_excerpt;
		blog.image = image;
		blog.author = author;
		blog.date = date;
		blog.content = content;

		const updatedBlog = await blog.save();
		res.json(updatedBlog);
	} else {
		res.status(404);
		throw new Error('Blog not found');
	}
};



export { getBlogs, getBlogById, deleteblog, createBlog, updateBlog }