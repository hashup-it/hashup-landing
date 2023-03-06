import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import HeaderBottom from './HeaderBottom/headerBottom';
import HeaderMain from './HeaderMain/headerMain';

export const Header = () => {
	return (
		<Flex
			flexDirection="column"
			alignItems="center"
			w="100%"
			h="100%"
		>
			<Box
				bg="linear-gradient(180deg, rgba(0,0,0,0.1) 15%, rgba(0,0,0,1) 90%)"
				position="absolute"
				top="0"
				left="0"
				zIndex="2"
				h="57.25vw"
				w="100vw"
				clipPath="polygon(0 0, 100% 0, 100% 100vh, 0 100vh)"
				display={['none', 'none', 'flex', 'flex']}
			/>
			<Image
				src="/assets/mobileMainHeader.png"
				display={['flex', 'flex', 'none', 'none']}
				zIndex="0"
				w="100vw"
				top="0"
				position="absolute"
			/>
			<Box
				display={['none', 'none', 'flex', 'flex']}
				as="video"
				src="/assets/videos/hashup.mp4"
				autoPlay
				playsInline
				preload="none"
				muted
				loop
				position="absolute"
				w="100%"
				top="0"
				left="0"
				clipPath="polygon(0 0, 100% 0, 100% 100vh, 0 100vh)"
				zIndex="1"
			></Box>
			<HeaderMain />
			<HeaderBottom />
		</Flex>
	);
};

export default Header;
