import { Flex } from "@chakra-ui/react";
import React from "react";
import { Socials } from "./socials";

export const StickySocials = () => {
  return (
    <Flex
      flexDirection="column"
      transform='translateY(-50%)'
      gridGap="40px"
      position="fixed"
      top="50%"
      right="0"
      zIndex="100000"
      cursor="pointer"
      alignItems="center"
      p="10px"
    >
      {Socials.map((social) => social.logo)}
    </Flex>
  );
};

export default StickySocials;
