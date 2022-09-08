import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import ForGamers from './forGamers';

export const HeaderGamers = () => {
	return (
		<Flex flexDirection="column" alignItems="center" justifyContent="space-between" h="85vh" mb="200px">
			<Image
				src="/assets/forgamers_bg-szer.png"
				w="100%"
				zIndex="0"
				position="absolute"
				top="0"
				left="0"
				h="100vh"
				opacity="0.7"
				clipPath="polygon(0 0, 100% 0, 100% calc(100vh - 136px), 0 calc(100vh - 136px))"
				display={['none', 'none', 'flex', 'flex']}
				bgGradient="linear(180deg, rgba(0, 0, 0, 0) 77.54%, #000000 92.75%)"
			/>
			<Image
				src="/assets/forgamers_mobile.png"
				w="100%"
				zIndex="0"
				position="absolute"
				opacity="0.7"
				display={['flex', 'flex', 'none', 'none']}
				bgGradient="linear(180deg, rgba(0, 0, 0, 0) 77.54%, #000000 92.75%)"
			/>

			<ForGamers />
		</Flex>
	);
};

export default HeaderGamers;
