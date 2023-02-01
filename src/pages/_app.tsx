import '@fontsource/sora';
import { Fonts } from '../fonts';
import React from 'react';
import theme from '../theme';
import { AppProps } from 'next/app';
import GlobalContainer from '../components/GlobalContainter/globalContainer';
import NavBar from '../components/NavBar/navbar';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from '../components/Footer/footer';
import { PolygonLabel } from '../components/PolygonLabel/polygonLabel';
import "../components/Map/Map.css"
import { MoralisProvider } from 'react-moralis';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<MoralisProvider serverUrl='https://m8n2yl4ato6n.grandmoralis.com:2053/server' appId='eC4wceXEnSV2YnbaVOaE5XPrvwBXgEvDQXLG0i3M'>
				<Fonts />
				<GlobalContainer>
				<PolygonLabel />
				<NavBar />
				<Component {...pageProps} />
				<Footer />
				</GlobalContainer>
			</MoralisProvider>
		</ChakraProvider>
	);
}

export default MyApp;
