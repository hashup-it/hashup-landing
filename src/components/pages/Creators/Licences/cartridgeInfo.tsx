import { Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Colors } from '../../../../colors';

export interface ICartridgeInfo {
	color: string;
	description: string;
	supply: string;
	fee: string;
	price: string;
	colorDesc: string;
	image?: string;
	gradient?: string;
}

export const CartridgeInfo: FC<ICartridgeInfo> = ({ color, description, supply, fee, price, colorDesc }) => {
	return (
		<Flex
			flexDirection="column"
			lineHeight="110%"
			fontSize={{ base: '45px', md: '55px', xl: '65px' }}
			fontWeight="700"
			gridGap="17px"
		>
			<Flex flexDirection="column">
				<Text>{color}</Text>
				<Text>cartridge</Text>
			</Flex>
			<Text
				flexDirection="column"
				lineHeight="110%"
				fontSize={{ base: '14px', md: '18px', xl: '20px' }}
				fontWeight="500"
				mt="25px"
			>
				{description}
			</Text>
			<Flex
				lineHeight="130%"
				fontSize={{ base: '12px', md: '15px', xl: '18px' }}
				fontWeight="500"
				flexDirection="column"
				color={Colors.greyText}
			>
				<Text>Supply: {supply}</Text>
				<Text>Fee for exchange: {fee}</Text>
				<Text>Price: {price}</Text>
				<Text>Color: {colorDesc}</Text>
			</Flex>
		</Flex>
	);
};

export default CartridgeInfo;
