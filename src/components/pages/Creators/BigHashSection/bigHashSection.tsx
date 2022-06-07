import { Flex, Image, SlideFade, Text } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import { Colors } from '../../../../colors';
import SectionInfoButton from '../../../SectionLabel/sectionInfoButton';

export const BigHashSection = () => {
	const ref = useRef(null);
	const { enterCount } = useInViewport(ref, {}, { disconnectOnLeave: false }, {});

	return (
		<>
			<SlideFade in={enterCount > 0} offsetY="25vh">
				<Flex
					justifyContent="center"
					direction="column"
					gridGap="45px"
					ml="10.5%"
					mt="300px"
					position="relative"
					zIndex="100"
					ref={ref}
				>
					<Image src="assets/bigHash.png" position="absolute" top="-50%" right="-10%" zIndex="-1" />
					<Flex zIndex="100">
						<SectionInfoButton label="TEKST" />
					</Flex>
					<Text fontSize="60px" fontWeight="600" zIndex="100" maxW="70%">
						Do you see a lack of immediate remuneration of creators?
					</Text>
					<Text fontSize="23px" fontWeight="500" as="span" w="50%" zIndex="100">
						Combines a digital game store with a blockchain explorer and social media for gamers.
						<Text color={Colors.greyText} as="span">
							{' '}
							It also creates an environment for browsing games and user profiles while introducing an
							element of social media.
						</Text>
					</Text>
				</Flex>
			</SlideFade>
		</>
	);
};

export default BigHashSection;
