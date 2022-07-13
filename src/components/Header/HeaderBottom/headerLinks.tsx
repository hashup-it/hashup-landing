import { Flex, Text, Link } from '@chakra-ui/react';
import React from 'react';
import { Colors } from '../../../colors';
import PlayVideo from './playVideo';
import Whitepaper from './whitepaper';

export const HeaderLinks = () => {
	return (
		<Flex gridGap="24px" alignItems="center">
			<Link href="https://cdn.hashup.it/hashup-whitepaper-eng.pdf" _hover={{ opacity: '0.5' }}>
				<Whitepaper />
			</Link>
			{/* <Flex fontSize="14px" fontWeight="600" color="white" cursor="pointer">
        Media<strong>.</strong>
      </Flex> */}
			<Link href="https://hashup.gitbook.io/hashup-whitepaper/" _hover={{ opacity: '0.5' }}>
				<Flex fontSize="14px" fontWeight="600" color="white" cursor="pointer">
					Docs<strong>.</strong>
				</Flex>
			</Link>
			<PlayVideo />
		</Flex>
	);
};

export default HeaderLinks;
