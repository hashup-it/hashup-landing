import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import HashupLogo from "../../Icons/hashupLogo";
import AboutHashUp from "./aboutHashUp";
import CompanyInformation from "./companyInformation";
import { FooterSocials } from "./FooterSocials/socials";
import Newsletter from "./Newsletter/newsletter";
import Copywright from "./Copywright/copywright";
import { Colors } from "../../colors";

export const Footer = () => {
  return (
    <Flex direction="column" w="100%" pt="30px" gridGap="60px">
      <Flex justifyContent="space-between" alignItems="center" w="100%">
        <HashupLogo />
        <Flex
          fontSize="16px"
          fontWeight="400"
          gridGap="47px"
          alignItems="center"
        >
          <Text>
            {" "}
            OUR <strong>SOCIAL MEDIA</strong>
          </Text>
          <FooterSocials />
        </Flex>
      </Flex>
      <Flex
        justifyContent="flex-start"
        gridGap="17px"
        alignItems="center"
        fontSize="14px"
      >
        <Text>HashUp.it</Text>
        <Box w="17px" h="1px" bgColor={Colors.brandMain} />
        <a href="/">
          <Text>Idź do strony głównej</Text>
        </a>
      </Flex>
      <Flex justifyContent="space-between" gridGap="60px">
        <Flex>
          <CompanyInformation />
        </Flex>
        <Flex>
          <AboutHashUp />
        </Flex>
        <Flex>
          <Newsletter />
        </Flex>
      </Flex>
      <Copywright />
    </Flex>
  );
};

export default Footer;
