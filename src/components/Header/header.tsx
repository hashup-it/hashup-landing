import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import HeaderBottom from './HeaderBottom/headerBottom';
import HeaderMain from './HeaderMain/headerMain';

export const Header = () => {
	return (
		<Flex
			flexDirection="column"
			alignItems="center"
			justifyContent="space-between"
			w="100%"
			h={['none', 'none', '85vh', '85vh']}
			pb={['0px', '0px', '10px', '10px']}
			mb={['0px', '0px', '50px', '50px']}
		>
			<Box
				bg="linear-gradient(180deg, rgba(78,77,97,1) 15%, rgba(0,0,0,1) 80%)"
				position="absolute"
				top="0"
				left="0"
				zIndex="0"
				h="150vh"
				w="100vw"
				display={['none', 'none', 'flex', 'flex']}
			/>
			<Image
				src="assets/mobileMainHeader.png"
				display={['flex', 'flex', 'none', 'none']}
				zIndex="0"
				w="100vw"
				top="0"
				position="absolute"
			/>
			<Box
				display={['none', 'none', 'flex', 'flex']}
				as="video"
				src="assets/videos/HashUpHeader.mp4"
				autoPlay
				playsInline
				preload="none"
				muted
				loop
				position="absolute"
				w="100vw"
				left="0"
				top="0"
				zIndex="1"
				opacity="1"
			/>
			<HeaderMain />
			<HeaderBottom />
		</Flex>
	);
};

export default Header;
