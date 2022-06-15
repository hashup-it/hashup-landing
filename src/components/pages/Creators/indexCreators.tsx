import React from 'react';
import { Flex } from '@chakra-ui/react';
import HeaderCreators from './Header/headerCreators';
import DescriptionCreators from './Description/descriptionCreators';
import HowTo from './HowTo/howTo';
import BigHashSection from './BigHashSection/bigHashSection';
import Licences from './Licences/licences';

export const IndexCreators = () => {
	return (
		<Flex flexDirection="column">
			<HeaderCreators />
			<DescriptionCreators />
			<HowTo />
			<BigHashSection />
			<Licences />
		</Flex>
	);
};

export default IndexCreators;
