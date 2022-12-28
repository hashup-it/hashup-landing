import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Colors } from '../../colors';
import SectionInfoButton from '../SectionLabel/sectionInfoButton';
import PathComponent, { IPathComponents } from './pathComponent';

export const ChoosePath = () => {
	const data: IPathComponents[] = [
		{
			link: '/creators',
			topText: 'New economy for',
			path: '/assets/animations/pad_v2.json',
			name: 'GameDevs',
			description:
				`Open up to a whole new market and sell games using digital licenses on blockchain. Give everyone the opportunity to sell your game! Decide about marketplace fee!`,
		},
		{
			link: '/gamers',
			topText: 'Freedom for',
			path: '/assets/animations/pc_v2.json',
			name: 'Marketplaces',
			description:
				'Connect to the protocol and choose the games you sell on your own store! Use the PC Launcher and take your web3 marketpace to a new level!',
		},
		{
			link: 'https://hashup.gitbook.io/hashup-whitepaper/',
			topText: 'New place for',
			path: '/assets/animations/wykres_v2.json',
			name: 'Degens',
			description:
				'Decentralized Generation will swap licenses on decentralized exchanges making subscription model useless! HashUp is for decentralized generation people from future!',
		},
	];

	// const ref = useRef(null!);
	// const { enterCount } = useInViewport(
	//   ref,
	//   {},
	//   { disconnectOnLeave: false },
	//   {}
	// );

	return (
		<Flex direction="column" alignItems="center" position="relative" pt="70px" pb="100px">
			<Box w="100vw" h="1px" position="absolute" top="0" bgColor="white" opacity="0.1" />
			<SectionInfoButton label="WHO ARE YOU?" />
			<Flex
				p="20px"
				fontSize={['32px', '46px', '64px', '70px']}
				color="#ffffff"
				fontWeight="700"
				//ref={ref}
				justifyContent="center"
			>
				<Text> Choose a Path</Text>
				<strong>.</strong>
			</Flex>
			<Flex
				fontSize={['18px', '18px', '20px', '20px']}
				color={Colors.greyText}
				fontWeight="300"
				direction="column"
				alignItems="center"
			>
				<Text maxWidth={['75vw', '75vw', '60vw', '60vw']} textAlign={['left', 'left', 'center', 'center']}>
					Be part of the revolution in the game industry and join our growing community of game creators,
					innovators, and gamers!
				</Text>
			</Flex>
			<Flex
				mt="30px"
				gridGap="32px"
				justifyContent="center"
				maxW={['100vw', '90vw', '85vw', '85vw']}
				direction={['column', 'column', 'column', 'row']}
			>
				{data.map((element) => (
					<PathComponent key={element.link} {...element} />
				))}
			</Flex>
			<Flex
				bgColor={Colors.brandMain}
				borderRadius="full"
				zIndex="0"
				filter="blur(100px)"
				opacity="0.4"
				w="275px"
				h="275px"
				position="absolute"
				bottom="25%"
				right="32.5%"
				transform="translate(15%, 15%)"
			></Flex>
			<Box h="1px" w="100vw" bgColor="white" opacity="0.1" position="absolute" bottom="0" />
		</Flex>
	);
};

export default ChoosePath;
