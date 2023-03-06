import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Colors } from '../../../colors';
import ArrowRightIcon from '../../../Icons/arrowRightIcon';

export const Whitepaper = () => {
	return (
		<Flex
			fontSize="14px"
			fontWeight="600"
			color="white"
			alignItems="center"
			gridGap="5px"
			position="relative"
			p="10px"
			cursor="pointer"
		>
			Whitepaper
			<ArrowRightIcon />
			<Box
				bgColor={Colors.brandMain}
				p="1px 15px"
				position="absolute"
				bottom="0"
				left="10px"
			></Box>
		</Flex>
	);
};

export default Whitepaper;
