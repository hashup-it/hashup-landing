import React, { FC } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Colors } from '../../../../colors';


export interface ComponentAnimated{
  text: string;
  onClick: () => void;
  isActive: boolean;
}

export const ComponentAnimated = ({text, isActive}) => {
	return (
		<Flex justifyContent="flex-start" alignItems="center" gridGap="20px" textAlign="start" >
			<Text
				color={isActive ? 'white' : '#9a9a9a'}
				onClick={() => onclick}
				fontSize="26px"
				fontWeight="500"
				cursor="pointer"
				maxW="50%"
			>
				{text}
			</Text>
			<Flex fontSize="90px" alignItems="center">
				<Text color={Colors.brandMain}>No</Text>
				<Text>.</Text>
			</Flex>
		</Flex>
	);
};

export default ComponentAnimated;
