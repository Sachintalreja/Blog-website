import { Flex } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import LoginScreen from './screens/LoginScreen';
import HomePageScreen from './screens/HomePageScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import BlogPostPageScreen from './screens/BlogPostPageScreen';
import BlogUpdateScreen from './screens/BlogUpdateScreen';

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Flex
				as='main'
				mt='72px'
				direction='column'
				py='6'
				px='6'
				bgColor='gray.200'>
				<Routes>
				<Route path='/' element={<HomePageScreen />} />
				<Route path='/blog/:id' element={<BlogPostPageScreen />} />
				<Route path='/login' element={<LoginScreen />} />
				<Route path='/register' element={<RegisterScreen />} />
				<Route path='/profile' element={<ProfileScreen />} />
				<Route path='/user/:id/edit' element={<BlogUpdateScreen />} />

				</Routes>
			</Flex>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
