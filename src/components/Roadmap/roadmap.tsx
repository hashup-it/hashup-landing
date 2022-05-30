import { Flex, Box, Text } from "@chakra-ui/react";
import React from "react";
import SectionInfoButton from "../SectionLabel/sectionInfoButton";
import { Colors } from "../../colors";
import RoadmapCard from "./roadmapCard";
import CarouselRoadmap from "./carouselRoadmap";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export const Roadmap = () => {
  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexDirection="column"
        pt="100px"
        pb="100px"
        bgColor="#090909"
        w="100vw"
        position="relative"
      >
        <Box
          w="100vw"
          h="1px"
          bgColor="white"
          opacity="0.1"
          position="absolute"
          top="0"
        />
        <SectionInfoButton label="ROADMAP" />
        <Flex
          p="20px"
          fontSize="60px"
          color="#ffffff"
          fontWeight="700"
          mt="38px"
          direction="column"
        >
          <Text>Where are we right now?</Text>
        </Flex>
        <Flex
          mb="40px"
          fontSize="20px"
          color={Colors.greyText}
          fontWeight="300"
          direction="column"
          alignItems="center"
        >
          <Text maxWidth="60vw" textAlign="center">
            We believe that by decentralization of game distribution it’s
            possible to lower a price of the game for the gamers and increase
            profits for creators.{" "}
          </Text>
        </Flex>
        <CarouselRoadmap />
      </Flex>
    </>
  );
};

export default Roadmap;
