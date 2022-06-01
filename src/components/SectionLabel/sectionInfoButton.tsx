import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Colors } from "../../colors";

export const SectionInfoButton = ({ zIndex ,label, ...props }: { label: string, zIndex?: string, }) => {
  return (
    <Flex
      position="relative"
      zIndex={zIndex}
      borderRadius="0px 15px 0px 15px"
      p="1px"
      bgImage="linear-gradient(92.22deg, #FFFFFF -0.73%, rgba(255, 255, 255, 0.2) 98.18%)"
      maxW="40vw"
      _after={{
        content: '""',
        width: "99px",
        height: "2px",
        background: Colors.brandMain,
        position: "absolute",
        bottom: "0",
        transform: "translate(-50%, 50%)",
        left: "50%",
        filter: "blur(3px)",
      }}
      {...props}
    >
      <Flex
        bgColor="black"
        w="100%"
        h="100%"
        p="14px 82px 14px 82px"
        borderRadius="0px 15px 0px 15px"
        justifyContent="center"
      >
        <Text
          color="white"
          fontSize="14px"
          fontWeight="400"
          lineHeight="160%"
          letterSpacing="0.4em"
        >
          {label}
        </Text>
      </Flex>
    </Flex>
  );
};

export default SectionInfoButton;
