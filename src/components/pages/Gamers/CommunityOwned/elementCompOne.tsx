import React, { FC } from 'react';
import { Flex, Text, Box, SlideFade } from '@chakra-ui/react';
import { Colors } from '../../../../colors';


export interface IComponentAnimatedSecond {
  activeComp: boolean,
}

export const ElementCompOne = ({activeComp}) => {
	return (
		<Flex lineHeight='90%' justifyContent='flex-start' textAlign='start' pt='40px'>
			{activeComp ? (
        <Text fontSize='310px'><strong>No.</strong></Text>
      ) :
        <Text fontSize='90px'>And the answer is</Text>
			}
		</Flex>

	);
};
