import { Flex, Text, Image } from '@chakra-ui/react';
import React from 'react';
import GameContractLogo from '../../Icons/gameContractLogo';
import MobileGameContractLogo from '../../Icons/mobileGameContractLogo';
import MobileGameXplorerLogoEcosystem from '../../Icons/mobileGameXplorerLogoEcosystem';
import PCLauncherMobileLogo from '../../Icons/pcLauncherMobileLogo';

export const MobileEcosystem = () => {
	return (
		<Flex justifyContent="center" direction="column" alignItems="center" pt="60px">
			<Flex direction="column" alignItems="center" gridGap="20px">
				<PCLauncherMobileLogo />
				<Text fontSize="20px" fontWeight="700" textAlign="center">
					PC Launcher with MetaMask and DRM!
				</Text>
				<Text fontSize="16px" fontWeight="300" textAlign="center" color="#9A9A9A">
					Our tool that allows you to download and play Web 2.0 and Web3 games on your computer. Your virtual
					gaming shelf is the HashUp PC Launcher!
				</Text>
				<Flex pt="18px">
					<Image src="assets/pcLauncherCard.png" />
				</Flex>
				<Flex pt="60px" justifyContent="center" direction="column" alignItems="center" gridGap="20px">
					<MobileGameXplorerLogoEcosystem />
					<Text fontSize="20px" fontWeight="700" textAlign="center">
						First blockchain explorer for the gamers!
					</Text>
					<Text fontSize="16px" fontWeight="300" textAlign="center" color="#9A9A9A">
						The future of social media. Create a stunning, customizable profile and take pride in your games
						collection. Know your friends’ items and get inspired by following influencers!
					</Text>
					<Flex pt="18px">
						<Image src="assets/gameXplorerCard.png" />
					</Flex>
				</Flex>
				<Flex pt="60px" justifyContent="center" direction="column" alignItems="center" gridGap="20px">
					<MobileGameContractLogo />
					<Text fontSize="20px" fontWeight="700" textAlign="center">
						Publish games independently without intermediares in 5 steps.
					</Text>
					<Text fontSize="16px" fontWeight="300" textAlign="center" color="#9A9A9A">
						Our goal is to make the process of publishing games as simple as possible. You can take your
						developer’s journey to the next level by publishing games on GameContract, eliminating
						intermediaries.
					</Text>
					<Flex pt="18px">
						<Image src="assets/gameContractCard.png" />
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default MobileEcosystem;
