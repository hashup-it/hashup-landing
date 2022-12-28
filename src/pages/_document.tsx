import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

export default class Document extends NextDocument {
	render() {
		return (
			<Html>
				<Head>
					<title>The HashUp Cartridge</title>
					<meta name="description" content="Content providing protocol and PC Launcher to your web3 marketplace." />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="assets/favicon.ico" />
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
