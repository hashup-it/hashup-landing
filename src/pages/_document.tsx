import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

export default class Document extends NextDocument {
	render() {
		return (
			<Html>
				<Head>
					<title>The HashUp Protocol to your marketplace</title>
					<meta
						name="description"
						content="Content providing protocol and PC Launcher to your web3 marketplace. Connect to the protocol, choose the best games and sell them on your marketplace. Take your gaming launchpad to the next level with PC Launcher with metamask and don't worry about sourcing games for your store yourself! "
					/>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					/>
					<link
						rel="icon"
						href="assets/favicon.ico"
					/>
					<link
						href="https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.css"
						rel="stylesheet"
					/>
					<script src="https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.js" />
				</Head>
				<body>
					{/* Make Color mode to persists when you refresh the page. */}
					<ColorModeScript />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
