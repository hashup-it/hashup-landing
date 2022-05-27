import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Flex,
  Box,
  Image,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import Header from "../components/Header/header";
import Community from "../components/Community/Community";
import SectionOne from "../components/SectionOne/sectionOne";
import Advantages from "../components/Advantages/advantages";
import ChoosePath from "../components/ChoosePath/choosePath";

const Index = () => (
  <Flex>
    <GlobalContainer>
      <Header />
      <SectionOne />
      <Advantages />
      <ChoosePath />
      <Community />
    </GlobalContainer>
  </Flex>
);

export default Index;
