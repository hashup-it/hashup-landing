import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Colors } from "../../../colors";
import MetamaskIcon from "../../../Icons/metamaskIcon";

export const MetamaskButton = () => {
  return (
    <Flex
      bgColor="black"
      border={`1px solid ${Colors.brandMain}`}
      borderRadius="4px"
      p="10px"
      fontSize="12px"
      ml="5px"
      alignItems="center"
      justifyContent="center"
      gridGap="6px"
      cursor="pointer"
    >
      <MetamaskIcon />
      <Text>ADD TO METAMASK</Text>
    </Flex>
  );
};

export default MetamaskButton;
