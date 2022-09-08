import { Flex, SlideFade, Text } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import { Colors } from '../../../../colors';
import SectionInfoButton from '../../../SectionLabel/sectionInfoButton';
import { HashScrollImages } from './hashScrollImages';

export const BigHashSection = () => {
	const ref = useRef(null!);
	const inputRef = useRef(null!);
	const { enterCount } = useInViewport(ref, {}, { disconnectOnLeave: false }, {});

	return (
		<SlideFade in={enterCount > 0} offsetY="100px">
			<Flex
				justifyContent="center"
				direction="column"
				gridGap="45px"
				ml="10.5%"
				mt={['40px', '60px', '100px', '200px']}
				position="relative"
				zIndex="100"
				ref={ref}
			>
				<Flex
					position="absolute"
					top={['10', '10', '-5', '-5%']}
					zIndex="-1"
					ref={inputRef}
					right="13.37vw"
					maxHeight="100%"
				>
					<HashScrollImages />
				</Flex>
				<Flex zIndex="100">
					<SectionInfoButton label="DIGITAL GAME STORE" />
				</Flex>
				<Text fontSize={['24px', '32px', '46px', '60px']} fontWeight="600" zIndex="100" maxW="70%">
					Do you see the lack of immediate remuneration of creators?
				</Text>
				<Text
					fontSize={['16px', '18px', '23px', '23px']}
					fontWeight="500"
					as="span"
					w={['80%', '80%', '50%', '50%']}
					zIndex="100"
				>
					We combine a digital game store with a blockchain explorer for gamers.{' '}
					<Text color={Colors.greyText} as="span">
						{' '}
						It also creates an environment for browsing games and user profiles while introducing a social
						media element.
					</Text>
				</Text>
			</Flex>
		</SlideFade>
	);
};

export default BigHashSection;
