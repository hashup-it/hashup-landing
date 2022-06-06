import { Flex, Text, Box } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import NavbarItem from './navbarItem';
import { useRouter } from 'next/router';

export const NavBarItems = () => {
	const router = useRouter();

	return (
		<Flex fontWeight="500" fontSize="14px" color="white" gridGap="24px">
			<NavbarItem link="gamers" label="Gamers" isActive={router.asPath === '/gamers'} />
			<Text>.</Text>
			<NavbarItem link="creators" label="Creators" isActive={router.asPath === '/creators'} />
			<Text>.</Text>
			<NavbarItem link="investors" label="Investors" isActive={router.asPath === '/investors'} />
			<Text>.</Text>
			<NavbarItem link="token" label="Token" isActive={router.asPath === '/token'} />
			<Text>.</Text>
			<NavbarItem link="cartridge" label="Cartridge" isActive={router.asPath === '/cartridge'} />
		</Flex>
	);
};

export default NavBarItems;
