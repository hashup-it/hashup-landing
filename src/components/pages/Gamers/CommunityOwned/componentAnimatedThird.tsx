import React, { FC } from 'react';
import { Flex, Text, Box, SlideFade } from '@chakra-ui/react';
import { Colors } from '../../../../colors';


export interface IComponentAnimatedThird {
  text: string;
  onClick?: () => void;
  isActive: number;
}

export const ComponentAnimatedThird = ({text, isActive, onClick}) => {
	return (
		<Flex justifyContent="flex-start" textAlign="start">
			{isActive === 2 ? (
			<Flex justifyContent='flex-start' gridGap='26px' alignItems='center' > 
			<Box bgColor={Colors.brandMain} w='88px' h='1px'/>
			<Text
				color='white'
				fontSize="26px"
				fontWeight="500"
				cursor="pointer"
				maxW="50%"
				onClick={onClick}
			>
				{text}
			</Text>
			</Flex>) : 
			<Flex justifyContent='flex-start' alignItems='center'> 
			<Text
				color='#9a9a9a'
				onClick={onClick}
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

export default ComponentAnimatedThird;