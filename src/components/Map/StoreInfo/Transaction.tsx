import { InfoIcon } from '@chakra-ui/icons';
import { Flex, Grid, Link, Text } from '@chakra-ui/react';
import moment from 'moment';
import React from 'react';
import { Colors } from '../../../colors';

export const Transaction = ({
	user,
	game,
	quantity,
	time,
	hash,
}: {
	user: string;
	game: string;
	quantity: string;
	time: any;
	hash: string;
}) => {
	return (
		<Grid
			templateColumns="2fr 4fr 2fr 1fr"
			fontSize="12px"
			bgColor="rgba(30, 30, 30, 0.7)"
			borderRadius="0px"
			p="15px"
			w="100%"
			borderBottom="1px solid rgba(255,255,255,0.2)"
			justifyContent="space-between"
			justifyItems="center"
			alignItems="center"
		>
			<Text fontSize="11px">{moment(time).fromNow()}</Text>
			<Flex flexDirection="column">
				<Flex>
					<Text fontWeight="700">User:</Text> &nbsp;{user.slice(0, 8)}...
				</Flex>
				<Flex>
					<Text fontWeight="700">Game:</Text> &nbsp;{game.slice(0, 8)}...
				</Flex>
			</Flex>
			<Flex
				flexDirection="column"
				alignItems="center"
			>
				<Text fontWeight="700">Quantity</Text>
				<Text>{parseInt(quantity) / 100}</Text>
			</Flex>
			<Link
				href={`https://polygonscan.com/tx/${hash}`}
				target="_blank"
			>
				<InfoIcon _hover={{ color: Colors.brandMain, cursor: 'pointer' }} />
			</Link>
		</Grid>
	);
};
