import { Box, Flex, SlideFade, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";
import { Colors } from "../../colors";
import ArrowRightIcon from "../../Icons/arrowRightIcon";
import FirstDistributionModel from "../../Icons/firstDistributionModel";
import HashupLogoBg from "../../Icons/hashupLogoBg";
import SecondDistributionModel from "../../Icons/secondDistributionModel";
import SectionInfoButton from "../SectionLabel/sectionInfoButton";
import PhaseCard from "./phaseCard";

export const Advantages = () => {
  const [activeCard, setActiveCard] = useState<number>(0);

  const ref = useRef(null);
  const { enterCount } = useInViewport(
    ref,
    {},
    { disconnectOnLeave: false },
    {}
  );

  const inputRef = useRef(null);
  const scrollHandler = (_) => {
    if (inputRef.current.getBoundingClientRect().top > 0) setActiveCard(0);
    else if (
      inputRef.current.getBoundingClientRect().top < 0 &&
      inputRef.current.getBoundingClientRect().top >
        -0.3 * inputRef.current.getBoundingClientRect().height
    )
      setActiveCard(1);
    else if (
      inputRef.current.getBoundingClientRect().top <
      -0.3 * inputRef.current.getBoundingClientRect().height
    )
      setActiveCard(2);
    console.log(inputRef.current.getBoundingClientRect());
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, []);

  return (
    <Flex
      ref={inputRef}
      zIndex="0"
      flexDirection="column"
      bgColor="#0A0A0A"
      w="100vw"
      p="90px"
      alignItems="center"
      justifyContent="space-between"
    >
      <SectionInfoButton label="HOW DOES IT WORK" />
      <HashupLogoBg position="absolute" top="110vh" right="0" zIndex="1" />
      <SlideFade in={enterCount > 0} offsetY="300px">
        <Flex
          maxW="60vw"
          textAlign="center"
          flexDirection="column"
          gridGap="20px"
          mt="40px"
          ref={ref}
        >
          <Text fontSize="70px" fontWeight="700" lineHeight="130%">
            Advantages of the new distribution model<strong>!</strong>
          </Text>
          <Text fontSize="17px" fontWeight="300" color={Colors.greyText}>
            HashUp is a game distribution platform that combines native licensed
            media with the world of the web3, using the ERC20 token standard.
            Finally, you can truly own, sell, exchange, and trade your game!
          </Text>
        </Flex>
        <Flex
          gridGap="0px"
          w="80%"
          justifyContent="space-between"
          mt="100px"
          alignItems="center"
          mb="90px"
        >
          <PhaseCard
            isActive={activeCard === 0 ? true : false}
            image={<FirstDistributionModel />}
          />
          <ArrowRightIcon color="white" mt="-130px" h="25px" />
          <PhaseCard
            isActive={activeCard === 1 ? true : false}
            image={<SecondDistributionModel />}
          />
          <ArrowRightIcon color="white" mt="-130px" h="25px" />
          <PhaseCard
            isActive={activeCard === 2 ? true : false}
            image={<FirstDistributionModel />}
          />
        </Flex>
      </SlideFade>
    </Flex>
  );
};

export default Advantages;
