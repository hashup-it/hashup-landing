import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { Colors } from '../../../../colors'

export const CommunityOwned = () => {
  return (
    <Flex direction='column' alignItems='center'>
        <Flex gridGap='6px'>
            <Text fontSize='12px' color={Colors.brandMain} >COMMUNITY-OWNED</Text>
            <Text fontSize='12px' color='white' >AND OPERATED</Text>
        </Flex>
        <Flex  pt='40px' direction='column' fontSize='90px' fontWeight='700' alignItems='center' maxW='70%' textAlign='center'> 
            <Text>Did you know that current model of gaming platforms <strong>limits</strong> you?</Text>
        </Flex>

    </Flex>
  )
}

export default CommunityOwned