import { ICartridgeInfo } from './cartridgeInfo';

export const Cartridges: ICartridgeInfo[] = [
	{
		color: 'Gold',
		description: 'Best for indie games',
		supply: '0 - 133 700 (maximally)',
		fee: '0-20%',
		price: 'potentially infinite!',
		colorDesc: 'gold refers to uniqueness.',
		image: 'goldCartridge.png',
		gradient: 'rgba(244, 191, 100)',
	},
	{
		color: 'Gray',
		description: 'Designed for AAA games',
		supply: '0 - infinite',
		fee: '0-100%',
		price: 'potentially infinite!',
		colorDesc: 'gray set up standard.',
		image: 'greyCartridge.png',
		gradient: 'linear-gradient(180deg, #9DB491 0%, #447DD3 100%)',
	},
	{
		color: 'Custom',
		description: "Let's program your license!",
		supply: 'custom',
		fee: 'custom',
		price: 'custom',
		colorDesc: 'your color and model',
		image: 'diamondCartridge.png',
		gradient: '#EEE8E4',
	},
];
