import React from 'react'
import { Flex, Image, Text } from "@chakra-ui/react";
import { Colors } from "../../colors";
import ChevronRightIcon from "../../Icons/chevronRightIcon";
import GameXplorerLogo from "../../Icons/gameXplorerLogo";
import PCLauncherLogo from '../../Icons/pcLauncherLogo';


export const PCLauncherCard = () => {
  return (
    <Flex w="100vw" h="80vh" p="50px 140px">
      <Flex flexDirection="column" gridGap="50px" maxW="40%">
        <PCLauncherLogo />
        <Text fontSize="40px" fontWeight="700">
            Blockchain Launcher for the gamers!
        </Text>
        <Text fontSize="17px" fontWeight="300" color={Colors.greyText}>
        HashUp wants to make the process of releasing games as simple as can be. 
        With GameContract we’re able to take the developer's journey to the next level.
        </Text>
        <Flex gridGap="3px">
          <Flex
            bgColor={Colors.brandMain}
            fontSize="11px"
            fontWeight="600"
            p="11px 20px"
            borderRadius="0 0 0 15px"
            cursor="pointer"
          >
            Play Games
          </Flex>
          <Flex
            bgColor={Colors.brandMain}
            opacity="0.6"
            p="10px"
            alignItems="center"
            cursor="pointer"
          >
            <ChevronRightIcon />
          </Flex>
        </Flex>
      </Flex>
      <Image
        src="assets/pcLauncherCard.png"
        position="absolute"
        right="0"
        w="50%"
      />
    </Flex>
  );
};

export default PCLauncherCard