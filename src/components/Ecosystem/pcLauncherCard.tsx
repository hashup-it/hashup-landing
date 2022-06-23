import React from 'react'
import { Flex, Image, Text } from "@chakra-ui/react";
import { Colors } from "../../colors";
import ChevronRightIcon from "../../Icons/chevronRightIcon";
import GameXplorerLogo from "../../Icons/gameXplorerLogo";
import PCLauncherLogo from '../../Icons/pcLauncherLogo';


export const PCLauncherCard = () => {
  return (
    <Flex w="100vw" h="80vh" p="50px 140px" display={['none', 'none', 'flex', 'flex']}>
      <Flex flexDirection="column" gridGap="50px" maxW="50%">
        <PCLauncherLogo />
        <Text fontSize="44px" fontWeight="700">
        PC Launcher with Metamask and DRM!
        </Text>
        <Text fontSize="17px" fontWeight="300" color={Colors.greyText}>
        Our tool that allows you to download and play Web 2.0 and Web3 games on your computer. Your virtual gaming shelf is the HashUp PC Launcher!        </Text>
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