import { Button, Flex, Menu, MenuButton, MenuItem, MenuList, Select, useDisclosure } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Colors } from '../../colors';
import ChevronDownIcon from '../../Icons/chevronDownIcon';

export const LaunchAppButton = () => {
	// const [isClicked, setIsCliked] = useState<boolean>(false);

	// const handleClick = () => {
	// 	setIsCliked(!isClicked);
	// };

	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Menu isOpen={isOpen}>
			{/* {({ isOpen }) => ( */}
			<>
				<MenuButton
					// variant="ghost"
					border={`1.6px solid ${Colors.brandMain}`}
					color="white"
					colorScheme={Colors.brandMain}
					fontWeight="700"
					fontSize="14px"
					gridGap="14px"
					p="17px 20px"
					m="0"
					borderRadius="5px"
					alignItems="center"
					justifyContent="center"
					transition="ease 0.2s"
					cursor="pointer"
					bg="none"
					_hover={{ bgColor: `${Colors.brandMain}` }}
					_focus={{ border: `1.6px solid ${Colors.brandMain}` }}
					isActive={isOpen}
					as={Button}
					rightIcon={<ChevronDownIcon />}
					onMouseEnter={onOpen}
					onMouseLeave={onClose}
					onClick={onOpen}
				>
					Launch App
				</MenuButton>
				<MenuList
					bgColor="#0A0A0A"
					justifyContent="center"
					w="50%"
					fontWeight="700"
					p="0"
					m="0"
					border="none"
					onMouseEnter={onOpen}
					onMouseLeave={onClose}
				>
					<MenuItem _hover={{ bgColor: '#181717' }}>
						<Link href="https://test.gamexplorer.io">
							<a target="_blank">GameXplorer</a>
						</Link>
					</MenuItem>
					<MenuItem _hover={{ bgColor: '#181717' }}>
						<Link href="https://test.gamecontract.io">
							<a target="_blank">GameContract</a>
						</Link>
					</MenuItem>
				</MenuList>
			</>
			{/* )} */}
		</Menu>
	);
};

export default LaunchAppButton;
