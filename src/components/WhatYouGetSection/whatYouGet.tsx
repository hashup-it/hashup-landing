import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Colors } from "../../colors";
import ChevronRightIcon from "../../Icons/chevronRightIcon";
import SectionInfoButton from "../SectionLabel/sectionInfoButton";
import ProfitCard from "./profitCard";

const CardsInfo = [
  {
    number: "01",
    label: "No intermediaries",
    description:
      "Take the fruit of your labor and enjoy the freedom of distribution!",
    src: "/videos/HashCoinWeb.mp4"
  },
  {
    number: "02",
    label: "True ownership",
    description:
      "Build your collection. Buy, sell and trade your games permisionless.",
    src: "/videos/CartridgeWeb.mp4"
  },
  {
    number: "03",
    label: "Gamers and Creators run the market",
    description:
      "Take the fruit of your labor and enjoy the freedom of distribution!",
      src: "/videos/LaptopWeb.mp4"
  },
];

export const WhatYouGet = () => {
  const [card, setCard] = useState<number>(0);

  const nextCard = () => {
    if (card < 2) setCard(card + 1);
  };

  const previousCard = () => {
    if (card > 0) setCard(card - 1);
  };

  return (
    <Flex
      h="120vh"
      flexDirection="column"
      p="90px 90px 0 90px"
      alignItems="center"
      bgColor="#0A0A0A"
    >
      <SectionInfoButton label="WHAT DO YOU GET?" zIndex="1"/>
      <Flex
        position="relative"
        w="100vw"
        h="100%"
        mt="20px"
        flexDirection="column"
        alignItems="center"
      >
        <Flex 
          flexDirection="column"
          gridGap="7px"
          zIndex="10"
          alignItems="center"
          w="70%"
          mt="30px"
          mb="60px"
        >
          <Text fontSize="70px" fontWeight="700">
            What HashUp gives you<strong>?</strong>
          </Text>
          <Text
            fontSize="20px"
            fontWeight="300"
            color={Colors.greyText}
            textAlign="center"
          >
            We believe that by decentralization of game distribution it’s
            possible to lower a price of the game for the gamers and increase
            profits for creators.
          </Text>
        </Flex>
        <Flex
          justifyContent="space-between"
          w="100%"
          p="0 180px"
          zIndex="1"
          alignItems="center"
        >
          <ProfitCard
            number={CardsInfo[card].number}
            label={CardsInfo[card].label}
            description={CardsInfo[card].description}
            src={CardsInfo[card].src}
          />
          <Flex gridGap="10px">
            <Flex
              bgColor={Colors.brandMain}
              p="20px 25px"
              borderRadius="30px 0 0 0"
              cursor="pointer"
              onClick={previousCard}
              opacity={card === 0 ? "0" : "1"}
            >
              <ChevronRightIcon h="20px" transform="rotate(180deg)" />
            </Flex>
            <Flex
              bgColor={Colors.brandMain}
              p="20px 25px"
              borderRadius="0 30px 0 0"
              cursor={card === 2 ? "normal" : "pointer"}
              onClick={nextCard}
              opacity={card === 2 ? ".5" : "1"}
            >
              <ChevronRightIcon h="20px" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default WhatYouGet;
