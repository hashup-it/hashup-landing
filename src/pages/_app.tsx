import '@fontsource/sora';
import { Fonts } from '../fonts';
import React from 'react';
import theme from '../theme';
import { AppProps } from 'next/app';
import GlobalContainer from '../components/GlobalContainter/globalContainer';
import NavBar from '../components/NavBar/navbar';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from '../components/Footer/footer';

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
