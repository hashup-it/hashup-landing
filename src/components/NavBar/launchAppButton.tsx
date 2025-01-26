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
					_hover={{ bgColor: `${Colors.brandMain}` }}
					_focus={{ border: `1.6px solid ${Colors.brandMain}` }}
					isActive={isOpen}
					as={Button}
					sx={{
						background: 'rbga(20, 0, 0, 0)',
					}}
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
					zIndex="1000"
					sx={{
						background: 'transparent !important',
						transform: 'translateY(-10px) !important',
						paddingTop: '10px !important',
						borderRadius: '5px !important',
						'& > *:first-child': {
							borderRadius: '5px 5px 0 0 !important', // Top rounded corners for the first item
						},
						'& > *:last-child': {
							borderRadius: '0 0 5px 5px !important', // Bottom rounded corners for the last item
						},
						'& > *': {
							fontWeight: '500 !important',
							padding: '10px 20px',
						}
					}}
					onMouseEnter={onOpen}
					onMouseLeave={onClose}
				>
					<MenuItem _hover={{ bgColor: Colors.brandMain }} bgColor={Colors.darkGrey}>
						<Link href="https://explorer.hashup.it/">
							<a target="_blank">GameXplorer</a>
						</Link>
					</MenuItem>
					<MenuItem _hover={{ bgColor: Colors.brandMain }} bgColor={Colors.darkGrey}>
						<Link href="https://contract.hashup.it/">
							<a target="_blank">GameContract</a>
						</Link>
					</MenuItem>
					<MenuItem _hover={{ bgColor: Colors.brandMain }} bgColor={Colors.darkGrey}>
						<Link href="https://dl.patchkit.net/d/3sxi7923gq5eccqh7tlzo/direct">
							<a target="_blank">PC Launcher</a>
						</Link>
					</MenuItem>
				</MenuList>
			</>
			{/* )} */}
		</Menu>
	);
};

export default LaunchAppButton;
