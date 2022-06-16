import { Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';
import OdlIcon from '../../../Icons/odlIcon';
import CopywrightInfo from './copywrightInfo';

export const Copywright = () => {
	return (
		<Flex w="100%" justifyContent="space-between" direction={['column', 'column', 'row', 'row']}>
			<Text fontSize="12px" color={['white', 'white', '#8a8f98', '#8a8f98']}>
				Copyright © {new Date().getFullYear()} by HashUp All Rights Reserved.
			</Text>
			<Flex
				fontSize="12px"
				pt={['20px', '20px', '0px', '0px']}
				color={['white', 'white', '#8a8f98', '#8a8f98']}
				gridGap={['16px', '16px', '33px', '33px']}
				direction={['column', 'column', 'row', 'row']}
				alignItems={['center', 'center', 'left', 'left']}
			>
				<Flex display={['none', 'none', 'flex', 'flex']}>
					<OdlIcon />
				</Flex>
				{CopywrightInfo.map(({ name, url }) => (
					<Text
						key={`cp_${url}_${name}`}
						as={Link}
						target="_blank"
						href={url}
						cursor="pointer"
						_hover={{ color: 'white' }}
					>
						{name}
					</Text>
				))}
			</Flex>
		</Flex>
	);
};

export default Copywright;
