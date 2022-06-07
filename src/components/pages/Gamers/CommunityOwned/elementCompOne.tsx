import React, { FC } from 'react';
import { Flex, Text, Box, SlideFade } from '@chakra-ui/react';
import { Colors } from '../../../../colors';

export interface IComponentAnimatedSecond {
	activeComp: boolean;
}

export const ElementCompOne = ({ activeComp }) => {
	return (
		<Flex lineHeight="90%" mt="40px">
			{activeComp ? (
				<Text fontSize="300px">
					<strong>No.</strong>
				</Text>
			) : (
				<Text fontSize="70px">And the answer is</Text>
			)}
		</Flex>
	);
};
