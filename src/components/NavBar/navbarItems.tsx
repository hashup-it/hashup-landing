import { Flex, Text, Box } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

export const NavBarItems = () => {
  return (
    <Flex fontWeight="600" fontSize="14px" color="white" gridGap="24px">
      <Link href="/gamers">
        <Flex wrap="nowrap" gridGap="24px" _hover={{ opacity: "0.5" }}>
          <Text cursor="pointer">Gamers</Text>
        </Flex>
      </Link>
      <Text>.</Text>
      <Link href="/creators">
        <Flex wrap="nowrap" gridGap="24px" _hover={{ opacity: "0.5" }}>
          <Text cursor="pointer">Creators</Text>
        </Flex>
      </Link>
      <Text>.</Text>
      <Link href="/investors">
        <Flex wrap="nowrap" gridGap="24px" _hover={{ opacity: "0.5" }}>
          <Text cursor="pointer">Investors</Text>
        </Flex>
      </Link>
      <Text>.</Text>
      <Link href="/token">
        <Flex wrap="nowrap" gridGap="24px" _hover={{ opacity: "0.5" }}>
          <Text cursor="pointer">Token</Text>
        </Flex>
      </Link>
      <Text>.</Text>
      <Link href="/cartridge">
        <Flex wrap="nowrap" _hover={{ opacity: "0.5" }}>
          <Text cursor="pointer">Cartridge</Text>
        </Flex>
      </Link>
    </Flex>
  );
};

export default NavBarItems;
