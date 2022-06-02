import { Box, Flex, SlideFade, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Colors } from "../../colors";
import SectionInfoButton from "../SectionLabel/sectionInfoButton";
import GameContractCard from "./gameContractCard";
import GameXplorerCard from "./gameXplorerCard";
import PlatformTile from "./platformTile";
import PCLauncherCard from "./pcLauncherCard";
import { useInViewport } from "react-in-viewport";

export const Ecosystem = () => {
  const [activePlatform, setActivePlatform] = useState<number>(0);

  const Platforms = [
    {
      element: <GameContractCard />,
    },
    {
      element: <GameXplorerCard />,
    },
    {
      element: <PCLauncherCard />,
    },
  ];

  const ref = useRef(null);
  const { enterCount } = useInViewport(
    ref,
    {},
    { disconnectOnLeave: false },
    {}
  );

  return (
    <Flex
      flexDirection="column"
      gridGap="30px"
      alignItems="center"
      mb="300px"
      position="relative"
    >
      <SectionInfoButton label="TEKST DO ZMIANY" />
      <SlideFade in={enterCount > 0} offsetY="300px">
        <Flex flexDirection="column" alignItems="center" maxW="43vw" ref={ref}>
          <Text fontSize="70px" fontWeight="700">
            Our Ecosystem<strong>.</strong>
          </Text>
          <Text
            fontSize="17px"
            fontWeight="300"
            lineHeight="170%"
            color={Colors.greyText}
            textAlign="center"
          >
            We designed our ecosystem as a consistent and complementary platform
            to ensure the best possible experience
          </Text>
          <Flex gridGap="30px" mt="50px" mb="100px">
            <PlatformTile
              first="Game"
              second="Contract"
              active
              transform={90}
              onClick={() => setActivePlatform(0)}
              bgColor={activePlatform === 0 ? Colors.brandMain : ""}
            />
            <PlatformTile
              first="Game"
              second="Xplorer"
              active
              transform={-50}
              onClick={() => setActivePlatform(1)}
              bgColor={activePlatform === 1 ? Colors.brandMain : ""}
            />
            <PlatformTile
              first="PC"
              second="Launcher"
              active
              transform={90}
              onClick={() => setActivePlatform(2)}
              bgColor={activePlatform === 2 ? Colors.brandMain : ""}
            />
            <PlatformTile first="Game" second="Cap" active={false} />
          </Flex>
        </Flex>
      </SlideFade>
      <Flex
        position="absolute"
        borderRadius="50%"
        w="600px"
        h="600px"
        top="40%"
        left="40%"
        bgGradient="radial(rgba(255,63,63,0.4) 0%, rgba(0,0,0,0.2) 60%)"
      />
      {Platforms[activePlatform].element}
    </Flex>
  );
};

export default Ecosystem;
