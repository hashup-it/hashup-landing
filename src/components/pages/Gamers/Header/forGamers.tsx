import { Box, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';
import RedTriangleIcon from '../../../../Icons/redTriangleIcon';
import { Colors } from '../../../../colors';

export const ForGamers = () => {
	return (
		<Flex
			flexDirection="column"
			mt="100px"
			w="100%"
			alignItems="center"
			zIndex="10"
			justifyContent="center"
			gridGap="32px"
			position="absolute"
			h="100vh"
		>
			<Flex justifyContent="space-between" alignItems="center" gridGap="48px">
				<Flex gridGap="10px" fontWeight="600">
					<RedTriangleIcon mt="-5px" />
					For Gamers
					<RedTriangleIcon transform="rotate(3deg)" mt="15px" />
				</Flex>
			</Flex>
			<Flex
				flexDirection="column"
				fontSize={{ base: '38px', lg: '90px' }}
				fontWeight="700"
				color="white"
				gridGap="-40px"
				alignItems="center"
				lineHeight="100%"
			>
				<Flex alignItems="center" maxW="70%" textAlign="center">
					<Text>
						{' '}
						Video Games Marketplace with Digital Cartridges<strong>.</strong>
					</Text>
				</Flex>
			</Flex>
			<Text fontSize={['18px', '28px']} fontWeight="300" pt="32px" textAlign="center">
				Web2 games on Web3.
			</Text>
			<Flex
				gridGap="12px"
				alignItems="center"
				justifyContent="center"
				direction={['column', 'column', 'row', 'row']}
			>
				<Link href="https://gamexplorer.io/" _hover={{ active: 'none' }}>
					<Flex
						_hover={{ opacity: '0.8' }}
						borderRadius="5"
						zIndex="2"
						fontSize="14px"
						w="198px"
						alignItems="center"
						justifyContent="center"
						h="50px"
						bgColor={Colors.brandMain}
						fontWeight="700"
						color="white"
						_after={{
							content: '""',
							zIndex: '0',
							bgColor: 'red',
							width: '121px',
							height: '35px',
							position: 'absolute',
							transform: 'translate(-50%, 30%)',
							left: '45%',
							filter: 'blur(35px)',
						}}
					>
						<Text zIndex="4">Run GameXplorer</Text>
					</Flex>
				</Link>
				<Link href="https://dl.patchkit.net/d/3sxi7923gq5eccqh7tlzo/direct" _hover={{ active: 'none' }}>
					<Flex
						borderRadius="5"
						w="198px"
						cursor="pointer"
						alignItems="center"
						justifyContent="center"
						_hover={{ opacity: '0.8' }}
						h="50px"
						borderWidth="2px"
						borderColor={Colors.brandMain}
						color="white"
						fontWeight="700"
						fontSize="14px"
					>
						<Text zIndex="4">Download Launcher</Text>
					</Flex>
				</Link>
			</Flex>

			<Box m="60px 0" w="1px" h="200px" bgColor={Colors.brandMain} />
		</Flex>
	);
};

export default ForGamers;
