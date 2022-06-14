import { Flex, Text, Box } from '@chakra-ui/react';
import React from 'react';
import RedTriangleIcon from '../../../../Icons/redTriangleIcon';
import { Colors } from '../../../../colors';

export const ForGamers = () => {
	return (
		<Flex
			flexDirection="column"
			mt="100px"
			w="100%"
			alignItems="center"
			zIndex="10"
			justifyContent="center"
			gridGap="32px"
			position="absolute"
			h="100vh"
		>
			<Flex justifyContent="space-between" alignItems="center" gridGap="48px" display={['none', 'none', 'flex', 'flex']}>
				<Text color={Colors.greyText}>For Investor</Text>
				<Flex gridGap="10px" fontWeight="600">
					<RedTriangleIcon mt="-5px" />
					For Gamers
					<RedTriangleIcon transform="rotate(3deg)" mt="15px" />
				</Flex>
				<Text color={Colors.greyText}>For Creators</Text>
			</Flex>
			<Flex
				flexDirection="column"
				fontSize={{base: '38px', lg: "80px"}}
				fontWeight="800"
				color="white"
				gridGap="-40px"
				alignItems="center"
				lineHeight="100%"
			>
				<Flex alignItems="center" maxW="70%" textAlign="center" >
					<Text>
						{' '}
						Decentralized Games Marketplace<strong>.</strong>
					</Text>
				</Flex>
			</Flex>
			<Text fontSize="28px" fontWeight="300" pt="32px" textAlign="center">
				based on blockchain technology
			</Text>
			<Flex
				borderRadius="5"
				zIndex="2"
				p="17px 22px"
				fontSize="14px"
				bgColor={Colors.brandMain}
				fontWeight="700"
				color="white"
				_after={{
					content: '""',
					zIndex: '0',
					bgColor: 'red',
					width: '121px',
					height: '35px',
					position: 'absolute',
					transform: 'translate(-50%, 30%)',
					left: '50%',
					filter: 'blur(35px)',
				}}
			>
				<Text zIndex="4">Run GameXplorer</Text>
			</Flex>
			<Box m="60px 0" w="1px" h="200px" bgColor={Colors.brandMain} />
		</Flex>
	);
};

export default ForGamers;
