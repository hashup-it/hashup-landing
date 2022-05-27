import { Flex } from "@chakra-ui/react";
import React from "react";
import { Colors } from "../../colors";
import ChevronDownIcon from "../../Icons/chevronDownIcon";

export const LaunchAppButton = () => {
  return (
    <Flex
      border={`1.6px solid ${Colors.brandMain}`}
      color="white"
      fontWeight="700"
      fontSize="14px"
      gridGap="14px"
      p=" 13px 20px"
      borderRadius="5px"
      alignItems="center"
      justifyContent="center"
    >
      Launch App <ChevronDownIcon />
    </Flex>
  );
};

export default LaunchAppButton;
