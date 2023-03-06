import { Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { Colors } from '../../colors';
import ChevronRightIcon from '../../Icons/chevronRightIcon';
import GameContractLogo from '../../Icons/gameContractLogo';

export const GameContractCard = () => {
	return (
		<Flex
			w="100vw"
			h="80vh"
			p="50px 140px"
			display={['none', 'none', 'flex', 'flex']}
		>
			<Flex
				flexDirection="column"
				gridGap="50px"
				maxW="50%"
			>
				<GameContractLogo />
				<Text
					fontSize={['16px', '24px', '32px', '44px']}
					fontWeight="700"
					w="95%"
				>
					A digital cartridge factory that anyone can sell!
				</Text>
				<Text
					fontSize="20px"
					fontWeight="300"
					color={Colors.greyText}
					w="95%"
				>
					Create digital cartridges for your indie game or create a starterpack for your web3 game, set the
					price and sales rules. With the HashUp protocol, anyone can sell games that are on the protocol.
				</Text>
				<Link href="https://gamecontract.io/">
					<a target="_blank">
						<Flex gridGap="3px">
							<Flex
								bgColor={Colors.brandMain}
								fontSize="13px"
								fontWeight="600"
								p="12px 22px"
								borderRadius="0 0 0 18px"
								cursor="pointer"
							>
								Create Your Cartridges 3.0
							</Flex>
							<Flex
								bgColor={Colors.brandMain}
								opacity="0.6"
								p="12px"
								alignItems="center"
								cursor="pointer"
							>
								<ChevronRightIcon />
							</Flex>
						</Flex>
					</a>
				</Link>
			</Flex>

			<Image
				src="/assets/gameContractCard.png"
				position="absolute"
				right="0"
				w="50%"
			/>
		</Flex>
	);
};

export default GameContractCard;
