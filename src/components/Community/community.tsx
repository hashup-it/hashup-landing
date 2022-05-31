import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Colors } from "../../colors";
import DiscordIcon from "../../Icons/discordIcon";
import HashupLogo from "../../Icons/hashupLogo";
import LinkedinIcon from "../../Icons/linkedinIcon";
import TelegramIcon from "../../Icons/telegramIcon";
import TwitterIcon from "../../Icons/twitterIcon";
import CommunityButtons from "./communityButtons";
import { ICommunityButtons } from "./communityButtons";
import CommunityInfo from "./communityInfo";

export const Community = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      bgColor="#0A0A0A"
      justifyContent="space-between"
    >
      <Box h="1px" w="100vw" bgColor="white" opacity="0.1" />
      <Flex
        p="20px"
        fontSize="60px"
        color="#ffffff"
        fontWeight="700"
        mt="100px"
      >
        <Text> Join the community</Text>
        <Text color={Colors.brandMain} fontWeight="700">
          !
        </Text>
      </Flex>
      <Flex
        fontSize="20px"
        color={Colors.greyText}
        fontWeight="300"
        direction="column"
        alignItems="center"
      >
        <Text maxWidth="60vw" textAlign="center">
          Be the part of the revolution in the game industry and join our
          growing community of game creators, innovators, and gamers!
        </Text>
      </Flex>
      <Flex justifyContent="center" gridGap="20px" mt="70px" mb="100px">
        {CommunityInfo.map((element) => (
          <CommunityButtons {...element} />
        ))}
      </Flex>
      <Box h="1px" w="100vw" bgColor="white" opacity="0.1" />
    </Flex>
  );
};

export default Community;
