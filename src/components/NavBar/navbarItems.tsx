import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export const NavBarItems = () => {
  return (
    <Flex fontWeight="600" fontSize="14px" color="white" gridGap="24px">
      <Text cursor="pointer">Gamers</Text>.
      <Text cursor="pointer">Creators</Text>.
      <Text cursor="pointer">Investors</Text>.
      <Text cursor="pointer">Token</Text>.
      <Text cursor="pointer">Cartridge</Text>
    </Flex>
  );
};

export default NavBarItems;
