import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import HashupUnionLogo from '../../../../Icons/hashupUnionLogo';
import RedTriangleIcon from '../../../../Icons/redTriangleIcon';
import { Colors } from '../../../../colors';

export const DescriptionCreators = () => {
	return (
		<Flex alignItems="center" justifyContent="center" direction="column" position="relative">
			<Flex position="absolute">
				<HashupUnionLogo />
			</Flex>
			<Flex fontSize="70px" maxW="80%" textAlign="center" fontWeight="700" lineHeight="100%" gridGap="-20px">
				<RedTriangleIcon mt="-50px" transform="rotate(160deg)" h="62px" w="45px" />
				<Text>
					HashUp is the answer to the market needs<strong>.</strong>
				</Text>
				<RedTriangleIcon
					transform="rotate(-15deg)"
					mt="130px"
					left="73%"
					position="absolute"
					h="62px"
					w="45px"
					boxShadow="0px 6.61979px 6.61979px rgba(0, 0, 0, 0.25)"
				/>
			</Flex>
		</Flex>
	);
};

export default DescriptionCreators;
