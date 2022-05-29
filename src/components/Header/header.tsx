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
      pb="5px"
    >
      <Image
        position="absolute"
        h="100vh"
        w="100vw"
        left="0"
        top="0"
        zIndex="0"
        src="/assets/headerBg.png"
        bgGradient="linear(180deg, rgba(0, 0, 0, 0) 77.54%, #000000 92.75%)"
        //opacity="0.3"
      />
      <HeaderMain />
      <HeaderBottom />
    </Flex>
  );
};

export default Header;
