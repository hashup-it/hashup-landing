import { Box, Flex, SlideFade, Text } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import Partners from './partners';

export const SectionOne = () => {
	const ref = useRef(null!);
	const { enterCount } = useInViewport(ref, {}, { disconnectOnLeave: false }, {});

	return (
		<Flex
			flexDirection="column"
			mt="160px"
			alignItems="flex-start"
			justifyContent="space-between"
			w="100%"
			zIndex="0"
			position="relative"
			ref={ref}
		>
			<Flex
				flexDirection="column"
				gridGap="30px"
				zIndex="10"
				mb="250px"
			>
				<SlideFade
					in={enterCount > 0}
					offsetY="100px"
				>
					{/* <HashupLogoBg zIndex="1" position="absolute" right="0" top="100vh" /> */}
					<Flex
						ref={ref}
						flexDirection="column"
						maxW="48vw"
						ml="18vw"
						gridGap="30px"
						zIndex="10"
						mb="100px"
					>
						<Flex
							flexDirection="column"
							fontSize={['24px', '32px', '48px', '60px']}
							fontWeight="800"
							lineHeight="120%"
						>
							{/*HashUp is the first open-source decentralized games and tokens distribution protocol */}
							<Text>
								Hash<strong>Up</strong> is the
							</Text>
							<Text>first open </Text>
							<Text>
								<strong>video game</strong>
							</Text>
							<Text>distribution protocol!</Text>
							<Text fontSize={'30px'}>Make everyone able to sell your games!</Text>
						</Flex>
						<Text
							fontSize={['14px', '18px', '26px', '30px']}
							fontWeight="600"
						>
							Who we are?
						</Text>
						<Text
							fontSize={['14px', '18px', '26px', '30px']}
							fontWeight="600"
						>
							The HashUp Protocol is being developed by HashUp Company – a Warsaw-based specialising in
							decentralised infrastructure. We specialise in solidity, rust and typescript. We are
							passionate permaweb coders and designers with a history in programming for the demoscene.
						</Text>

						<Text
							fontSize={['14px', '18px', '26px', '30px']}
							fontWeight="600"
						>
							<strong>Build your marketplace on top of HashUp!</strong>
						</Text>
					</Flex>
					<Partners />
				</SlideFade>
			</Flex>
			<Box
				h="1px"
				w="100vw"
				ml="-100px"
				bgColor="white"
				opacity="0.1"
			/>
		</Flex>
	);
};

export default SectionOne;
