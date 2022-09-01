import { Flex, Box, Text } from '@chakra-ui/react';
import React from 'react';
import { Colors } from '../../colors';
import RoadmapTaskDone from '../../Icons/roadmapTaskDone';
import { IRoadmapCardElement, RoadmapCardElement } from './roadmapCardElement';

export interface IRoadmapCardIRoadmapCard {
	quarter: string;
	data: IRoadmapCardElement[];
}

export const RoadmapCard = ({ data, quarter }: IRoadmapCardIRoadmapCard) => {
	return (
		<Flex
			bgGradient="linear(180deg, #010101 0%, rgba(1, 1, 1, 0) 100%)"
			direction="column"
			borderRadius="40px"
			p={['18px', '24px', '32px', '40px']}
			maxW={['70vw', '70vw', '30vw', '25vw']}
			userSelect="none"
		>
			<Box h="2px" w="25px" bgColor={Colors.brandMain} />
			<Flex fontSize="24px" fontWeight="400" color="white" pt="15px">
				<Flex fontSize="24px" fontWeight="400" color="white" pt="15px">
					<Text>{quarter}</Text>
				</Flex>
			</Flex>
			<Flex mt="30px" direction="column" gridGap="9px">
				{data.map((element) => (
					<RoadmapCardElement key={element.data} {...element} />
				))}
			</Flex>
		</Flex>
	);
};

export default RoadmapCard;
