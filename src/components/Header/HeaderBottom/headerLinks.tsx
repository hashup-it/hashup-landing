import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Colors } from "../../../colors";
import PlayVideo from "./playVideo";
import Whitepaper from "./whitepaper";

export const HeaderLinks = () => {
  return (
    <Flex gridGap="24px" alignItems="center">
      <Whitepaper />
      <Flex fontSize="14px" fontWeight="600" color="white" cursor="pointer">
        Media<strong>.</strong>
      </Flex>
      <Flex fontSize="14px" fontWeight="600" color="white" cursor="pointer">
        Docs<strong>.</strong>
      </Flex>
      <PlayVideo />
    </Flex>
  );
};

export default HeaderLinks;
