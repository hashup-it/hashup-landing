import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export const GlobalContainer = ({ children }) => {
  return (
    <Flex flexDirection="column" alignItems="center" w="100vw" p="30px 90px">
      {children}
    </Flex>
  );
};

export default GlobalContainer;
