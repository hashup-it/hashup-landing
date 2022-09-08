import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { PolygonLongLogo } from '../../Icons/polygonLongLogo';

export const PolygonLabel = () => {
	return (
		<Flex position="fixed" zIndex="banner" top="10%" left="0" transform="rotate(180deg) translateY(-50%)">
			{/** Filler */}
			<Flex
				position="fixed"
				top="50%"
				left="0"
				transform="translateY(-50%)"
				borderRadius="8px 0px 0px 8px"
				direction="column-reverse"
			>
				<Flex
					bgColor="#242424"
					borderRadius="0px 0px 0px 8px"
					border="1px solid #2F2F2F"
					padding="12px"
					fontSize="9px"
					transform="skewY(15deg)"
					marginTop="-2em"
				>
					<Text
						lineHeight="10px"
						letterSpacing="0.1em"
						textTransform="uppercase"
						fontWeight="600"
						color="white"
						css={{
							'writing-mode': `vertical-rl`,
						}}
						transform="rotate(180deg)"
						filter="opacity(0)"
					>
						Powered byMM
					</Text>
				</Flex>
				<Box>
					<Flex
						bgColor="#7950DD"
						filter={`blur(14px)`}
						position="absolute"
						borderRadius="8px 0px 0px 0px"
						border="1px solid #845DE3"
						transform={`skewY(-15deg)`}
						padding="12px"
					>
						<PolygonLongLogo />
					</Flex>
					<Flex
						bgColor="#7950DD"
						borderRadius="8px 0px 0px 0px"
						border="1px solid #845DE3"
						transform={`skewY(-15deg)`}
						padding="12px"
					>
						<Box filter="opacity(0)">
							<PolygonLongLogo />
						</Box>
					</Flex>
				</Box>
			</Flex>
			{/** Content */}
			<Flex direction="column" zIndex="banner">
				<Box padding="12px">
					<PolygonLongLogo />
				</Box>
				<Box padding="12px">
					<Text
						lineHeight="10px"
						letterSpacing="0.1em"
						textTransform="uppercase"
						fontWeight="600"
						fontSize="9px"
						color="white"
						css={{
							'writing-mode': `vertical-rl`,
						}}
						transform="rotate(180deg)"
					>
						Powered by
					</Text>
				</Box>
			</Flex>
		</Flex>
	);
};
