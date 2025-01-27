import React from 'react';
import { Flex, Link, Text } from '@chakra-ui/react';

export const PlatformsFooter = () => {
	return (
		<Flex
			direction="column"
			fontSize="12px"
		>
			<Text
				color="#6D6D6D"
				fontWeight="600"
			>
				PLATFORMS
			</Text>
			<Flex
				mt="10px"
				mb="23px"
				gridGap="9px"
				direction="column"
				fontWeight="400"
				fontSize="13px"
				color="white"
			>
				<Link
					href="https://explorer.hashup.it/"
					_hover={{ opacity: '0.6' }}
				>
					<Text>GameXplorer</Text>
				</Link>
				<Link
					href="https://contract.hashup.it/"
					_hover={{ opacity: '0.6' }}
				>
					<Text>GameContract</Text>
				</Link>
				<Link
					href="https://wiki.hashup.it/get-started/pc-launcher"
					_hover={{ opacity: '0.6' }}
				>
					<Text>PC Launcher</Text>
				</Link>
			</Flex>
		</Flex>
	);
};

export default PlatformsFooter;
