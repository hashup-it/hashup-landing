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
      h={["none", "none", "85vh", "85vh"]}
      pb={["0px", "0px", "10px","10px"]}
      mb={["0px", "0px", "50px", "50px"]}
    >
      <Image src='assets/mobileMainHeader.png'
      display={['flex', 'flex', 'none', 'none']}
      zIndex='0'
      w="100vw"
      top='0'
      position='absolute'
      />
      <Box
        display={['none', 'none', 'flex', 'flex']}
        as="video"
        src="assets/videos/HashUpHeader.mp4"
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
        opacity="0.7"
        bgGradient="linear(180deg, rgba(0, 0, 0, 0) 77.54%, #000000 92.75%)"
      />
      <HeaderMain />
      <HeaderBottom />
    </Flex>
  );
};

export default Header;
