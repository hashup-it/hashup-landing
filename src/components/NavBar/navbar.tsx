import { Flex, Image, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import HamburgerMenu from '../../Icons/hamburgerMenu';
import HashupLogo from '../../Icons/hashupLogo';
import MobileHashUpLogo from '../../Icons/mobileHashUpLogo';
import LanguageSelect from './languageSelect';
import LaunchAppButton from './launchAppButton';
import NavBarItems from './navbarItems';

export const NavBar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Flex w="100vw" alignItems="center" justifyContent="space-between" zIndex="1000">
				<Flex
					display={['flex', 'flex', 'none', 'none']}
					justifyContent="space-between"
					alignItems="center"
					position='fixed'
					w="100vw"
					bgColor='black'
					gridGap="10px"
					mt='25px'
					p='20px'
					zIndex='10000'
				>
					{' '}
					<Flex justifyContent="space-between" alignItems="center" w="100%">
						<Flex>
							<a href="/">
								<MobileHashUpLogo cursor="pointer" />
							</a>
						</Flex>
						<Flex gridGap="15px" alignItems="center">
							<LaunchAppButton />
							<Flex cursor="pointer">
								<HamburgerMenu onClick={onOpen}/>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
				<Flex display={['none', 'none', 'flex', 'flex']}>
					<Link href="/">
						<HashupLogo cursor="pointer" />
					</Link>
				</Flex>
				<Flex display={['none', 'none', 'flex', 'flex']}>
					<NavBarItems />
				</Flex>

				<Flex alignItems="center" gridGap="36px" ml="-80px" display={['none', 'none', 'flex', 'flex']}>
					<LanguageSelect />
					<LaunchAppButton />
				</Flex>
			</Flex>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent bg="black" w="100%">
					<ModalHeader>
						<Flex align="center" justify="center">
							<Flex
								cursor="pointer"
								fontWeight="600"
								fontSize="16px"
								gridGap="14px"
								align="center"
							></Flex>
							<NavBarItems />
						</Flex>
					</ModalHeader>
				</ModalContent>
			</Modal>
		</>
	);
};

export default NavBar;
