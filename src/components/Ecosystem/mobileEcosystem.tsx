import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import MobileGameContractLogo from '../../Icons/mobileGameContractLogo';
import MobileGameXplorerLogoEcosystem from '../../Icons/mobileGameXplorerLogoEcosystem';
import PCLauncherMobileLogo from '../../Icons/pcLauncherMobileLogo';

export const launcherString = `PC Launcher makes sure that your game files are up to date. It allows you to publish Indie, AAA and Web3 Games outside the browser and inject blockchain into your games. Upgrade your web3 store by adding PC Launcher and sell all your games from HashUp protocol earning up to 90%!`;

export const MobileEcosystem = () => {
	return (
		<Flex
			justifyContent="center"
			direction="column"
			alignItems="center"
			pt="60px"
		>
			<Flex
				direction="column"
				alignItems="center"
				gridGap="20px"
			>
				<PCLauncherMobileLogo />
				<Text
					fontSize="20px"
					fontWeight="700"
					textAlign="center"
				>
					PC Launcher 3.0
				</Text>
				<Text
					fontSize="16px"
					fontWeight="300"
					textAlign="center"
					color="#9A9A9A"
				>
					{launcherString}
				</Text>
				<Flex pt="18px">
					<Image src="/assets/pcLauncherCard.png" />
				</Flex>
				<Flex
					pt="60px"
					justifyContent="center"
					direction="column"
					alignItems="center"
					gridGap="20px"
				>
					<MobileGameXplorerLogoEcosystem />
					<Text
						fontSize="20px"
						fontWeight="700"
						textAlign="center"
					>
						First blockchain explorer for the gamers!
					</Text>
					<Text
						fontSize="16px"
						fontWeight="300"
						textAlign="center"
						color="#9A9A9A"
					>
						The future of social media. Create a stunning, customizable profile and take pride in your games
						collection. Know your friends’ items and get inspired by following influencers!
					</Text>
					<Flex pt="18px">
						<Image src="/assets/gameXplorerCard.png" />
					</Flex>
				</Flex>
				<Flex
					pt="60px"
					justifyContent="center"
					direction="column"
					alignItems="center"
					gridGap="20px"
				>
					<MobileGameContractLogo />
					<Text
						fontSize="20px"
						fontWeight="700"
						textAlign="center"
					>
						Publish games independently without intermediares in 5 steps.
					</Text>
					<Text
						fontSize="16px"
						fontWeight="300"
						textAlign="center"
						color="#9A9A9A"
					>
						Our goal is to make the process of publishing games as simple as possible. You can take your
						developer’s journey to the next level by publishing games on GameContract, eliminating
						intermediaries.
					</Text>
					<Flex pt="18px">
						<Image src="/assets/gameContractCard.png" />
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default MobileEcosystem;
