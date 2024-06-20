import express from 'express';
import { getBlogs, getBlogById, deleteblog, createBlog, updateBlog } from '../controllers/blogController.js';
import { protect } from '../middlewares/authMiddleware.js';
const router = express.Router();

router.route('/').get(getBlogs).post(protect,createBlog)

router.route('/:id').get(getBlogById).delete(protect, deleteblog).put(protect, updateBlog);


export default router;
