import React, { useRef } from 'react';
import { Flex, Image, SlideFade, Text } from '@chakra-ui/react';
import SectionInfoButton from '../../../SectionLabel/sectionInfoButton';
import { Colors } from '../../../../colors';
import ChevronRightIcon from '../../../../Icons/chevronRightIcon';
import { useInViewport } from 'react-in-viewport';

export const HowTo = () => {
	const ref = useRef(null);
	const { enterCount } = useInViewport(ref, {}, { disconnectOnLeave: false }, {});

	return (
		<>
			<SlideFade in={enterCount > 0} offsetY="25vh">
				<Flex
					mt="150px"
					direction="column"
					justifyContent="center"
					alignItems="center"
					p="50px"
					zIndex="100"
					gridGap="38px"
					bg="linear-gradient(180deg, rgba(10, 10, 10, 1) 3.18%, #000000 31.65%)"
					borderRadius="30px"
					ref={ref}
				>
					<SectionInfoButton label="IT'S SIMPLE" />
					<Flex flexDirection="column" alignItems="center" gridGap="25px">
						<Text pt="30px" fontSize={["24px","32px", "40px", "50px"]} textAlign={{base: 'center'}}fontWeight="700">
							Our platform is really easy to use<strong>.</strong>
						</Text>
						<Text fontSize={["16px", "24px", "28px", "35px"]} fontWeight="700">
							Step by step
						</Text>
					</Flex>
					<Flex
						bgColor="black"
						w="200px"
						h="70px"
						borderRadius="0 25px 0 0"
						border={`1px solid ${Colors.brandMain}`}
						p="12px 19px"
						alignItems="center"
						justifyContent="space-between"
						cursor="pointer"
						mb="70px"
					>
						<Flex flexDirection="column">
							<Text fontSize="12px" fontWeight="500" color="white">
								See how to
							</Text>
							<Text fontSize="15px" fontWeight="600" color={Colors.brandMain}>
								Publish game
							</Text>
						</Flex>
						<ChevronRightIcon />
					</Flex>
					<Image src="assets/cartridgeCreation1.png" />
				</Flex>
			</SlideFade>
		</>
	);
};

export default HowTo;
