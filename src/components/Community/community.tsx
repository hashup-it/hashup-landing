import { Box, Flex, SlideFade, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import { Colors } from '../../colors';
import DiscordIcon from '../../Icons/discordIcon';
import HashupLogo from '../../Icons/hashupLogo';
import LinkedinIcon from '../../Icons/linkedinIcon';
import TelegramIcon from '../../Icons/telegramIcon';
import TwitterIcon from '../../Icons/twitterIcon';
import CommunityButtons from './communityButtons';
import { ICommunityButtons } from './communityButtons';
import CommunityInfo from './communityInfo';

export const Community = () => {
	const ref = useRef(null);
	const { inViewport, enterCount } = useInViewport(ref, {}, { disconnectOnLeave: false }, {});

	return (
		<>
			<Flex flexDirection="column" alignItems="center" bgColor="#0A0A0A" justifyContent="space-between">
				<Box h="1px" w="100vw" bgColor="white" opacity="0.1" />
				<SlideFade in={enterCount > 0} offsetY="25vh">
					<Flex
						ref={ref}
						p="20px"
						fontSize="60px"
						color="#ffffff"
						fontWeight="700"
						mt="100px"
						justifyContent="center"
					>
						<Text> Join the community</Text>
						<Text color={Colors.brandMain} fontWeight="700">
							!
						</Text>
					</Flex>
					<Flex
						fontSize="20px"
						color={Colors.greyText}
						fontWeight="300"
						direction="column"
						alignItems="center"
					>
						<Text maxWidth="60vw" textAlign="center">
							Be the part of the revolution in the game industry and join our growing community of game
							creators, innovators, and gamers!
						</Text>
					</Flex>
					<Flex justifyContent="center" gridGap="20px" mt="70px" mb="100px">
						{CommunityInfo.map((element) => (
							<CommunityButtons {...element} />
						))}
					</Flex>
				</SlideFade>
				<Box h="1px" w="100vw" bgColor="white" opacity="0.1" />
			</Flex>
		</>
	);
};

export default Community;
