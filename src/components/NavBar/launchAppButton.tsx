import { Button, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
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
					gridGap={['6px', '6px', '14px', '14px']}
					p={['22px 97px', '17px 97px', '17px 20px', '17px 20px']}
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
						<Link href="https://gamexplorer.io/">
							<a target="_blank">GameXplorer</a>
						</Link>
					</MenuItem>
					<MenuItem _hover={{ bgColor: '#181717' }}>
						<Link href="https://gamecontract.io/">
							<a target="_blank">GameContract</a>
						</Link>
					</MenuItem>
					<MenuItem _hover={{ bgColor: '#181717' }}>
						<Link href="https://dl.patchkit.net/d/3sxi7923gq5eccqh7tlzo/direct">
							<a target="_blank">PCLauncher</a>
						</Link>
					</MenuItem>
				</MenuList>
			</>
			{/* )} */}
		</Menu>
	);
};

export default LaunchAppButton;
