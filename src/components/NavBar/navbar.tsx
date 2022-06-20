import { Flex, Image, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import React from 'react';
import CloseMenuIcon from '../../Icons/closeMenuIcon';
import HamburgerMenu from '../../Icons/hamburgerMenu';
import HashupLogo from '../../Icons/hashupLogo';
import MobileHashUpLogo from '../../Icons/mobileHashUpLogo';
import Whitepaper from '../Header/HeaderBottom/whitepaper';
import LanguageSelect from './languageSelect';
import LaunchAppButton from './launchAppButton';
import MobileNavbarItem from './mobileNavbarItem';
import MobileNavbarItems from './mobileNavbarItems';
import NavBarItems from './navbarItems';

export const NavBar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Flex
				w={['100vw', '100vw', '100&', '100%']}
				alignItems="center"
				justifyContent="space-between"
				zIndex="1000"
			>
				<Flex
					display={['flex', 'flex', 'none', 'none']}
					justifyContent="space-between"
					alignItems="center"
					position="fixed"
					w={['100%', '100%', '100vw', '100vw']}
					bgColor="black"
					gridGap="10px"
					mt="25px"
					p="20px"
					zIndex="10000"
				>
					{' '}
					<Flex justifyContent="space-between" alignItems="center" w="100%">
						<Flex>
							<a href="/">
								<MobileHashUpLogo cursor="pointer" />
							</a>
						</Flex>
						<Flex gridGap="15px" alignItems="center">
							<Flex cursor="pointer">
								<HamburgerMenu onClick={onOpen} />
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
					<LaunchAppButton />
				</Flex>
			</Flex>

			<Modal isOpen={isOpen} onClose={onClose} size="full">
				<ModalOverlay h="100vh"/>
				<ModalContent bg="black" w="100%" >
					<ModalHeader>
						<Flex alignItems='center' justifyContent='center' >
						<Flex direction='column' gridGap='46px'>
						<Flex justifyContent="space-between" gridGap="156px" alignItems="center">
							<Flex>
								<MobileHashUpLogo cursor="pointer" />
							</Flex>
							<Flex gridGap="16px" alignItems="center" justifyContent="center">
								<Text>Close</Text>
								<CloseMenuIcon onClick={onClose} cursor='pointer'  />
							</Flex>
						</Flex>
						<Flex alignItems='center' justifyContent='center' direction='column'>
							<MobileNavbarItems />
						</Flex>
						<Flex pt='100%' alignItems='center' justifyContent='center'>
							<LaunchAppButton />
						</Flex>
						</Flex>
						</Flex>
					</ModalHeader>
				</ModalContent>
			</Modal>
		</>
	);
};

export default NavBar;
