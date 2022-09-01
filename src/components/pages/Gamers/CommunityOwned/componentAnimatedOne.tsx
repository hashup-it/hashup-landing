import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Colors } from '../../../../colors';

export interface ComponentAnimatedOne {
	text: string;
	onClick?: () => void;
	isActive: number;
}

export const ComponentAnimatedOne = ({ text, isActive }) => {
	return (
		<Flex justifyContent="flex-start" textAlign="start">
			{isActive === 0 ? (
				<Flex justifyContent="flex-start" gridGap="26px" alignItems="center">
					<Box bgColor={Colors.brandMain} w="88px" h="1px" display={['none', 'none', 'flex', 'flex']} />
					<Text
						color="white"
						fontSize={['20px', '20px', '26px', '26px']}
						fontWeight="500"
						cursor="pointer"
						maxW="70%"
					>
						{text}
					</Text>
				</Flex>
			) : (
				<Flex justifyContent="flex-start" alignItems="center">
					<Text
						color="#9a9a9a"
						fontSize={['20px', '20px', '26px', '26px']}
						fontWeight="500"
						cursor="pointer"
						maxW="70%"
					>
						{text}
					</Text>
				</Flex>
			)}
		</Flex>
	);
};

export default ComponentAnimatedOne;
