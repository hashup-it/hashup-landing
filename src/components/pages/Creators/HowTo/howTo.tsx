import React, { useRef } from 'react';
import { Flex, Image, SlideFade, Text, Link } from '@chakra-ui/react';
import SectionInfoButton from '../../../SectionLabel/sectionInfoButton';
import { Colors } from '../../../../colors';
import ChevronRightIcon from '../../../../Icons/chevronRightIcon';
import { useInViewport } from 'react-in-viewport';

export const HowTo = () => {
	const ref = useRef(null);
	const { enterCount } = useInViewport(ref, {}, { disconnectOnLeave: false }, {});

	return (
		<>
			<SlideFade in={enterCount > 0} offsetY="100px">
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
						<Text
							pt="30px"
							w="70%"
							fontSize={['24px', '32px', '40px', '50px']}
							textAlign={{ base: 'center' }}
							fontWeight="700"
						>
							Our platform is really easy to use<strong>.</strong>
						</Text>
					</Flex>
					<Link href="https://gamecontract.io/" target="_blank" _hover={{ opacity: '0.8' }}>
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
							<Flex flexDirection="column" _hover={{ opacity: '0.8' }}>
								<Text fontSize="12px" fontWeight="500" color="white">
									See how to
								</Text>
								<Text fontSize="15px" fontWeight="600" color={Colors.brandMain}>
									Publish game
								</Text>
							</Flex>
							<ChevronRightIcon />
						</Flex>
					</Link>
					<Image src="assets/cartridgeCreation1.png" display={['none', 'flex', 'flex', 'flex']} />
				</Flex>
			</SlideFade>
		</>
	);
};

export default HowTo;
