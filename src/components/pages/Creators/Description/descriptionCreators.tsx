import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import HashupUnionLogo from '../../../../Icons/hashupUnionLogo'
import RedTriangleIcon from '../../../../Icons/redTriangleIcon'
import { Colors } from '../../../../colors'

export const DescriptionCreators = () => {
  return (
    <Flex alignItems='center' justifyContent='center' direction='column' position='relative'>
        <Flex>
        <HashupUnionLogo />
        </Flex>
        <Flex position='absolute' top='60%' fontSize='70px' maxW='80%' textAlign='center' fontWeight='700' lineHeight='100%' gridGap='-20px'>
            <RedTriangleIcon mt="-50px" transform="rotate(160deg)" />
            <Text >
            HashUp is the answer to the market needs<strong>.</strong>
            </Text>
            <RedTriangleIcon  transform="rotate(-40deg)" mt="150px" left='85%' position='absolute' _after={{}} />
        </Flex>
    </Flex>
  )
}

export default DescriptionCreators