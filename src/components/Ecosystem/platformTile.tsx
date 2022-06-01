import { Box, Flex, Text } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { Colors } from "../../colors";

interface IPlatformTile {
  first: string;
  second: string;
  active: boolean;
  bgColor?: string;
  transform?: number;
  onClick?: () => void;
}

export const PlatformTile: FC<IPlatformTile> = ({
  first,
  second,
  active,
  transform,
  onClick,
  bgColor,
}) => {
  return (
    <Flex
      onClick={onClick}
      w="180px"
      h="114px"
      p="25px"
      justifyContent="center"
      flexDirection="column"
      borderRadius="9px"
      transition="ease 0.3s"
      position="relative"
      zIndex="100"
      bgColor={bgColor}
      bgGradient={
        active
          ? `linear(${(
              180 + transform
            ).toString()}deg, rgba(255, 255, 255, 0.1) 0%, rgba(10, 10, 10, 0) 100%)`
          : ""
      }
      border={active ? "" : "1px solid rgba(255, 255, 255, 0.3)"}
      cursor={active ? "pointer" : ""}
      backdropFilter="blur(18px)"
      _hover={active ? { bgColor: `${Colors.brandMain}`, border: "none" } : {}}
    >
      <Text fontSize="15px" fontWeight="300">
        {first}
      </Text>
      <Text fontSize="20px" fontWeight="600">
        {second}
      </Text>
      {!active && (
        <Flex
          position="absolute"
          p="6px 12px"
          fontSize="12px"
          fontWeight="300"
          alignItems="center"
          justifyContent="center"
          bgGradient="linear(180deg, #3F4450 0%, rgba(100, 110, 131, 0.44) 100%)"
          borderRadius="5px"
          bottom="-10%"
        >
          COMING SOON
        </Flex>
      )}
    </Flex>
  );
};

export default PlatformTile;
