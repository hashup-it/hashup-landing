import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { PartnersInfo } from './partnersInfo';

export const Partners = () => {
	return (
		<Flex
			w="100%"
			position="absolute"
			bottom="100px"
			alignItems="center"
			zIndex="1000"
		>
			<Marquee gradient={false}>
				{PartnersInfo.map(partner => (
					<Box key={partner.name}>{partner.logo}</Box>
				))}
			</Marquee>
		</Flex>
	);
};

export default Partners;
