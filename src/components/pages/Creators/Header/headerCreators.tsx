import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import ForCreators from './forCreators';

export const HeaderCreators = () => {
	return (
		<Flex
			flexDirection="column"
			alignItems="center"
			justifyContent="space-between"
			w="100%"
			h="85vh"
			mb="200px"
			mt="100px"
		>
			<Image
				src="/assets/desktopBg.png"
				w="100vw"
				zIndex="0"
				opacity="0.3"
				bgGradient="linear(180deg, rgba(0, 0, 0, 0) 0%, #000000 50%)"
				position="absolute"
				left="0"
			/>
			<ForCreators />
		</Flex>
	);
};

export default HeaderCreators;
