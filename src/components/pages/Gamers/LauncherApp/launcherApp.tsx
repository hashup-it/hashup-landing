import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';
import SectionInfoButton from '../../../SectionLabel/sectionInfoButton';
import { Colors } from '../../../../colors';
import AppleLogo from '../../../../Icons/appleLogo';
import MicrosoftLogo from '../../../../Icons/microsoftLogo';
import HTMlLogo from '../../../../Icons/htmlLogo';
import RedCircleLauncher from '../../../../Icons/redCircleLauncher';
import GrayCircleLauncher from '../../../../Icons/grayCircleLauncher';
import { SocialMediaUrls } from '../../../../config';
import { launcherString } from '../../../Ecosystem/mobileEcosystem';

export const LauncherApp = () => {
	return (
		<Flex
			justifyContent="space-between"
			position="relative"
			p={['130px 0px 100px 50px', '200px 0px 100px 210px', '200px 0px 100px 210px', '200px 0px 25% 210px']}
		>
			<Flex direction="column" justifyContent="flex-start" maxW={['90%', '80%', '40%', '40%']}>
				<Flex direction="column">
					<Flex maxW="90%">
						<SectionInfoButton label="PC LAUNCHER" />
					</Flex>
					<Flex
						pt="50px"
						fontSize={['24px', '32px', '40px', '40px']}
						fontWeight="600"
						lineHeight="110%"
						direction="column"
					>
						<Text>PC Launcher</Text>
						<Text>with MetaMask</Text>
						<Text>
							and DRM<strong>.</strong>
						</Text>
					</Flex>
					<Flex pt="25px" pb="20px" display={['flex', 'flex', 'none', 'none']}>
						<Image src="/assets/mobileLauncherApp.png" />
					</Flex>
					<Box
						pt="50px"
						fontSize={['16px', '18px', '22px', '24px']}
						maxW={['100%', '100%', '100%', '85%']}
						fontWeight="500"
					>
						<Text as="span">
							{' '}
							{launcherString}
						</Text>
						<Text as="span" color={Colors.additional}>
							{' '}
							Get ready for the next bull with HashUp!
						</Text>
					</Box>
					<Flex pt="50px" alignItems="center" gridGap="23px" justifyContent="flex-start">
						<MicrosoftLogo />
						<HTMlLogo />
						<Flex
							borderRadius="9px"
							borderColor="#232323"
							borderWidth="1px"
							alignItems="center"
							justifyContent="center"
							p="11px 17px"
							gridGap="13px"
						>
							<AppleLogo />
							<Text fontSize="15px" fontWeight="500" color="#6B6969">
								SOON
							</Text>
						</Flex>
					</Flex>
					<Flex direction="column" pt="40px">
						<Flex>
							<Link href={"https://calendly.com/ceohashup"} _hover={{ active: 'none' }}>
								<Button
									_hover={{ opacity: '0.8' }}
									fontWeight="700"
									fontSize="14px"
									w="198px"
									h="50px"
									p="15px"
									borderRadius="5px"
									bgColor={Colors.brandMain}
								>
									Book a call with us!
								</Button>
							</Link>
						</Flex>
					</Flex>
				</Flex>
			</Flex>

			<Flex display={['none', 'none', 'flex', 'flex']} position="absolute" right="-250px" zIndex="2">
				<Image src="/assets/launcherApp1.png" />
			</Flex>
			<Flex display={['none', 'none', 'flex', 'flex']} position="absolute" bottom="40%" right="-100px" zIndex={1}>
				<RedCircleLauncher />
			</Flex>
			<Flex display={['none', 'none', 'flex', 'flex']} position="absolute" bottom="10%" left="45%" zIndex={1}>
				<GrayCircleLauncher />
			</Flex>
			<Flex display={['none', 'none', 'flex', 'flex']} position="absolute" top="44%" left="70%" zIndex={100}>
				<Image src="/assets/gameWallet.png" />
			</Flex>
		</Flex>
	);
};

export default LauncherApp;
