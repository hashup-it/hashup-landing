import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import ChevronDownIcon from '../../Icons/chevronDownIcon';
import GlobeIcon from '../../Icons/globeIcon';

export const LanguageSelect = () => {
	return (
		<Flex
			alignItems="center"
			gridGap="10px"
			color="white"
			fontWeight="700"
			cursor="pointer"
		>
			<GlobeIcon />
			<Text>PL</Text>
			<ChevronDownIcon />
		</Flex>
	);
};

export default LanguageSelect;
