import { Flex, Link, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import MobileNavbarItem from './mobileNavbarItem';

export const MobileNavbarItems = () => {
	const router = useRouter();

	return (
		<Flex
			direction="column"
			gridGap="34px"
			alignItems="center"
			justifyContent="center"
		>
			<MobileNavbarItem
				link="gamers"
				label="Marketplaces"
				isActive={router.asPath === '/gamers'}
			/>
			<MobileNavbarItem
				link="creators"
				label="GameDevs"
				isActive={router.asPath === '/creators'}
			/>
			<Link
				href="https://cdn.hashup.it/hashup-whitepaper-eng.pdf"
				_hover={{ opacity: '0.5' }}
			>
				<Text
					fontWeight="400"
					fontSize="16px"
					color="#848483"
				>
					Whitepaper
				</Text>
			</Link>
		</Flex>
	);
};

export default MobileNavbarItems;
