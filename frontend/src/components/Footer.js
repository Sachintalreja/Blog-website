import { Flex, Text } from '@chakra-ui/react';

const Footer = () => {
	return (
		<Flex as='footer' justifyContent='center' py='5'>
			<Text>
				Copyright {new Date().getFullYear()}. Tech Blog. All Rights Reserved.
			</Text>
		</Flex>
	);
};

export default Footer;
