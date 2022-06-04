import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Colors } from '../../../../colors';

export interface IElementCompOne {
    text: string;
}

export const ElementCompOne = ({text}) => {
  return (
    <Flex>
        <Text color={Colors.brandMain} fontSize='90px'>
            {text}
        </Text>
    </Flex>
  )
}

export default ElementCompOne