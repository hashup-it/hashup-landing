import { Flex } from "@chakra-ui/react";
import React from "react";
import ContractInfo from "./contractInfo";
import HeaderLinks from "./headerLinks";

export const HeaderBottom = () => {
  return (
    <Flex justifyContent="space-between" w="100%" zIndex="10">
      <HeaderLinks />
      <ContractInfo />
    </Flex>
  );
};

export default HeaderBottom;
