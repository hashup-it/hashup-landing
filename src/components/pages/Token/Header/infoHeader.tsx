import { Flex, Text, Box } from '@chakra-ui/react';
import React from 'react';
import RedTriangleIcon from '../../../../Icons/redTriangleIcon';
import { Colors } from '../../../../colors';

export const InfoHeader = () => {
  return (
    <Flex
    flexDirection="column"
    mt="100px"
    w="100%"
    alignItems="center"
    zIndex="10"
    justifyContent="center"
    gridGap="32px"
    position="absolute"
    h="100vh"
>
    <Flex justifyContent="space-between" alignItems="center" gridGap="48px" display={['none', 'none', 'flex', 'flex']}>
        <Flex gridGap="10px" fontWeight="600">
            <RedTriangleIcon mt="-5px" />
            Hahsup protocol
            <RedTriangleIcon transform="rotate(3deg)" mt="15px" />
        </Flex>
    </Flex>
    <Flex
        flexDirection="column"
        fontSize={{base: '38px', lg: "80px"}}
        fontWeight="800"
        color="white"
        gridGap="-40px"
        alignItems="center"
        lineHeight="100%"
    >
        <Flex alignItems="center" maxW="80%" textAlign='center'>
            <Text lineHeight='90%'>
                The <strong> #Hash </strong>Token Economics
            </Text>
        </Flex>
    </Flex>
    <Text fontSize="28px" fontWeight="300" pt="32px" textAlign="center">
    Przegląd ogólny sieci HashUp, opis tokenu, jego mechaniki, jak zarabiać # oraz zachęty do #ODL.
    </Text>
    <Box m="60px 0" w="1px" h="200px" bgColor={Colors.brandMain} />
</Flex>
  )
}

export default InfoHeader