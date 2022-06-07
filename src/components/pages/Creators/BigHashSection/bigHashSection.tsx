import { Flex } from '@chakra-ui/react';
import React from 'react';
import SectionInfoButton from '../../../SectionLabel/sectionInfoButton';

export const BigHashSection = () => {
	return (
		<Flex flexDirection="column" gridGap="45xp">
			<SectionInfoButton label="TEKST" />
		</Flex>
	);
};

export default BigHashSection;
