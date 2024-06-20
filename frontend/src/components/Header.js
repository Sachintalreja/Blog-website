import {
	Box,
	Button,
	Flex,
	Heading,
	Icon,
	Link,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { HiOutlineMenuAlt3, HiSearch, HiUser } from 'react-icons/hi';
import { IoChevronDown } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { logout } from '../actions/userActions';
import HeaderMenuItem from './HeaderMenuItem';
import { TiHome } from "react-icons/ti";

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const logoutHandler = () => {
		dispatch(logout());
		navigate('/login');
	};

	return (
		<Flex
			as="nav"
			justifyContent="space-between"
			alignItems="center"
			color="white"
			background="#222225"
			w="100%"
			px="6"
			py="4"
			flexDirection={{ base: 'column', md: 'row' }}
		>
			<Flex justifyContent="space-between" alignItems="center" w="100%">
			<Link as={RouterLink} to='/' _hover={{textDecor:'none'}}><Heading fontSize={{ base: 'md', md: 'xl' }}>StartSimpleBlog</Heading></Link>
				<Box display={{ base: 'block', md: 'none' }} onClick={() => setOpen(!open)}>
					<Icon as={HiOutlineMenuAlt3} color='white' w='6' h='6' />
				</Box>
				
			</Flex>

			<Box
				display={{ base: open ? 'block' : 'none', md: 'flex' }}
				width={{ base: 'full', md: 'auto' }}
				mt={{ base: '3', md: '0' }}
				flexDirection={{ base: 'column', md: 'row' }}
				alignItems={{ md: 'center' }}
			>

				<Flex gap={4} fontSize="xl" alignItems='center'>

					{userInfo ? (
						<Menu>
							<MenuButton as={Button} rightIcon={<IoChevronDown />} _hover={{ textDecor: 'none', opacity: '0.7' }}>
								{userInfo.name}
							</MenuButton>
							<MenuList>
								<MenuItem as={RouterLink} to='/profile' color='black' _hover={{ color: 'black' }}>
									Profile
								</MenuItem>
								<MenuItem onClick={logoutHandler} color='black' _hover={{ color: 'black' }}>Logout</MenuItem>
							</MenuList>
						</Menu>
					) : (
						<HeaderMenuItem icon={HiUser} url='/login' label='Login' />
					)}
				</Flex>
			</Box>
		</Flex>
	);
};

export default Header;