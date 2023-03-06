import { Box, Flex, SlideFade, Text } from '@chakra-ui/react';
import React, { useRef } from 'react';
import SectionInfoButton from '../SectionLabel/sectionInfoButton';
import { Colors } from '../../colors';
import CarouselRoadmap from './carouselRoadmap';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useInViewport } from 'react-in-viewport';

export const Roadmap = () => {
	const ref = useRef(null);
	const { inViewport, enterCount } = useInViewport(ref, {}, { disconnectOnLeave: false }, {});

	return (
		<>
			<SlideFade
				in={enterCount > 0}
				offsetY="100px"
			>
				<Flex
					ref={ref}
					alignItems="center"
					justifyContent="space-between"
					flexDirection="column"
					pt="70px"
					pb="70px"
					bgColor="#090909"
					w="100vw"
					position="relative"
				>
					<Box
						w="100vw"
						h="1px"
						bgColor="white"
						opacity="0.1"
						position="absolute"
						top="0"
					/>
					<SectionInfoButton label="ROADMAP" />
					<Flex
						p="20px"
						fontSize="60px"
						color="#ffffff"
						fontWeight="700"
						mt="38px"
						direction="column"
					>
						<Text
							textAlign="center"
							fontSize={['32px', '46px', '64px', '70px']}
						>
							On the road to true
						</Text>
						<Text
							textAlign="center"
							fontSize={['32px', '46px', '64px', '70px']}
						>
							<strong>decentralised</strong> distribution!
						</Text>
					</Flex>
					<Flex
						mb="40px"
						fontSize="20px"
						color={Colors.greyText}
						fontWeight="300"
						direction="column"
						alignItems="center"
					>
						<Text
							maxWidth="60vw"
							textAlign="center"
						>
							We are building a real game distribution infrastructure based on thousands of game stores,
							where everyone can become the owner of their own store.{' '}
							<b>On the way to first 1000 web3 gaming stores!</b>
						</Text>
					</Flex>
					<CarouselRoadmap />
				</Flex>
			</SlideFade>
		</>
	);
};

export default Roadmap;
