import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { Colors } from '../../colors';

export const NavbarItem = ({
	isActive,
	label,
	link,
	external,
}: {
	isActive?: boolean;
	label?: string;
	link: string;
	external?: boolean;
}) => {
	return (
		<Link
			href={external ? link : `/${link}`}
			target={external ? '_blank' : ''}
		>
			<Flex
				position="relative"
				wrap="nowrap"
				gridGap="24px"
				_hover={{ opacity: '0.5' }}
			>
				<Text cursor="pointer">{label}</Text>
				{isActive && (
					<Box
						h="2px"
						w="2vw"
						bgColor={Colors.brandMain}
						position="absolute"
						bottom="-25%"
						left="0"
					/>
				)}
			</Flex>
		</Link>
	);
};

export default NavbarItem;
