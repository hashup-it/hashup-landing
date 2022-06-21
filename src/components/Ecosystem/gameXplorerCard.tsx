import { Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { Colors } from '../../colors';
import ChevronRightIcon from '../../Icons/chevronRightIcon';
import GameXplorerLogo from '../../Icons/gameXplorerLogo';

export const GameXplorerCard = () => {
	return (
		<Flex w="100vw" h="80vh" p="50px 140px">
			<Flex flexDirection="column" gridGap="50px" maxW="40%">
				<GameXplorerLogo />
				<Text fontSize="40px" fontWeight="700">
					First blockchain explorer for the gamers!
				</Text>
				<Text fontSize="20px" fontWeight="300" color={Colors.greyText}>
					The future of social media. Create a stunning, customizable profile and take pride in your games
					collection. Know your friends’ items and get inspired by following influencers!
				</Text>
				<Link href="https://gamexplorer.io/">
					<a target="_blank">
						<Flex gridGap="3px">
							<Flex
								bgColor={Colors.brandMain}
								fontSize="11px"
								fontWeight="600"
								p="11px 20px"
								borderRadius="0 0 0 15px"
								cursor="pointer"
							>
								Explore
							</Flex>
							<Flex
								bgColor={Colors.brandMain}
								opacity="0.6"
								p="10px"
								alignItems="center"
								cursor="pointer"
							>
								<ChevronRightIcon />
							</Flex>
						</Flex>
					</a>
				</Link>
			</Flex>
			<Image src="assets/gameXplorerCard.png" position="absolute" right="0" w="50%" />
		</Flex>
	);
};

export default GameXplorerCard;
