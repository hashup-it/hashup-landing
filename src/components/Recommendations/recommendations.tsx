import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Colors } from "../../colors";
import AvatarDots from "../../Icons/avatarDots";
import ChevronRightIcon from "../../Icons/chevronRightIcon";
import Opinion from "./opinion";
import { Opinions } from "./opinionsInfo";

export const Recommendations = () => {
  const [opinion, setOpinion] = useState<number>(0);

  const nextOpinion = () => {
    if (opinion < Opinions.length - 1) setOpinion(opinion + 1);
  };

  const previousOpinion = () => {
    if (opinion > 0) setOpinion(opinion - 1);
  };

  return (
    <Flex
      p="70px 100px"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      w="100%"
      gridGap="15vw"
    >
      <Flex position="relative" w="60%" h="60%">
        <Box
          bgColor={Colors.brandMain}
          w="116px"
          h="116px"
          position="absolute"
          top="10%"
          left="5px"
        />
        <Box
          w="319px"
          h="319px"
          borderRadius="50%"
          position="absolute"
          top="8%"
          left="-15%"
          bgGradient="linear(9deg, #050505 40%, rgba(255,63,63,0.5) 100%)"
          backdropFilter="blur(71px)"
        />
        <Image
          src={Opinions[opinion].photo}
          w="300px"
          h="300px"
          position="absolute"
        />
        <AvatarDots position="absolute" bottom="30px" right="0" />
        <Box
          w="280px"
          h="280px"
          border="5px solid rgba(255, 255, 255, 0.1)"
          borderRadius="50%"
          position="absolute"
          top="10px"
          left="10px"
        />
      </Flex>

      <Flex flexDirection="column" gridGap="20px" alignItems="flex-start">
        <Text fontSize="40px" fontWeight="700">
          Look what people say<strong>.</strong>
        </Text>
        <Opinion
          name={Opinions[opinion].name}
          role={Opinions[opinion].role}
          opinion={Opinions[opinion].opinion}
          logo={Opinions[opinion].logo}
        />
        <Flex gridGap="30px" mt="40px">
          <ChevronRightIcon
            cursor="pointer"
            transform="rotate(180deg)"
            onClick={previousOpinion}
            opacity={opinion === 0 ? "0.5" : "1"}
          />
          <ChevronRightIcon
            cursor="pointer"
            onClick={nextOpinion}
            opacity={opinion === Opinions.length - 1 ? "0.5" : "1"}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Recommendations;
