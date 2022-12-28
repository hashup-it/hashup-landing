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
			<Flex flexDirection="column" gridGap="30px" zIndex="10" mb="250px">
				<SlideFade in={enterCount > 0} offsetY="100px">
					{/* <HashupLogoBg zIndex="1" position="absolute" right="0" top="100vh" /> */}
					<Flex ref={ref} flexDirection="column" maxW="42vw" ml="18vw" gridGap="30px" zIndex="10" mb="100px">
						<Flex
							flexDirection="column"
							fontSize={['24px', '32px', '48px', '60px']}
							fontWeight="800"
							lineHeight="120%"
						>
							{/*HashUp is the first open-source decentralized games and tokens distribution protocol */}
							<Text>HashUp is the</Text>
							<Text>first open-source and </Text>
							<Text><strong>decentralized</strong>games</Text>
							<Text>distribution protocol!</Text>
							<Text fontSize={"30px"}>Make everyone able to sell your games!</Text>
						</Flex>
						<Text fontSize={['14px', '18px', '26px', '30px']} fontWeight="600">
							Publish games and sell them on <strong>multiple stores</strong> at the same time! Allow everyone to sell your games!
						</Text>
						<Text fontSize={['14px', '18px', '26px', '30px']} fontWeight="600">
						Insert your gaming marketplace into the <strong>PC Launcher HashUp</strong> by PatchKit where you will find dozens of games ready to be sold from day one!
						</Text>

						<Text fontSize={['14px', '18px', '26px', '30px']} fontWeight="600">
							<strong>Connect to The HashUp protocol, sell and earn! </strong>
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
