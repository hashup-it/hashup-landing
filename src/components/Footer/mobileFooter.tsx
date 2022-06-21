import { Flex, Text, Box } from '@chakra-ui/react';
import React from 'react';
import HashupLogo from '../../Icons/hashupLogo';
import SocialIcon from './FooterSocials/socialIcon';
import { FooterSocials } from './FooterSocials/socials';
import { Colors } from '../../colors';
import CompanyInformation from './companyInformation';
import AboutHashUp from './aboutHashUp';
import Newsletter from './Newsletter/newsletter';
import Copywright from './Copywright/copywright';

export const MobileFooter = () => {
	return (
		<Flex direction="column" pb="20px" alignItems="center" justifyContent="center" pt='50px'>
			<HashupLogo />
			<Flex pt="50px">
				<FooterSocials />
			</Flex>
			<Flex justifyContent="space-between" alignItems="center" gridGap='12px' pt='35px'>
				<Text>HashUp.it</Text>
				<Box w="17px" h="1px" bgColor={Colors.brandMain} />
				<a href="/">
					<Text>Go to the main page</Text>
				</a>
			</Flex>
            <Flex alignItems='center' pt='3px'>
			<Flex direction='column'>
			<Newsletter />
            <CompanyInformation />
			</Flex>
            </Flex>
            <Flex pt='20px'>
            <Copywright />
            </Flex>
		</Flex>
	);
};

export default MobileFooter;
