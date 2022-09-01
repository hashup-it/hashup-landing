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
							<Text>HashUp is a</Text>
							<Text>brand new and</Text>
							<Text>innovative platform</Text>
						</Flex>
						<Text fontSize={['14px', '18px', '26px', '30px']} fontWeight="600">
							combining advantages of physical and digital game distribution, giving gamers freedom and
							developers new earning opportunities<strong>.</strong>
						</Text>
						<Text fontSize={['14px', '18px', '26px', '30px']} fontWeight="600">
							We want to make the software distribution market transparent and fair following the will of
							gamers and developers<strong>.</strong>
						</Text>
						<Text fontSize={['14px', '18px', '26px', '30px']} fontWeight="600">
							Our distribution model allows you to swap games<strong>.</strong>
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
