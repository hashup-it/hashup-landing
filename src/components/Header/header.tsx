import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import HeaderBottom from "./HeaderBottom/headerBottom";
import HeaderMain from "./HeaderMain/headerMain";

export const Header = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      h="85vh"
      pb="10px"
      mb="50px"
    >
      <Box
        as="video"
        src="assets/videos/HashCoinWeb.mp4"
        autoPlay
        playsInline
        preload="none"
        muted
        loop
        position="absolute"
        w="100vw"
        left="0"
        top="0"
        zIndex="0"
        opacity="0.3"
        bgGradient="linear(180deg, rgba(0, 0, 0, 0) 77.54%, #000000 92.75%)"
      />
      <HeaderMain />
      <HeaderBottom />
    </Flex>
  );
};

export default Header;
