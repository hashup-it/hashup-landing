import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Colors } from "../../colors";
import ChevronRightIcon from "../../Icons/chevronRightIcon";
import GameContractLogo from "../../Icons/gameContractLogo";

export const GameContractCard = () => {
  return (
    <Flex w="100vw" h="80vh" p="50px 140px">
      <Flex flexDirection="column" gridGap="50px" maxW="40%">
        <GameContractLogo />
        <Text fontSize="40px" fontWeight="700">
          Publish games independently without intermediares in 5 steps.
        </Text>
        <Text fontSize="17px" fontWeight="300" color={Colors.greyText}>
          Our goal is to make the process of publishing games as simple as
          possible. You can take your developer’s journey to the next level by
          publishing games on GameContract, eliminating intermediaries.
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
            Create Your ERC-20 License
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
        src="assets/gameContractCard.png"
        position="absolute"
        right="0"
        w="50%"
      />
    </Flex>
  );
};

export default GameContractCard;