import { Flex, Text, Box } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

export const NavBarItems = () => {
  return (
    <Flex fontWeight="600" fontSize="14px" color="white" gridGap="24px">
      <Link href="/gamers">
        <Flex wrap="nowrap" gridGap="24px">
          <Text cursor="pointer">Gamers</Text>
          <Text cursor="pointer">.</Text>
        </Flex>
      </Link>
      <Link href="/creators">
        <Flex wrap="nowrap" gridGap="24px">
          <Text cursor="pointer">Creators</Text>
          <Text cursor="pointer">.</Text>
        </Flex>
      </Link>
      <Link href="/investors">
        <Flex wrap="nowrap" gridGap="24px">
          <Text cursor="pointer">Investors</Text>
          <Text cursor="pointer">.</Text>
        </Flex>
      </Link>
      <Link href="/token">
        <Flex wrap="nowrap" gridGap="24px">
          <Text cursor="pointer">Token</Text>
          <Text cursor="pointer">.</Text>
        </Flex>
      </Link>
      <Link href="/cartridge">
        <Flex wrap="nowrap">
          <Text cursor="pointer">Cartridge</Text>
        </Flex>
      </Link>
    </Flex>
  );
};

export default NavBarItems;
