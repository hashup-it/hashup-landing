import { Flex, Text, Box } from "@chakra-ui/react";
import React from "react";
import RedTriangleIcon from "../../../../Icons/redTriangleIcon";
import { Colors } from "../../../../colors";

export const ForCreators = () => {
  return (
    <Flex
      flexDirection="column"
      pt='80px'
      w="100%"
      alignItems="center"
      zIndex="10"
      justifyContent="center"
      gridGap="32px"
      position='absolute'
      h='100vh'
    >
      <Flex justifyContent="space-between" alignItems="center" gridGap="48px">
        <Text color={Colors.greyText}>For Investor</Text>
        <Text color={Colors.greyText}>For Gamers</Text>
        <Flex gridGap="10px" fontWeight="600">
          <RedTriangleIcon w=''mt="-5px" />
          For Creators
          <RedTriangleIcon transform="rotate(3deg)" mt="15px" />
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        fontSize="80px"
        fontWeight="800"
        color="white"
        gridGap="-40px"
        alignItems="center"
        lineHeight="100%"
      >
        <Flex alignItems='center' maxW='70%' textAlign='center'>
          <Text> You are able to freely CREATE, sell and earn<strong>.</strong></Text>
        </Flex>
      </Flex>
          <Flex justifyContent='space-between' fontSize='24px' fontWeight='400' gridGap='96px' pt='40px' pb='30px' >
            <Flex justifyContent='flex-start' lineHeight='120%' direction='column' textAlign='center'>
              <Text>Do you know how <Text as='span'color={Colors.brandMain}>easy it is </Text> </Text>
              <Text><Text as='span' color={Colors.brandMain}>to publish games</Text> with us?</Text>
            </Flex>
            <Flex justifyContent='flex-start' lineHeight='120%' direction='column' textAlign='center'>
              <Text>Did you know that you <Text as='span'color={Colors.brandMain}>don't</Text></Text>
              <Text color={Colors.brandMain}>have to lose money on your</Text>
              <Text color={Colors.brandMain}>game <Text as='span' color='white'>sales at all?</Text></Text>
            </Flex>
            <Flex justifyContent='flex-start' lineHeight='120%' direction='column' textAlign='center'>
              <Text>Making money on <Text as='span'color={Colors.brandMain}>game</Text> </Text>
              <Text><Text as='span' color={Colors.brandMain}>trading? </Text>It’s possible!</Text>
            </Flex>
          </Flex>
          <Flex 
        borderRadius='5' 
        zIndex='2'
        p='17px 22px' 
        fontSize='14px' 
        bgColor={Colors.brandMain} 
        fontWeight='700' 
        color='white' 
        _after={{
          content: '""',
          zIndex: '0',
          bgColor: 'red',
          width: "121px", 
          height: "35px",
          position: "absolute",
          transform: "translate(-50%, 30%)",
          left: "50%",
          filter: 'blur(35px)',
          }}>
            <Text zIndex='4'>Publish your game</Text>
          </Flex>
          <Box mt='60px' w='1px' h='200px' bgColor={Colors.brandMain}/>
    </Flex>
  );
};

export default ForCreators;