import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { Colors } from '../../../colors';
import PlayVideoIcon from '../../../Icons/playVideoIcon';

export const PlayVideo = () => {
	return (
		<Link href="https://www.youtube.com/watch?v=cB9kHbsOwaQ">
			<a target="_blank">
				<Flex
					alignItems="center"
					gridGap="11px"
					fontSize="14px"
					fontWeight="600"
					color="white"
					cursor="pointer"
				>
					<PlayVideoIcon
						cursor="pointer"
						_hover={{ opacity: '0.8' }}
						height="31px"
					/>{' '}
					Play Video
					<Text color={Colors.brandMain}></Text>
				</Flex>
			</a>
		</Link>
	);
};

export default PlayVideo;
