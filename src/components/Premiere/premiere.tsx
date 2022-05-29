import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Colors } from "../../colors";
import Newsletter from "./newsletter";
import Time from "./time";

export const Premiere = () => {
  return (
    <Flex
      h="100vh"
      w="100vw"
      bgColor="black"
      justifyContent="center"
      alignItems="center"
      position="relative"
      flexDirection="column"
    >
      <Box
        w="100vw"
        h="1px"
        position="absolute"
        top="0"
        bgColor="white"
        opacity="0.1"
      />
      <Flex
        position="absolute"
        borderRadius="50%"
        w="600px"
        h="600px"
        bgGradient="radial(rgba(255,63,63,0.4) 0%, rgba(0,0,0,0.2) 60%)"
      />
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        gridGap="70px"
      >
        <Flex flexDirection="column" zIndex="1" alignItems="center">
          <Text fontSize="110px" fontWeight="700" lineHeight="100%">
            Premiere
          </Text>
          <Text
            fontSize="50px"
            fontWeight="800"
            lineHeight="100%"
            letterSpacing="0.3em"
          >
            <strong>21</strong>th June
          </Text>
        </Flex>
        <Time />
        <Newsletter />
      </Flex>
      <Box
        w="100vw"
        h="1px"
        position="absolute"
        bottom="0"
        bgColor="white"
        opacity="0.1"
      />
    </Flex>
  );
};

export default Premiere;
