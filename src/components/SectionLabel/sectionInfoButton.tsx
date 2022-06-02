import { Flex, SlideFade, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import { Colors } from "../../colors";
import { useInViewport } from "react-in-viewport";

export const SectionInfoButton = ({
  zIndex,
  label,
  ...props
}: {
  label: string;
  zIndex?: string;
}) => {
  const ref = useRef(null);
  const { inViewport, enterCount } = useInViewport(
    ref,
    {},
    { disconnectOnLeave: false },
    {}
  );

  return (
    <>
      <SlideFade in={enterCount > 0} offsetY="200px">
        <Flex
          ref={ref}
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
      </SlideFade>
    </>
  );
};

export default SectionInfoButton;
