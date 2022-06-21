import { Flex, Text, Box } from '@chakra-ui/react';
import React from 'react';
import { Colors } from '../../colors';
import ElipseMobileIcon from '../../Icons/elipseMobileIcon';
import RedChevronIRightIcon from '../../Icons/redChevronIRightIcon';

export interface IMobileProfitCard {
    number: string,
    subNumber?: string,
    label: string, 
    description?: string,
	width: string,
	handlers: any,
}

export const MobileProfitCard = ({number, subNumber, label, description, width, handlers }: IMobileProfitCard) => {
	return (
		<Flex direction="column" p="25px" {...handlers} h='40vh'>
			<Flex alignItems="center" gridGap="120px" justifyContent="flex-start" w='100%'>
				<Flex gridGap="21px" alignItems="center" w='100%'>
					<Text fontSize="48px" fontWeight="200" color="white" w='65px'>
						{number}
					</Text>
					<Box w={width} h="2px" bgColor={Colors.brandMain} />
				</Flex>
				<Flex>
					<Text fontSize="48px" fontWeight="200" opacity="0.3" minW='110%'>
						{subNumber}
					</Text>
				</Flex>
			</Flex>
			<Flex direction="column" h='55%' w='100%'>
				<Text pt="20px" fontSize="28px" fontWeight="700" h='80%'>
					{label}
				</Text>
				<Text fontSize="16px" maxW="90%" color={Colors.greyText}>
					{description}
				</Text>
				<Flex alignItems="center" pt='30px' gridGap="15px" fontWeight="700" fontSize="14px" w='350px' h='30px'>
					<Text>Learn more</Text>
					<RedChevronIRightIcon />
				</Flex>
			</Flex>
		</Flex>
	);
};

export default MobileProfitCard;
