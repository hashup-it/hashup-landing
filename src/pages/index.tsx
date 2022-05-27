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
import GlobalContainer from "../components/GlobalContainter/globalContainer";
import SectionOne from "../components/SectionOne/sectionOne";
import Advantages from "../components/Advantages/advantages";

const Index = () => (
  <Flex>
    <GlobalContainer>
      <Header />
      <SectionOne />
      <Advantages />
    </GlobalContainer>
  </Flex>
);

export default Index;
