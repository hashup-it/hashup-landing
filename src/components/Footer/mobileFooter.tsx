import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import HashupLogo from '../../Icons/hashupLogo';
import { FooterSocials } from './FooterSocials/socials';
import { Colors } from '../../colors';
import CompanyInformation from './companyInformation';
import Newsletter from './Newsletter/newsletter';
import Copyright from './Copywright/copyright';

export const MobileFooter = () => {
	return (
		<Flex
			direction="column"
			pb="20px"
			alignItems="center"
			justifyContent="center"
			pt="50px"
			zIndex="1000"
		>
			<HashupLogo />
			<Flex pt="50px">
				<FooterSocials />
			</Flex>
			<Flex
				justifyContent="space-between"
				alignItems="center"
				gridGap="12px"
				pt="35px"
			>
				<Box
					w="17px"
					h="1px"
					bgColor={Colors.brandMain}
				/>
				<a href="/">
					<Text>Go to the main page</Text>
				</a>
			</Flex>
			<Flex
				alignItems="center"
				pt="3px"
			>
				<Flex direction="column">
					<Newsletter />
					<CompanyInformation />
				</Flex>
			</Flex>
			<Flex pt="20px">
				<Copyright />
			</Flex>
		</Flex>
	);
};

export default MobileFooter;
