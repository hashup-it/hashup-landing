import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import { Colors } from '../../colors';
import ChevronRightIcon from '../../Icons/chevronRightIcon';
import PCLauncherLogo from '../../Icons/pcLauncherLogo';
import { launcherString } from './mobileEcosystem';

export const PCLauncherCard = () => {
	return (
		<Flex w="100vw" h="80vh" p="50px 140px" display={['none', 'none', 'flex', 'flex']}>
			<Flex flexDirection="column" gridGap="50px">
				<PCLauncherLogo />
				<Text fontSize="44px" fontWeight="700" w="50%">
					PC Launcher 3.0
				</Text>
				<Text fontSize="20px" fontWeight="300" color={Colors.greyText} w="35%">
					{launcherString}{' '}
				</Text>
				<Flex gridGap="3px">
					<a href='https://wiki.hashup.it/get-started/pc-launcher'>
					<Flex
						bgColor={Colors.brandMain}
						fontSize="13px"
						fontWeight="600"
						p="12px 22px"
						borderRadius="0 0 0 18px"
						cursor="pointer"
					>
						Use PC Launcher
					</Flex>
					</a>
					<Flex bgColor={Colors.brandMain} opacity="0.6" p="12px" alignItems="center" cursor="pointer">
						<ChevronRightIcon />
					</Flex>
				</Flex>
			</Flex>
			<Image src="/assets/pcLauncherCard.png" position="absolute" right="0" w="50%" />
		</Flex>
	);
};

export default PCLauncherCard;
