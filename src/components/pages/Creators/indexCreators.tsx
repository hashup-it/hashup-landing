import React from 'react';
import { Flex } from '@chakra-ui/react';
import HeaderCreators from './Header/headerCreators';
import DescriptionCreators from './Description/descriptionCreators';
import HowTo from './HowTo/howTo';
import BigHashSection from './BigHashSection/bigHashSection';
import Licences from './Licences/licences';
import StickySocials from '../../StickySocials/stickySocials';

export const IndexCreators = () => {
	return (
		<Flex flexDirection="column">
			<StickySocials />
			<HeaderCreators />
			<DescriptionCreators />
			<HowTo />
			<BigHashSection />
			<Licences />
		</Flex>
	);
};

export default IndexCreators;
