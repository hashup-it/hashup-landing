import React from 'react';
import { Flex } from '@chakra-ui/react';
import HeaderInvestors from './Header/headerCreators';
import DescriptionCreators from './Description/descriptionCreators';
import HowTo from './HowTo/howTo';
import BigHashSection from './BigHashSection/bigHashSection';

export const IndexCreators = () => {
	return (
		<Flex flexDirection="column">
			<HeaderInvestors />
			<DescriptionCreators />
			<HowTo />
			<BigHashSection />
		</Flex>
	);
};

export default IndexCreators;
