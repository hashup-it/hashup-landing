import { CopyIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Colors } from '../../../colors';
import HashupSingleLogo from '../../../Icons/hashupSingleLogo';
import MetamaskButton from './metamaskButton';

export const ContractInfo = () => {
	return (
		<Flex fontSize="12px" fontWeight="600" color="white" gridGap="8px" alignItems="center">
			Contract:
			<HashupSingleLogo />
			<Text fontWeight="400">Coming Soon</Text>
			<CopyIcon color={Colors.brandMain} cursor="pointer" />
		</Flex>
	);
};

export default ContractInfo;
