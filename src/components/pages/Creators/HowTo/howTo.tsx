import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import SectionInfoButton from '../../../SectionLabel/sectionInfoButton';
import { Colors } from '../../../../colors';
import ChevronRightIcon from '../../../../Icons/chevronRightIcon';

export const HowTo = () => {
	return (
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
		>
			<SectionInfoButton label="IT'S SIMPLE" />
			<Flex flexDirection="column" alignItems="center" gridGap="25px">
				<Text pt="30px" fontSize="50px" fontWeight="700">
					Our platform is really easy to use<strong>.</strong>
				</Text>
				<Text fontSize="35px" fontWeight="700">
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
						Zobacz instrukcję
					</Text>
					<Text fontSize="15px" fontWeight="600" color={Colors.brandMain}>
						Publikacja gry
					</Text>
				</Flex>
				<ChevronRightIcon />
			</Flex>
			<Image src="assets/cartridgeCreation.png" />
		</Flex>
	);
};

export default HowTo;
