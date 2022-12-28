import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import NavbarItem from './navbarItem';
import { useRouter } from 'next/router';

export const NavBarItems = () => {
	const router = useRouter();

	return (
		<Flex
			fontWeight="500"
			fontSize="14px"
			color="white"
			gridGap="24px"
			direction={['column', 'column', 'row', 'row']}
		>
			<NavbarItem link="gamers" label="Marketplaces" isActive={router.asPath === '/gamers'} />
			<Text display={['none', 'none', 'flex', 'flex']}>.</Text>
			<NavbarItem link="creators" label="GameDevs" isActive={router.asPath === '/creators'} />
		</Flex>
	);
};

export default NavBarItems;
