import Header from "../components/Header/header";
import SectionOne from "../components/SectionOne/sectionOne";
import Advantages from "../components/Advantages/advantages";
import ChoosePath from "../components/ChoosePath/choosePath";
import GlobalContainer from "../components/GlobalContainter/globalContainer";
import Community from "../components/Community/community";
import { Flex } from "@chakra-ui/react";
import StickySocials from "../components/StickySocials/stickySocials";

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
