import { Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

interface StatProps {
	icon: JSX.Element;
	text: string;
	number: number;
}

export const Stat: FC<StatProps> = ({ icon, text, number }) => {
	const numberWithSpaces = (x: number) => {
		var parts = x.toString().split('.');
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
		return parts.join('.');
	};

	return (
		<Flex
			bgColor="rgba(50, 50, 50, 0.4)"
			borderRadius="10px"
			p="15px 22px 15px 20px"
			w="100%"
			justifyContent="space-between"
			alignItems="center"
		>
			<Flex
				gap="10px"
				fontSize="15px"
				alignItems="center"
			>
				{icon}
				{text}
			</Flex>
			<Text
				fontSize="12px"
				fontWeight="700"
			>
				{numberWithSpaces(number)}
			</Text>
		</Flex>
	);
};
