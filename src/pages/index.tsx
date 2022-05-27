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
import Community from "../components/Community/Community";

const Index = () => (
  <Flex>
    <GlobalContainer>
      <Header />
      <Community />
    </GlobalContainer>
  </Flex>
);

export default Index;
