import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export const NavBarItems = () => {
  return (
    <Flex fontWeight="600" fontSize="14px" color="white" gridGap="24px">
      <Text>Gamers</Text>.<Text>Creators</Text>.<Text>Investors</Text>.
      <Text>Token</Text>.<Text>Cartridge</Text>
    </Flex>
  );
};

export default NavBarItems;
