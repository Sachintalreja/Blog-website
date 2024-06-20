import React from 'react'
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Spacer,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, Link as RouterLink, useNavigate, useParams} from 'react-router-dom';
import { listBlogDetails, updateBlog } from '../actions/blogActions';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { BLOG_UPDATE_RESET } from '../constants/blogConstants';
const BlogUpdateScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {id: blogId} = useParams();

    const [title, setTitle] = useState('');
    const [short_excerpt, setShort] = useState('');
    const [image, setImage] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [content, setContent] = useState('');

    const blogDetails = useSelector((state)=>state.blogDetails);
    const {loading, error, blog} = blogDetails;

    const blogUpdate = useSelector((state)=> state.blogUpdate);
    const {loading: loadingUpdate, error: errorUpdate, success: successUpdate} = blogUpdate;

    useEffect(()=>{
        if(successUpdate){
            dispatch({type: BLOG_UPDATE_RESET});
            navigate(`/profile`);
        } else {
            if(!blog.title || blog._id !== blogId) {
                dispatch(listBlogDetails(blogId))
            } else {
                setTitle(blog.title);
                setShort(blog.short_excerpt);
                setImage(blog.image);
                setAuthor(blog.author);
                setDate(blog.date);
                setContent(blog.content);
            }
        }
    },[dispatch,navigate, blogId, blog, successUpdate]);

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(
            updateBlog({
                _id: blogId,
                title,
                short_excerpt,
                image,
                author,
                date,
                content,
            })
        )
    }
    
    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };
            const {data} = await axios.post(`/api/uploads`, formData, config);
            setImage(data);
        } catch (err) {
            console.error(err);
        }
    }
  return (
    <>
    <Link as={RouterLink} to='/profile'>Go Back</Link>
    <Flex w='full' alignItems={'center'} justifyContent={'center'} py='5'>
        <FormContainer>
            <Heading as='h1' mb='8' fontSize={'3xl'}>Create Post</Heading>

            {loadingUpdate && <Loader/>}
            {errorUpdate && <Message type='error'>{errorUpdate}</Message>}

            {loading ? (
                <Loader/>
            ) : error ? (
                <Message type='error'>{error}</Message>
            ) : (
                <form onSubmit={submitHandler}>
                    {/* NAME */}
                    <FormControl id='title' isRequired>
                        <FormLabel>Title</FormLabel>
                        <Input type='text' placeholder='Enter Title' value={title} onChange={(e)=> setTitle(e.target.value)}></Input>
                    </FormControl>
                    <Spacer h='3'></Spacer>
                    {/* PRICE */}
                    <FormControl id='short' isRequired>
                        <FormLabel>Short Excerpt</FormLabel>
                        <Input type='text' placeholder='Enter short_excerpt' value={short_excerpt} onChange={(e)=>setShort(e.target.value)}></Input>
                    </FormControl>
                    <Spacer h='3'></Spacer>

                    <FormControl id='image' isRequired>
                        <FormLabel>Image</FormLabel>
                        <Input type='text' placeholder='Enter Image url' value={image} onChange={(e)=>setImage(e.target.value)}></Input>
                        <Input type='file' onChange={uploadFileHandler}></Input>
                    </FormControl>
                    <Spacer h='3'></Spacer>


                    <FormControl id='author' isRequired>
                        <FormLabel>Author Name</FormLabel>
                        <Input type='text' placeholder='Enter Author Name' value={author} onChange={(e)=> setAuthor(e.target.value)}>
                        </Input>
                    </FormControl>
                    <Spacer h='3'></Spacer>

                    <FormControl id='date' isRequired>
                        <FormLabel>Date</FormLabel>
                        <Input type='text' placeholder='Enter Date' value={date} onChange={(e)=> setDate(e.target.value)}>
                        </Input>
                    </FormControl>
                    <Spacer h='3'></Spacer>

                    <FormControl id='content' isRequired>
                        <FormLabel>Content</FormLabel>
                        <Input type='text' placeholder='Enter Content' value={content} onChange={(e)=> setContent(e.target.value)}>
                        </Input>
                    </FormControl>
                    <Spacer h='3'></Spacer>

                    <Button type='submit' isLoading={loading} colorScheme='teal' mt='4'>Create</Button>
                </form>
            )}
        </FormContainer>
    </Flex>
    </>
  )
}

export default BlogUpdateScreen