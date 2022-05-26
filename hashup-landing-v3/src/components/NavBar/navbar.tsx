import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import HashupLogo from "../../Icons/hashupLogo";
import LanguageSelect from "./languageSelect";
import LaunchAppButton from "./launchAppButton";
import NavBarItems from "./navbarItems";

export const NavBar = () => {
  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="space-between"
      zIndex="10"
    >
      <HashupLogo />
      <NavBarItems />
      <Flex alignItems="center" gridGap="36px" ml="-80px">
        <LanguageSelect />
        <LaunchAppButton />
      </Flex>
    </Flex>
  );
};

export default NavBar;
