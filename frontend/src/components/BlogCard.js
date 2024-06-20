import React from 'react'
import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';


const BlogCard = ({ blog }) => {
    return (
        
        <Link as={RouterLink}
			to={`/blog/${blog._id}`}
            _hover={{ textDecor: 'none' }}>
            <Box mb='1rem' mt='1rem'>
            <Flex gap='2rem' direction={{base:'column', md:'row'}}  width={{base:'auto',md:'80%'}} margin='auto' border='2px solid gray' boxShadow='md' borderRadius='md' alignItems='center'>
            <Box borderRadius='lg' bgColor='white' _hover={{ shadow: 'md' }} mb='1rem' mt='1rem' boxShadow='md' ml={{base:'auto',md:'1rem'}}>
                <Image
                    src={blog.image}
                    alt={blog.name}
                    w={{base:'auto',md:'600px'}}
                    h={{base:'auto',md:'330px'}}
                    borderRadius='md'
                    objectFit='cover'
                />

            </Box>
            <Box>
            <Heading as='h4' fontSize='lg' mb='3'>
                        {blog.title}
                    </Heading>

                    <Text as='h4' fontSize='lg' mb='3'>
                        {blog.short_excerpt}
                    </Text>
                    <Text as='h4' fontSize='lg' mb='3'>
                        {blog.author}
                    </Text>
                    <Text as='h4' fontSize='lg' mb='3'>
                        {blog.date}
                    </Text>
            </Box>
            </Flex>
            </Box>
        </Link>
    )
}

export default BlogCard