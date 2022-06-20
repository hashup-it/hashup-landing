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
				<Text fontSize={["96px", "96px", "300px", "300px"]}>
					<strong>No.</strong>
				</Text>
			) : (
				<Text fontSize={["30px", "30px", "70px", "70px"]}>And the answer is</Text>
			)}
		</Flex>
	);
};
