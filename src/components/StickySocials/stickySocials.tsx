import { Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { Socials } from './socials';

export const StickySocials = () => {
	return (
		<Flex
			flexDirection="column"
			transform="translateY(-50%)"
			gridGap="40px"
			position="fixed"
			top="50%"
			right="0"
			zIndex="100000"
			cursor="pointer"
			alignItems="center"
			p="10px"
			display={['none', 'none', 'flex', 'flex']}
		>
			{Socials.map((social) => (
				<Link href={social.link} key={social.link}>
					<a target="_blank">
						<Flex gridGap="0" _hover={{ opacity: '0.7' }}>
							{social.logo}
						</Flex>
					</a>
				</Link>
			))}
		</Flex>
	);
};

export default StickySocials;
