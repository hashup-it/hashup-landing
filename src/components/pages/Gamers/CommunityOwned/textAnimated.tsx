import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export interface ITextAnimated {
    text: string,
    TextB? : string
    subText: string,
}


export const TextAnimated = ({text, subText, textB}) => {
  return (
    <Flex direction='column' alignItems='center' textAlign='center' fontSize='90px' maxW='75%' fontWeight='700' gridGap='20px'>
        <Text lineHeight='100%'>{text}<strong>{subText}</strong> {textB}</Text>
    </Flex>
  )
}

export default TextAnimated