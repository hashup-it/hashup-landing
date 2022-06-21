import { Box, Flex, Slide, SlideFade, Text } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import HashupLogoBg from '../../Icons/hashupLogoBg';
import { ScrollImages } from '../Advantages/scrollImages';
import Partners from './partners';

export const SectionOne = () => {
	const ref = useRef(null!);
	const { enterCount } = useInViewport(ref, {}, { disconnectOnLeave: false }, {});

	return (
		<Flex
			flexDirection="column"
			mt="28vh"
			alignItems="flex-start"
			justifyContent="space-between"
			w="100%"
			zIndex="0"
			position="relative"
			ref={ref}
		>
			<Flex position="absolute" top="-15vh" right="-20vw" w="80vw">
				<ScrollImages animationHookReference={ref} />
			</Flex>
			<Flex flexDirection="column" gridGap="30px" zIndex="10" mb="250px">
				<SlideFade in={enterCount > 0} offsetY="300px">
					{/* <HashupLogoBg zIndex="1" position="absolute" right="0" top="100vh" /> */}
					<Flex ref={ref} flexDirection="column" maxW="42vw" ml="18vw" gridGap="30px" zIndex="10" mb="100px">
						<Flex
							flexDirection="column"
							fontSize={['24px', '32px', '48px', '60px']}
							fontWeight="800"
							lineHeight="120%"
						>
							<Text>HashUp is a</Text>
							<Text>licensing protocol</Text>
							<Text>for games by degens!</Text>
						</Flex>
						<Text fontSize={['14px', '18px', '20px', '20px']} fontWeight="400">
							Each game released in this form comes with separate ERC20 licenses, called ERC20 Cartridges,
							reminiscent of the physical cartridges of the 1980s<strong>.</strong>
						</Text>
						<Text fontSize={['14px', '18px', '20px', '20px']} fontWeight="400">
							HashUp's cartridge compatibility with the ERC20 standard makes it possible to store games in
							any cryptocurrency wallet and provide liquidity on decentralized exchanges to determine the
							true price of software using an Automated Market Maker (AMM) - the mechanism we called
							GameSwapping<strong>.</strong>
						</Text>
					</Flex>
					<Partners />
				</SlideFade>
			</Flex>
			<Box h="1px" w="100vw" ml="-100px" bgColor="white" opacity="0.1" />
		</Flex>
	);
};

export default SectionOne;
