import React, { useEffect } from 'react'
import { Box } from '@chakra-ui/react';
import BlogCard from '../components/BlogCard';
import { listBlogs } from '../actions/blogActions';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader'


const HomePageScreen = () => {

	const dispatch = useDispatch();

	const blogList = useSelector((state) => state.blogList);
	const { loading, error, blogs } = blogList;

	useEffect(() => {
		dispatch(listBlogs());
	}, [dispatch]);

	return (
		<>
			{loading ? (
				<Loader />
			) : error ? (
				<Message type='error'>{error}</Message>
			) : (
				<Box>
					{Array.isArray(blogs) && blogs.map((blog) => (
						<BlogCard blog={blog} key={blog._id} />
					))}
				</Box>
			)}
		</>
	)
}

export default HomePageScreen