import { Box, Flex, Text } from "@chakra-ui/react";
import Lottie from "lottie-web";
import React, { Suspense, useEffect, useRef } from "react";
import LottieLoader from "react-lottie-loader";
import { Colors } from "../../colors";
import ArrowRightIcon from "../../Icons/arrowRightIcon";
import ChevronRightIcon from "../../Icons/chevronRightIcon";

export interface IPathComponents {
  topText: string;
  name: string;
  description: string;
  path: string;
}

export const PathComponent = ({ topText, name, description, path }) => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element.current) console.log("firing");
    Lottie.loadAnimation({
      path: path,
      renderer: "svg",
      autoplay: true,
      container: element.current,
      loop: true,
      rendererSettings: { progressiveLoad: false },
    });
    Lottie.setQuality(20);
  }, [element.current]);

  return (
    <Flex
      w="33%"
      marginTop="90px"
      p="60px"
      zIndex="10"
      direction="column"
      position="relative"
      borderRadius="10px"
      backdropFilter="blur(20px)"
      bg="linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(10, 10, 10, 0) 100%)"
    >
      <Flex gridGap="3px" direction="column">
        <Flex
          ref={element}
          position="absolute"
          top="0"
          left="60%"
          transform="translate(-50%, -35%)"
          w="265px"
          h="265px"
          zIndex="0"
        />
        <Text fontSize="16px" color="white">
          {topText}
        </Text>
        <Text fontSize="56px" color="white" fontWeight="700" zIndex="2">
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
