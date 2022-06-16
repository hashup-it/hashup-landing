import { Box, Flex, SlideFade, Text } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import { Colors } from '../../colors';
import Newsletter from './newsletter';
import Time from './time';

export const Premiere = () => {
	const ref = useRef(null);
	const { enterCount } = useInViewport(ref, {}, { disconnectOnLeave: false }, {});

	return (
		<Flex
			h={["60vh", "75vh", "100vh", "100vh"]}
			w="100vw"
			bgColor="black"
			justifyContent="center"
			alignItems="center"
			position="relative"
			flexDirection="column"
		>
			<Box w="100vw" h="1px" position="absolute" top="0" bgColor="white" opacity="0.1" />
			<SlideFade in={enterCount > 0} offsetY="25vh">
				<Flex
					ref={ref}
					position="absolute"
					borderRadius="50%"
					left="6vw"
					w="600px"
					h="600px"
					bgGradient="radial(rgba(255,63,63,0.4) 0%, rgba(0,0,0,0.2) 60%)"
				/>
				<Flex flexDirection="column" justifyContent="space-between" alignItems="center" gridGap="70px">
					<Flex flexDirection="column" zIndex="1" alignItems="center">
						<Text fontSize={["60px", "80px", "90px", "120px"]} fontWeight="700" lineHeight="100%">
							Premiere
						</Text>
						<Text fontSize={["24px", "38px", "46px", "50px"]} fontWeight="800" lineHeight="100%" letterSpacing="0.3em">
							<strong>21</strong>TH JUNE
						</Text>
					</Flex>
					<Time />
					<Newsletter />
				</Flex>
			</SlideFade>
			<Box w="100vw" h="1px" position="absolute" bottom="0" bgColor="white" opacity="0.1" />
		</Flex>
	);
};

export default Premiere;
