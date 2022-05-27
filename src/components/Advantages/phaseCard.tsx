import { Box, Flex, Text } from "@chakra-ui/react";
import React, { Component, FC } from "react";
import { Colors } from "../../colors";
import HashupSingleLogo from "../../Icons/hashupSingleLogo";

interface IPhaseCard {
  isActive: boolean;
  image?: any;
}

export const PhaseCard: FC<IPhaseCard> = ({ isActive, image }) => {
  return (
    <Flex>
      {isActive ? (
        <Flex
          border={`1px solid ${Colors.brandMain}`}
          borderRadius="0 50px 0 0"
          p="10px"
          position="relative"
          bgColor="black"
          boxShadow={`0 4px 10px ${Colors.brandMain}`}
        >
          <Flex
            bgColor={Colors.brandMain}
            borderRadius="50%"
            position="absolute"
            mt="-20px"
            mr="-10px"
            h="70px"
            w="70px"
            top="0"
            right="0"
            alignItems="center"
            justifyContent="center"
            zIndex="0"
          />
          <Flex
            border={`1px solid ${Colors.brandMain}`}
            bgColor="#0b0b0b"
            borderRadius="0 50px 0 0"
            flexDirection="column"
            color="white"
            alignItems="center"
            justifyContent="space-between"
            p="20px 0"
            gridGap="10px"
            zIndex="1"
            bgGradient="linear(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.0018) 100%)"
            backdropBlur="75px"
            position="relative"
          >
            <HashupSingleLogo
              zIndex="10"
              h="50px"
              position="absolute"
              top="0"
              right="0"
              mt="-20px"
              mr="-10px"
            />
            {image}
          </Flex>
        </Flex>
      ) : (
        <Flex
          flexDirection="column"
          color="#9D9D9D"
          alignItems="center"
          justifyContent="space-between"
          p="0px"
          gridGap="10px"
        >
          {image}
        </Flex>
      )}
    </Flex>
  );
};

export default PhaseCard;