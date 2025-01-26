import React from 'react';
import RoadmapCard, { IRoadmapCardIRoadmapCard } from './roadmapCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = e => e.preventDefault();

const responsive = {
	0: {
		items: 1,
	},
	1024: {
		items: 3,
	},
};

const itemsData: IRoadmapCardIRoadmapCard[] = [
	{
		quarter: 'Q1 - 2021 - Q3 2022',
		data: [
			{ data: 'Shaping the idea of a true decentralized game and app store. Started in 2017.', isDone: true },
			{ data: 'Blockchain Explorer of games on HashUp Protocol', isDone: true },
			{ data: 'Web2 Games Marketplace', isDone: true },
			{ data: 'First PC Launcher 3.0 with MetaMask', isDone: true },
			{ data: 'First Games on The HashUp Protocol V1', isDone: true },
			{ data: 'GameXplorer - first blockchain explorer for gamers', isDone: true },
			{ data: 'GameContract - devkit for gamedevelopers and publishers', isDone: true },
			{ data: 'The HashUp Core V1', isDone: true },
		],
	},
	{
		quarter: 'Q4 2022',
		data: [
			{ data: 'The HashUp Core V2 on Polygon', isDone: true },
			{ data: 'ERC20 Licenses', isDone: true },
			{ data: 'The HashUp V2 Plugins', isDone: true },
			{ data: 'Publishing first 10 games', isDone: true },
			{ data: 'The HashUp OpenAPI V1', isDone: true },
			{ data: 'Connecting first marketplaces to protocol and PC Launchers', isDone: true },
		],
	},
	{
		quarter: '2023',
		data: [
			{ data: 'The HashUp API V2' },
			{ data: 'The HashUp Protocol on Polygon, Binance Smart Chain, Ethereum, Mantle, Aleph Zero and Casper' },
			{ data: 'GameCap.HashUp.it - computer games’ ranking' },
			{ data: 'The possibility of creating your own stores based on GameXplorer for YouTubers!' },
			{ data: 'Injecting Ethereum from PC Launcher 3.0 to Games' },
			{ data: 'Web3 Games StarterPacks' },
			{ data: 'Run GameSwapping!' },
			{ data: 'Listing $Hash' },
		],
	},
	{
		quarter: '2024++',
		data: [
			{ data: 'Decentralized superconsole' },
			{ data: 'GameWallet - Crypto Wallet with communicator for gamers and degens' },
			{ data: 'ERC20 DLCs Licensing' },
			{ data: '1000 games stores based on The HashUp Protocol' },
			{ data: 'Open Source AAA Games where everyone can create their own stories. DegenPunk.' },
		],
	},
];

export const CarouselRoadmap = () => {
	return (
		<AliceCarousel
			items={itemsData.map(data => (
				<RoadmapCard
					quarter={data.quarter}
					data={data.data}
				/>
			))}
			mouseTracking
			controlsStrategy="alternate"
			disableButtonsControls
			paddingLeft={90}
			paddingRight={90}
			disableDotsControls={true}
			responsive={responsive}
		/>
	);
};

export default CarouselRoadmap;
