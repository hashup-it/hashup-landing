import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Colors } from "../../../colors";
import PlayVideoIcon from "../../../Icons/playVideoIcon";

export const PlayVideo = () => {
  return (
    <Flex
      alignItems="center"
      gridGap="11px"
      fontSize="14px"
      fontWeight="600"
      color="white"
    >
      <PlayVideoIcon /> Play Video<Text color={Colors.brandMain}></Text>
    </Flex>
  );
};

export default PlayVideo;