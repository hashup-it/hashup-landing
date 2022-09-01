import { Flex, Image, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Colors } from '../../colors';
import PatchkitLogo from '../../Icons/patchkitLogo';

interface IOpinionCard {
	name: string;
	role: string;
	opinion: string;
	logo: React.ReactNode;
}

export const OpinionCard: FC<IOpinionCard> = ({ name, role, opinion, logo }) => {
	return (
		<Flex flexDirection="column" gridGap="30px" alignItems={['center', 'center', 'flex-start', 'flex-start']}>
			<Text
				fontSize={{ base: '16px', lg: '22px' }}
				fontWeight="300"
				minHeight={['8em', '8em', '6em', '6em']}
				alignItems={['center', 'center', 'flex-start', 'flex-start']}
				textAlign={{ base: 'center', lg: 'left' }}
				fontStyle="italic"
			>
				{opinion}
			</Text>
			<Flex fontSize="20px" fontWeight="700" flexDirection="column" textAlign={{ base: 'center', lg: 'left' }}>
				{name},
				<Text
					fontSize="15px"
					fontWeight="400"
					color={Colors.greyText}
					textAlign={{ base: 'center', lg: 'left' }}
				>
					{role}
				</Text>
			</Flex>
			<Flex alignItems={['center', 'center', 'flex-start', 'flex-start']}>{logo}</Flex>
		</Flex>
	);
};

export default IOpinionCard;
