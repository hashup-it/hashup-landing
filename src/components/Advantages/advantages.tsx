import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Colors } from "../../colors";
import ArrowRightIcon from "../../Icons/arrowRightIcon";
import FirstDistributionModel from "../../Icons/firstDistributionModel";
import HashupLogoBg from "../../Icons/hashupLogoBg";
import SecondDistributionModel from "../../Icons/secondDistributionModel";
import PhaseCard from "./phaseCard";

export const Advantages = () => {
  return (
    <Flex
      h="110vh"
      zIndex="0"
      flexDirection="column"
      bgColor="#0A0A0A"
      w="100vw"
      p="90px"
      alignItems="center"
      justifyContent="space-between"
    >
      <HashupLogoBg position="absolute" top="100vh" right="0" zIndex="1" />
      <Flex
        maxW="60vw"
        textAlign="center"
        flexDirection="column"
        gridGap="20px"
      >
        <Text fontSize="70px" fontWeight="700" lineHeight="130%">
          Advantages of the new distribution model<strong>!</strong>
        </Text>
        <Text fontSize="17px" fontWeight="300" color={Colors.greyText}>
          HashUp is a game distribution platform that combines native licensed
          media with the world of the web3, using the ERC20 token standard.
          Finally, you can truly own, sell, exchange, and trade your game!
        </Text>
      </Flex>
      <Flex
        gridGap="0px"
        w="80%"
        justifyContent="space-between"
        mt="50px"
        alignItems="center"
        mb="90px"
      >
        <PhaseCard isActive={false} image={<FirstDistributionModel />} />
        <ArrowRightIcon color="white" mt="-130px" h="25px" />
        <PhaseCard isActive={false} image={<SecondDistributionModel />} />
        <ArrowRightIcon color="white" mt="-130px" h="25px" />
        <PhaseCard isActive={true} image={<FirstDistributionModel />} />
      </Flex>
      <Box h="1px" w="100vw" bgColor="white" opacity="0.1">
        <Text opacity="0">.</Text>
      </Box>
    </Flex>
  );
};

export default Advantages;