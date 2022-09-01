import { Box, Flex, SlideFade, Text } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import { Colors } from '../../colors';
import CommunityButtons from './communityButtons';
import CommunityInfo from './communityInfo';

export const Community = () => {
	const ref = useRef(null);
	const { inViewport, enterCount } = useInViewport(ref, {}, { disconnectOnLeave: false }, {});

	return (
		<>
			<Flex flexDirection="column" alignItems="center" bgColor="#0A0A0A" justifyContent="space-between">
				<Box h="1px" w="100vw" bgColor="white" opacity="0.1" />
				<SlideFade in={enterCount > 0} offsetY="100px">
					<Flex
						ref={ref}
						p="20px"
						fontSize="60px"
						color="#ffffff"
						fontWeight="700"
						mt="50px"
						justifyContent="center"
					>
						<Text textAlign="center" fontSize={['32px', '46px', '64px', '70px']}>
							{' '}
							Join the community<strong>!</strong>
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
							Be a part of the revolution in the game industry and join our growing community of game
							creators, innovators, and gamers!
						</Text>
					</Flex>
					<Flex
						justifyContent="center"
						gridGap="20px"
						mt="70px"
						mb="100px"
						direction={['column', 'column', 'row', 'row']}
						alignItems={{ base: 'center' }}
						cursor="pointer"
					>
						{CommunityInfo.map((element) => (
							<CommunityButtons key={element.link} {...element} />
						))}
					</Flex>
				</SlideFade>
				<Box h="1px" w="100vw" bgColor="white" opacity="0.1" />
			</Flex>
		</>
	);
};

export default Community;
