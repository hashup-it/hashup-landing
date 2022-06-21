import { Flex, Text, Box, Image, Link, Button } from '@chakra-ui/react';
import React from 'react';
import SectionInfoButton from '../../../SectionLabel/sectionInfoButton';
import { Colors } from '../../../../colors';
import AppleLogo from '../../../../Icons/appleLogo';
import MicrosoftLogo from '../../../../Icons/microsoftLogo';
import HTMlLogo from '../../../../Icons/htmlLogo';
import RedCircleLauncher from '../../../../Icons/redCircleLauncher';
import GrayCircleLauncher from '../../../../Icons/grayCircleLauncher';
import { SocialMediaUrls } from '../../../../config';

export const LauncherApp = () => {
	return (
		<Flex
			justifyContent="space-between"
			position="relative"
			p={['80px 0px 0px 80px', '100px 0px 100px 210px', '100px 0px 100px 210px', '100px 0px 100px 210px']}
		>
			<Flex direction="column" justifyContent="flex-start" maxW={['80%', '60%', '40%', '40%']}>
				<Flex direction="column">
					<Flex maxW="90%">
						<SectionInfoButton label="LAUNCHER APP" />
					</Flex>
					<Flex
						pt="50px"
						fontSize={['24px', '32px', '40px', '40px']}
						fontWeight="600"
						lineHeight="110%"
						direction="column"
					>
						<Text>PC Launcher</Text>
						<Text>with Metamask</Text>
						<Text>
							and DRM<strong>.</strong>
						</Text>
					</Flex>
					<Flex pt="25px" pb="20px" display={['flex', 'flex', 'none', 'none']}>
						<Image src="./assets/mobileLauncherApp.png" />
					</Flex>
					<Box
						pt="50px"
						fontSize={['16px', '18px', '22px', '24px']}
						maxW={['100%', '100%', '100%', '85%']}
						fontWeight="500"
					>
						<Text as="span">
							{' '}
							Keep the games in the metamask. Download games. Trade games on our PC Launcher.{' '}
						</Text>
						<Text as="span" color={Colors.additional}>
							{' '}
							We're building a social media following based on owning games and everything related to
							them! The first PC Launcher for web2 and web3 games. Created by degens for gamers! Your
							virtual gaming shelf is the HashUp PC Launcher!
						</Text>
					</Box>
					<Flex pt="50px" alignItems="center" gridGap="23px">
						<MicrosoftLogo />
						<HTMlLogo />
						<AppleLogo />
					</Flex>
					<Flex direction="column" pt="40px">
						<Flex>
						<Link href={SocialMediaUrls.launcherLink} _hover={{active: 'none'}} >
							<Button
								_hover={{opacity: "0.8"}}
								fontWeight="700"
								fontSize="14px"
								w='198px'
								h='50px'
								p="15px"
								borderRadius="5px"
								bgColor={Colors.brandMain}
							>
								Download Launcher
							</Button>
						</Link>
						</Flex>
					</Flex>
				</Flex>
			</Flex>

			<Flex display={['none', 'none', 'flex', 'flex']} position="absolute" right="-250px" zIndex="2">
				<Image src="./assets/launcherApp1.png" />
			</Flex>
			<Flex display={['none', 'none', 'flex', 'flex']} position="absolute" bottom="40%" right="-100px" zIndex={1}>
				<RedCircleLauncher />
			</Flex>
			<Flex display={['none', 'none', 'flex', 'flex']} position="absolute" bottom="10%" left="45%" zIndex={1}>
				<GrayCircleLauncher />
			</Flex>
			<Flex
				display={['none', 'none', 'flex', 'flex']}
				position="absolute"
				top="50%"
				left="70%"
				zIndex={100}
				mb="100px"
			>
				<Image src="./assets/gameWallet.png" />
			</Flex>
		</Flex>
	);
};

export default LauncherApp;
