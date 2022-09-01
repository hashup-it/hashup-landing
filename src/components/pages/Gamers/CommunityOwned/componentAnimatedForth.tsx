import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Colors } from '../../../../colors';

export interface IComponentAnimatedForth {
	text?: string;
	isActive: number;
}

export const ComponentAnimatedForth = ({ text, isActive }) => {
	return (
		<Flex textAlign="start">
			{isActive === 3 || isActive === 4 ? (
				<Flex gridGap="26px" alignItems="center">
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
				<Flex alignItems="center">
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

export default ComponentAnimatedForth;
