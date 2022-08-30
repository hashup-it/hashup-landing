import '@fontsource/sora';
import { Fonts } from '../fonts';
import React, { useEffect, useRef } from 'react';
import theme from '../theme';
import { AppProps } from 'next/app';
import GlobalContainer from '../components/GlobalContainter/globalContainer';
import NavBar from '../components/NavBar/navbar';
import StickySocials from '../components/StickySocials/stickySocials';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from '../components/Footer/footer';
import ChoosePath from '../components/ChoosePath/choosePath';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Fonts />
			<GlobalContainer>
				<NavBar />
				<Component {...pageProps} />
				<Footer />
			</GlobalContainer>
		</ChakraProvider>
	);
}

export default MyApp;
