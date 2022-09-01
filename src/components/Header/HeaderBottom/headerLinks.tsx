import { Button, Flex, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { Colors } from '../../../colors';
import PlayVideo from './playVideo';
import Whitepaper from './whitepaper';

export const HeaderLinks = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Flex gridGap="24px" alignItems="center">
			<Menu isOpen={isOpen}>
				<MenuButton
					as={Button}
					colorScheme={Colors.brandMain}
					bg="none"
					color="white"
					borderRadius="5px"
					alignItems="center"
					justifyContent="center"
					transition="ease 0.2s"
					cursor="pointer"
					_focus={{ border: 'none' }}
					_active={{ bgColor: 'none' }}
					_hover={{ bg: 'none' }}
					isActive={isOpen}
					onClick={isOpen ? onClose : onOpen}
					onMouseEnter={onOpen}
					mr="-10px"
				>
					<Whitepaper />
				</MenuButton>
				<MenuList bgColor="#0A0A0A" justifyContent="center" fontWeight="700" p="0" m="0" border="none">
					<Link href="https://cdn.hashup.it/hashup-whitepaper-eng.pdf">
						<a target="_blank">
							<MenuItem _hover={{ bgColor: '#181717' }}>EN</MenuItem>
						</a>
					</Link>
					<Link href="https://cdn.hashup.it/hashup-whitepaper-pl.pdf">
						<a target="_blank">
							<MenuItem _hover={{ bgColor: '#181717' }}>PL</MenuItem>
						</a>
					</Link>
				</MenuList>
			</Menu>
			<Link href="https://hashup.gitbook.io/hashup-whitepaper/">
				<Flex fontSize="14px" fontWeight="600" color="white" cursor="pointer" _hover={{ opacity: '0.5' }}>
					Docs<strong>.</strong>
				</Flex>
			</Link>
			<PlayVideo />
		</Flex>
	);
};

export default HeaderLinks;
