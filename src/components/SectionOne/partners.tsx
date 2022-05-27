import { Flex } from "@chakra-ui/react";
import React from "react";
import { PartnersInfo } from "./partnersInfo";

export const Partners = () => {
  return (
    <Flex
      w="100vw"
      position="absolute"
      left="-80px"
      bottom="100px"
      gridGap="100px"
      alignItems="center"
      zIndex="10"
    >
      {PartnersInfo.map((partner) => partner.logo)}
    </Flex>
  );
};

export default Partners;
