import React, { useEffect, useState } from 'react'
// import { posts } from '../posts';
import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Grid,
	Heading,
	Icon,
	Image,
	Input,
	Spacer,
	// Table,
	// Tbody,
	// Td,
	Text,
	// Th,
	// Thead,
	// Tr,
	Link

} from '@chakra-ui/react';
import FormContainer from '../components/FormContainer';
import { createBlog, deleteBlog, listBlogs } from '../actions/blogActions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { IoAdd, IoPencilSharp, IoTrashBinSharp } from 'react-icons/io5';
import { Link as RouterLink } from 'react-router-dom';
import { BLOG_CREATE_RESET } from '../constants/blogConstants';
import { getUserDetails, updateUserProfile } from '../actions/userActions';
import { USER_DETAILS_RESET } from '../constants/userConstants';
const ProfileScreen = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const blogList = useSelector((state) => state.blogList);
	const { loading: loadingBlog, error: errorBlog, blogs } = blogList;

	const userDetails = useSelector((state) => state.userDetails);
	const { loading, error, user } = userDetails;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
	const { success } = userUpdateProfile;

	const blogDelete = useSelector((state) => state.blogDelete);
	const {
		loading: loadingDelete,
		error: errorDelete,
		success: successDelete,
	} = blogDelete;

	const blogCreate = useSelector((state) => state.blogCreate);
	const {
		loading: loadingCreate,
		error: errorCreate,
		success: successCreate,
		blog: createdBlog,
	} = blogCreate;

	useEffect(() => {
		dispatch({ type: BLOG_CREATE_RESET });

		if (!userInfo) {
			navigate('/login');
		}
		else if (successCreate) {
			navigate(`/user/${createdBlog._id}/edit`);
		}else {
			dispatch(getUserDetails());
			dispatch(listBlogs());
			setName(user.name);
			setEmail(user.email);
		}

	}, [
		dispatch, navigate, userInfo, successDelete, successCreate, createdBlog, success, user.name, user.email
	]);

	const deleteHandler = (id) => {
		if (window.confirm('Are you sure?')) {
			dispatch(deleteBlog(id));
		}
	};


	const createProductHandler = () => {
		dispatch(createBlog());
		// alert('Create Product')
	}

	const submitHandler = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setMessage('Passwords do not match');
		} else {
			dispatch(updateUserProfile({ id: user._id, name, email, password }));
			dispatch({ type: USER_DETAILS_RESET })
		}
	}

	return (
		<Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }}>
			<Flex w={{ base: '350px', md: 'full' }} alignItems={{ base: 'center', md: 'center' }} justifyContent='center' py={{ base: '1', md: '5' }} m={{ base: 'auto', md: '0' }}>
				<FormContainer>
					<Heading as='h1' mb='8' fontSize='3xl'>
						User Profile
					</Heading>
					{error && <Message type='error'>{error}</Message>}
					{message && <Message type='error'>{message}</Message>}


					<form onSubmit={submitHandler}>
						<FormControl id='name'>
							<FormLabel htmlFor='name'>Your Name</FormLabel>
							<Input
								id='name'
								type='text'
								placeholder='Your full name'
								w={{ base: '300px', md: 'full' }}
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</FormControl>

						<Spacer h='3' />

						<FormControl id='email'>
							<FormLabel htmlFor='email'>Email address</FormLabel>
							<Input
								id='email'
								type='email'
								placeholder='username@domain.com'
								w={{ base: '300px', md: 'full' }}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</FormControl>

						<Spacer h='3' />

						<FormControl id='password'>
							<FormLabel htmlFor='password'>Password</FormLabel>
							<Input
								id='password'
								type='password'
								placeholder='************'
								w={{ base: '300px', md: 'full' }}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</FormControl>

						<Spacer h='3' />

						<FormControl id='confirmPassword'>
							<FormLabel htmlFor='confirmPassword'>Confirm Password</FormLabel>
							<Input
								id='confirmPassword'
								type='password'
								placeholder='************'
								w={{ base: '300px', md: 'full' }}
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>
						</FormControl>

						<Button type='submit' colorScheme='teal' mt='4' isLoading={loading}>
							Update
						</Button>
					</form>
				</FormContainer>
			</Flex>
			{loadingDelete && <Loader />}
			{errorDelete && <Message type='error'>{errorDelete}</Message>}

			{loadingCreate && <Loader />}
			{errorCreate && <Message type='error'>{errorCreate}</Message>}


			{loadingBlog ? (
				<Loader />
			) : errorBlog ? (
				<Message type='error'>{error}</Message>
			) : (

				<Flex direction='column'>
					<Flex justifyContent={{ base: 'space-around', md: 'space-between' }} alignItems={{ base: 'space-evenly', md: 'center' }} direction={{ base: 'column', md: 'row' }}>
						<Heading as='h2' mb='4'>
							My Posts
						</Heading>

						<Button onClick={createProductHandler} colorScheme='teal' w={{ base: '200px', md: 'auto' }}>
							<Icon as={IoAdd} mr='2' fontSize={'xl'} fontWeight={'bold'}>
							</Icon>
							Create Post
						</Button>
					</Flex>


					{blogs.map((post) => (
						<Link as={RouterLink} to={`/`}
							_hover={{ textDecor: 'none' }}>
							<Box width={{ base: 'fit-content', md: '800px' }} mb='1rem' mt='1rem' mr={{ base: '0rem', md: '1rem' }}>
								<Flex gap='2rem' border='2px solid gray' boxShadow='md' borderRadius='md' alignItems={{ base: 'left', md: 'center' }} pb='1rem' direction={{ base: 'column', md: 'row' }}>
									<Box borderRadius='lg' bgColor='white' _hover={{ shadow: 'md' }} mb='1rem' mt='1rem' boxShadow='md' ml={{ base: '0', md: '1rem' }}>
										<Image
											src={post.image}
											alt={post.name}
											w={{ base: 'auto', md: '300px' }}
											h={{ base: '250px', md: '130px' }}
											borderRadius={{ base: '0', md: 'md' }}
											objectFit='cover'
										/>

									</Box>
									<Box>
										<Heading as='h4' fontSize='md' mb='3'>
											{post.title}
										</Heading>

										<Text as='h4' fontSize='sm' mb='3'>
											{post.short_excerpt}
										</Text>

										<Box mb='1rem'>
											<span style={{ marginLeft: '1rem' }} > <em>Author  {post.author}</em>

											</span>
											<span style={{ marginLeft: '9rem' }}> <em>Posted   {post.date}</em>

											</span>
										</Box>

										<Box>
											<Flex alignItems={{ base: 'center', md: 'left' }} justifyContent={{ base: 'center', md: 'left' }}>
												<Button
													mr='4'
													colorScheme='red'
													onClick={() => deleteHandler(post._id)}>
													<Icon as={IoTrashBinSharp} color='white' size='sm' />
												</Button>
												<Button mr='4' as={RouterLink} to={`/user/${post._id}/edit`} colorScheme='teal'>
													<Icon as={IoPencilSharp} color={'white'} size={'sm'}></Icon>
												</Button>
											</Flex>
										</Box>
									</Box>

								</Flex>
							</Box>
						</Link>
					))}
				</Flex>
			)}
		</Grid>
	)

}
export default ProfileScreen