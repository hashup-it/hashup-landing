import {
	Button,
	Flex,
	Link,
	Modal,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import { useWeb3Modal } from '@web3modal/react';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { useAccount } from 'wagmi';
import CloseMenuIcon from '../../Icons/closeMenuIcon';
import HamburgerMenu from '../../Icons/hamburgerMenu';
import HashupLogo from '../../Icons/hashupLogo';
import MobileHashUpLogo from '../../Icons/mobileHashUpLogo';
import LaunchAppButton from './launchAppButton';
import MobileNavbarItems from './mobileNavbarItems';
import NavBarItems from './navbarItems';

export const NavBar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { open } = useWeb3Modal();
	const { address: userAddress } = useAccount();
	const { pathname } = useRouter();

	const [isScroll, setIsScroll] = useState<boolean>(false);

	const ref = useRef(null);

	const scrollHandler = () => {
		if (ref.current.getBoundingClientRect().top > -30) setIsScroll(false);
		else if (ref.current.getBoundingClientRect().top < -30) setIsScroll(true);
	};

	useEffect(() => {
		window.addEventListener('scroll', scrollHandler, true);
		return () => {
			window.removeEventListener('scroll', scrollHandler, true);
		};
	}, []);

	return (
		<>
			<Flex
				w={['100vw', '100vw', '100%', '100%']}
				alignItems="center"
				justifyContent="space-between"
				zIndex="10"
				ref={ref}
				py="24px"
			>
				<Flex
					display={['flex', 'flex', 'none', 'none']}
					justifyContent="space-between"
					alignItems="center"
					position="fixed"
					top="0"
					left="0"
					w={['100%', '100%', '100vw', '100vw']}
					bgColor={isScroll ? 'black' : 'none'}
					gridGap="10px"
					p="20px"
					zIndex="10000"
					transition="background .33s"
				>
					<Flex
						justifyContent="space-between"
						alignItems="center"
						w="100%"
					>
						<Flex>
							<a href="/">
								{/* <MobileHashUpLogo cursor="pointer" /> */}
								<HashupLogo />
							</a>
						</Flex>
						<Flex
							gridGap="15px"
							alignItems="center"
						>
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

				<Flex
					align="center"
					gap="16px"
					display={['none', 'none', 'flex', 'flex']}
				>
					{pathname === '/nbx' && (
						<Button
							onClick={open}
							bg="#ff3f3f"
							_hover={{ opacity: '0.7' }}
						>
							{userAddress ? userAddress?.slice(0, 5) + '...' + userAddress?.slice(-5) : 'Connect'}
						</Button>
					)}
					<Flex
						alignItems="center"
						gridGap="16px"
						display={['none', 'none', 'none', 'flex']}
					>
						<LaunchAppButton />
					</Flex>
				</Flex>
			</Flex>

			<Modal
				isOpen={isOpen}
				onClose={onClose}
				size="full"
			>
				<ModalOverlay h="100vh" />
				<ModalContent
					bg="black"
					w="100%"
				>
					<ModalHeader>
						<Flex
							alignItems="center"
							justifyContent="center"
						>
							<Flex
								direction="column"
								gridGap="46px"
							>
								<Flex
									justifyContent="space-between"
									gridGap="156px"
									alignItems="center"
								>
									<Flex>
										<MobileHashUpLogo cursor="pointer" />
									</Flex>
									<Flex
										gridGap="16px"
										alignItems="center"
										justifyContent="center"
									>
										<Text>Close</Text>
										<CloseMenuIcon
											onClick={onClose}
											cursor="pointer"
										/>
									</Flex>
								</Flex>
								<Flex
									alignItems="center"
									justifyContent="center"
									direction="column"
								>
									<MobileNavbarItems />
								</Flex>
								<Flex
									flexDir="column"
									gap="8px"
								>
									<Flex
										pt="100%"
										alignItems="center"
										justifyContent="center"
									>
										<LaunchAppButton />
									</Flex>
									{pathname === '/nbx' && (
										<Button
											onClick={() => {
												onClose();
												open();
											}}
											bg="#ff3f3f"
											_hover={{ opacity: '0.7' }}
										>
											{userAddress
												? userAddress?.slice(0, 5) + '...' + userAddress?.slice(-5)
												: 'Connect'}
										</Button>
									)}
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
