import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import HashupLogoBg from "../../Icons/hashupLogoBg";
import { ScrollImages } from "../Advantages/scrollImages";
import Partners from "./partners";

export const SectionOne = () => {
  const refferencePoint = useRef();

  return (
    <Flex
      flexDirection="column"
      mt="28vh"
      alignItems="flex-start"
      justifyContent="space-between"
      w="100%"
      zIndex="0"
      position="relative"
      ref={refferencePoint}
    >
      <Flex position="absolute" top="-15vh" right="-20vw" w="80vw">
        <ScrollImages animationHookReference={refferencePoint} />
      </Flex>
      <Flex
        flexDirection="column"
        maxW="42vw"
        ml="18vw"
        gridGap="30px"
        zIndex="10"
        mb="250px"
      >
        <Flex
          flexDirection="column"
          fontSize="60px"
          fontWeight="800"
          lineHeight="120%"
        >
          <Text>HashUp is a</Text>
          <Text>brand-new and</Text>
          <Text>innovative platform</Text>
        </Flex>
        <Text fontSize="25px" fontWeight="600">
          that combines the advantages of physical and digital game
          distribution, giving gamers freedom and developers new earning
          opportunities<strong>.</strong>
        </Text>
        <Text fontSize="25px" fontWeight="600">
          We want to make the software distribution market transparent and fair
          following the will of gamers and developers<strong>.</strong>
        </Text>
      </Flex>
      <Partners />
      <Box h="1px" w="100vw" ml="-100px" bgColor="white" opacity="0.1" />
    </Flex>
  );
};

export default SectionOne;
