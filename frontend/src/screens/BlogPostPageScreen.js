import React, { useEffect } from 'react'
import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'
import Comments from '../components/Comments'
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listBlogDetails } from '../actions/blogActions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import '../css/style.css'
const BlogPostPageScreen = () => {

    
        const { id } = useParams();
        const dispatch = useDispatch();
        
        const blogDetails = useSelector((state) => state.blogDetails);
        const { loading, error, blog } = blogDetails;
    
        useEffect(() => {
            dispatch(listBlogDetails(id));
        }, [id, dispatch]);
    

    return ( 
                <>
                
			<Flex mb='5'>
				<Button as={RouterLink} to='/' colorScheme='gray'>
					Go Back
				</Button>
			</Flex>
			{loading ? (
				<Loader />
			) : error ? (
				<Message type='error'>{error}</Message>
			) :
             ( 
                    <Box>
                        <Flex justifyContent='center' alignItems='center'>
                            <Box>
                                <Heading fontSize={{base:'13px',md:'2rem'}} mt='1rem' mb='1rem' textAlign={{base:'center'}}>
                                    {blog.title}
                                </Heading>

                                <Flex justifyContent='center'>
                                    <Image src={blog.image} alt='blog post' height={{base:'auto',md:'400px'}} mt='1rem' mb='1rem' />
                                </Flex>
                                <Box mb='1rem'>
                                    <span style={{ marginLeft: '6rem' }} > <em>Author  {blog.author}</em>

                                    </span>
                                    <span className='posted'> <em>Posted   {blog.date}</em>

                                    </span>
                                </Box>

                            </Box>
                        </Flex>
                        <pre style={{ fontSize: 'lg', width: '80%', margin: 'auto', textAlign: 'center', whiteSpace: 'pre-wrap' }} >
                            {blog.content}
                        </pre>

                     <Box textAlign='center' mt='5rem'>
                     <Comments />
                        </Box>
                    </Box>
            )
            }
        </>
    )
}

export default BlogPostPageScreen;