import { Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';

export interface IMobileNavbarItem {
    isActive?: boolean;
	label: string;
	link?: string;
}

export const MobileNavbarItem = ({ isActive ,label, link }: IMobileNavbarItem) => {
	return (
		<Link href={`/${link}`} _hover={{ opacity: '0.5' }}>
                <Text fontWeight='400' fontSize='16px' color={isActive ? 'white' : '#848483'}>{label}</Text>
		</Link>
	);
};

export default MobileNavbarItem;
