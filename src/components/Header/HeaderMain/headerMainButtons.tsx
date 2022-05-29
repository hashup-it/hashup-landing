import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Colors } from "../../../colors";
import ChevronRightIcon from "../../../Icons/chevronRightIcon";

export const HeaderMainButtons = () => {
  return (
    <Flex gridGap="31px" mt="40px" alignItems="center">
      <Flex
        bgColor={Colors.brandMain}
        w="200px"
        h="70px"
        borderRadius="0 0 0 25px"
        p="12px 19px"
        alignItems="center"
        justifyContent="space-between"
        cursor="pointer"
        transition="ease 0.2s"
      >
        <Flex flexDirection="column">
          <Text fontSize="15px" fontWeight="500" color="black">
            New economy for
          </Text>
          <Text fontSize="18px" fontWeight="600" color="white">
            Creator
          </Text>
        </Flex>
        <ChevronRightIcon />
      </Flex>
      <Flex
        bgColor="black"
        w="200px"
        h="70px"
        borderRadius="0 25px 0 0"
        border={`1px solid ${Colors.brandMain}`}
        p="12px 19px"
        alignItems="center"
        justifyContent="space-between"
        cursor="pointer"
        transition="ease 0.2s"
      >
        <Flex flexDirection="column">
          <Text fontSize="15px" fontWeight="500" color="white">
            Freedom for
          </Text>
          <Text fontSize="18px" fontWeight="600" color={Colors.brandMain}>
            Gamers
          </Text>
        </Flex>
        <ChevronRightIcon />
      </Flex>
    </Flex>
  );
};

export default HeaderMainButtons;
