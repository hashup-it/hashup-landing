import { Flex } from '@chakra-ui/react';
import React from 'react';

export const GlobalContainer = ({ children }) => {
	return (
		<Flex
			flexDirection="column"
			alignItems="center"
			w="100vw"
			p={{ base: '0 20px', lg: '0 90px' }}
			pb="32px !important"
		>
			{children}
		</Flex>
	);
};

export default GlobalContainer;
