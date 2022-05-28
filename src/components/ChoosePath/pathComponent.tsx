import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Colors } from "../../colors";
import ArrowRightIcon from "../../Icons/arrowRightIcon";
import ChevronRightIcon from "../../Icons/chevronRightIcon";

export interface IPathComponents {
  topText: string;
  name: string;
  description: string;
}

export const PathComponent = ({ topText, name, description }) => {
  return (
    <Flex
      w="33%"
      p="80px"
      direction="column"
      borderRadius="10px"
      backdropFilter="blur(20px)"
      bgGradient="linear(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(10, 10, 10, 0) 70%)"
    >
      <Flex gridGap="3px" direction="column">
        <Text fontSize="16px" color="white">
          {topText}
        </Text>
        <Text fontSize="56px" color="white" fontWeight="700">
          {name}
        </Text>
      </Flex>
      <Flex paddingTop="15px">
        <Box bgColor={Colors.brandMain} w="30px" h="6px" />
      </Flex>
      <Flex paddingTop="22px">
        <Text
          fontSize="16px"
          fontWeight="300"
          lineHeight="180%"
          color={Colors.greyText}
        >
          {description}
        </Text>
      </Flex>
      <Flex gridGap="6px" paddingTop="30px">
        <Flex
          bgColor={Colors.brandMain}
          color="white"
          borderRadius="0px 0px 0px 14px"
          p="8px 13px"
          fontSize="14"
          alignItems="center"
          fontWeight="600"
        >
          Learn more
        </Flex>
        <Flex bgColor={"#9A2727"} alignItems="center" p="15px">
          <ChevronRightIcon />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PathComponent;
