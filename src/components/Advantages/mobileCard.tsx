import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Colors } from '../../colors';
import HashupSingleLogo from '../../Icons/hashupSingleLogo';
import MobileHashDistributionModel from '../../Icons/mobileHashDistributionModel';

export const MobileCard = () => {
	return (
		<Flex
			borderWidth="1px"
			borderColor={Colors.brandMain}
			borderRadius="0px 30px 0px 0px"
			position="relative"
		>
			<Box
				alignItems="center"
				backgroundImage="linear-gradient(transparent, black)"
				position="absolute"
				top="-1px"
				left="-1px"
				height="calc(100% + 2px)"
				width="calc(100% + 2px)"
			>
				<Flex
					fontSize="18px"
					fontWeight="700"
					direction="column"
					p="60px"
					alignItems="center"
				>
					<Text>Decentralized</Text>
					<Text color={Colors.brandMain}>Web 3.0</Text>
				</Flex>
				<Flex
					alignItems="center"
					justifyContent="center"
					pb="30px"
				>
					<MobileHashDistributionModel />
				</Flex>
			</Box>
			<Flex
				p="10px"
				alignItems="center"
				justifyContent="center"
			>
				<Flex
					w="80px"
					h="80px"
					bgColor={Colors.brandMain}
					borderRadius="50%"
					alignItems="center"
					justifyContent="center"
					position="absolute"
					right="-5%"
					top="-10%"
					zIndex="0"
				>
					<HashupSingleLogo h="36px" />
				</Flex>
				<Box
					borderWidth="1px"
					borderColor={Colors.brandMain}
					borderRadius="0px 30px 0px 0px"
					alignItems="center"
				>
					<Box
						opacity="0"
						alignItems="center"
					>
						<Flex
							fontSize="18px"
							fontWeight="700"
							direction="column"
							p="60px"
							alignItems="center"
						>
							<Text>Decentralized</Text>
							<Text color={Colors.brandMain}>Web 3.0</Text>
						</Flex>
						<Flex
							alignItems="center"
							justifyContent="center"
							pb="30px"
						>
							<MobileHashDistributionModel />
						</Flex>
					</Box>
				</Box>
			</Flex>
		</Flex>
	);
};

export default MobileCard;
