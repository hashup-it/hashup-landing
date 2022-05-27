import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Colors } from "../../../colors";
import RedTriangleIcon from "../../../Icons/redTriangleIcon";
import HeaderMainButtons from "./headerMainButtons";

export const HeaderMain = () => {
  return (
    <Flex
      flexDirection="column"
      w="100%"
      alignItems="center"
      zIndex="10"
      justifyContent="center"
      gridGap="32px"
      mt="50px"
    >
      <Flex fontSize="15px" fontWeight="600" color="white" gridGap="4px">
        <RedTriangleIcon mt="-5px" />
        Solving the<strong>Gaming Industries'</strong>
        biggest problems
        <RedTriangleIcon transform="rotate(3deg)" mt="15px" />
      </Flex>
      <Flex
        flexDirection="column"
        fontSize="80px"
        fontWeight="800"
        color="white"
        gridGap="-40px"
        alignItems="center"
        lineHeight="100%"
      >
        <Flex>Decentralized Games</Flex>
        <Flex>Marketplace and</Flex>
        <Flex>
          Publishing Platform
          <strong>.</strong>
        </Flex>
      </Flex>
      <HeaderMainButtons />
    </Flex>
  );
};

export default HeaderMain;
