import React, { FC } from 'react';
import { Flex, Text, Box, SlideFade } from '@chakra-ui/react';
import { Colors } from '../../../../colors';


export interface IComponentAnimatedSecond {
  text: string;
  isActive: number;
}

export const ComponentAnimatedSecond = ({text, isActive}) => {
	return (
		<Flex justifyContent="flex-start" textAlign="start">
			{isActive === 1 ? (
			<Flex justifyContent='flex-start' gridGap='26px' alignItems='center' > 
			<Box bgColor={Colors.brandMain} w='88px' h='1px'/>
			<Text
				color='white'
				fontSize="26px"
				fontWeight="500"
				cursor="pointer"
				maxW="50%"
>
				{text}
			</Text>
			</Flex>) : 
			<Flex justifyContent='flex-start' alignItems='center'> 
			<Text
				color='white'
				fontSize="26px"
				fontWeight="500"
				cursor="pointer"
				maxW="50%"
			>
				{text}
			</Text>
			</Flex>			
			}
		</Flex>

	);
};

export default ComponentAnimatedSecond;
