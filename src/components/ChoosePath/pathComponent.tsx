import { Box, Flex, Text } from '@chakra-ui/react';
import Lottie from 'lottie-web';
import Link from 'next/link';
import React, { Suspense, useEffect, useRef } from 'react';
import { Colors } from '../../colors';
import ArrowRightIcon from '../../Icons/arrowRightIcon';
import ChevronRightIcon from '../../Icons/chevronRightIcon';

export interface IPathComponents {
	link: string;
	topText: string;
	name: string;
	description: string;
	path: string;
}

export const PathComponent = ({ link, topText, name, description, path }) => {
	const element = useRef<HTMLDivElement>(null);

	useEffect(() => {
		Lottie.loadAnimation({
			path: path,
			renderer: 'svg',
			autoplay: true,
			container: element.current,
			loop: true,
			rendererSettings: { progressiveLoad: false },
		});
		Lottie.setQuality(20);
	}, [element.current]);

	return (
		<Flex
			w={["100%", "90%", "85%", "33%"]}
			marginTop="90px"
			p="60px"
			zIndex="10"
			direction="column"
			position="relative"
			borderRadius="10px"
			bg="linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(10, 10, 10, 0) 100%)"
			transition="0.01s"
			_hover={{lg: {
				bg: 'linear-gradient(0deg, rgba(255, 255, 255, 0.1) 0%, rgba(10, 10, 10, 0) 100%)',
				transform: 'rotateX(360deg)',
			}}}
		>
			<Flex w="100%" h="100%" gridGap="3px" direction="column">
				<Flex
					ref={element}
					position="absolute"
					top="0"
					left="60%"
					transform="translate(-50%, -35%)"
					w="265px"
					h="265px"
					zIndex="0"
				/>
				<Text fontSize="16px" color="white">
					{topText}
				</Text>
				<Text fontSize={["46px", "52px", "54px", "56px"]} color="white" fontWeight="700" zIndex="2">
					{name}
				</Text>
			</Flex>
			<Flex paddingTop="15px">
				<Box bgColor={Colors.brandMain} w="30px" h="6px" />
			</Flex>
			<Flex paddingTop="22px">
				<Text fontSize="16px" fontWeight="300" lineHeight="180%" color={Colors.greyText}>
					{description}
				</Text>
			</Flex>
			<Flex gridGap="6px" paddingTop="30px">
				<Link href={link}>
					<Flex
						bgColor={Colors.brandMain}
						color="white"
						borderRadius="0px 0px 0px 14px"
						p="8px 13px"
						fontSize="14"
						alignItems="center"
						fontWeight="600"
						cursor="pointer"
					>
						Learn more
					</Flex>
				</Link>
				<Link href={link}>
					<Flex bgColor={'#9A2727'} alignItems="center" p="15px" cursor="pointer">
						<ChevronRightIcon />
					</Flex>
				</Link>
			</Flex>
		</Flex>
	);
};

export default PathComponent;
