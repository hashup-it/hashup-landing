import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import "@fontsource/sora";

import theme from "../theme";
import { AppProps } from "next/app";
import GlobalContainer from "../components/GlobalContainter/globalContainer";
import NavBar from "../components/NavBar/navbar";
import ChoosePath from "../components/ChoosePath/choosePath";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <GlobalContainer>
        <NavBar />
        <Component {...pageProps} fontFamily="Sora" />
        <ChoosePath />
      </GlobalContainer>
    </ChakraProvider>
  );
}

export default MyApp;
