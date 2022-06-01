import { Flex, Image, Text, Box } from "@chakra-ui/react";
import { Colors } from "../colors";

import React from "react";

export const Token = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      h="85vh"
      pb="10px"
      mb="100px"
    >
      <Flex flexDirection="column">
        <Image
          //tutaj bedzie video na fullscreen
          position="absolute"
          h="100vh"
          w="100vw"
          left="0"
          top="0"
          zIndex="0"
          src="/assets/hash-tokenomics.png"
          bgGradient="linear(180deg, rgba(0, 0, 0, 0) 77.54%, #000000 92.75%)"
          opacity="0.7"
        />
      </Flex>
      <Flex
        w="60%"
        mt="20px"
        zIndex="1"
        direction="column"
        alignItems="center"
        gridGap="10px"
        textAlign="center"
      >
        <Text fontSize="16px" color={Colors.greyText} fontWeight="400">
          THE HASH / # TOKEN ECONOMICS
        </Text>
        <Text fontSize="48px" color="white" fontWeight="700">
          THE HASH / # TOKEN ECONOMICS
        </Text>
        <Box bgColor="white" w="100%" h="1px" />
        <Text>
          Przegląd ogólny sieci HashUp, opis tokenu, jego mechaniki, jak
          zarabiać # oraz zachęty do #ODL.
        </Text>
        <Box bgColor="white" w="100%" h="1px" />
        <Text>
          Celem platformy HashUp jest agregowanie tokenów licencyjnych do
          oprogramowania (głównie gier) zgodnych ze standardami ERC20 lub ERC721
          i ich sprzedaż.{" "}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Token;
