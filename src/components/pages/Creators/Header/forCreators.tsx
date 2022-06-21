import { Flex, Text, Box, SlideFade } from '@chakra-ui/react';
import React, { useRef } from 'react';
import RedTriangleIcon from '../../../../Icons/redTriangleIcon';
import { Colors } from '../../../../colors';
import { useInViewport } from 'react-in-viewport';
import MobileSlider from './mobileSlider';

export const ForCreators = () => {
	const ref = useRef(null);
	const { enterCount } = useInViewport(ref, {}, { disconnectOnLeave: false }, {});

	return (
		<Flex
			flexDirection="column"
			pt="80px"
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
					<RedTriangleIcon w="" mt="-5px" />
					For Creators
					<RedTriangleIcon transform="rotate(3deg)" mt="15px" />
				</Flex>
			</Flex>
			<Flex
				flexDirection="column"
				fontSize={{base: '38px', lg: "80px"}}
				fontWeight="800"
				color="white"
				gridGap="-40px"
				alignItems="center"
				lineHeight="100%"
			>
				<Flex alignItems="center" maxW="90%" textAlign="center">
					<Text>
						Create digital cartridges of your games just like in the 80s<strong>.</strong>
					</Text>
				</Flex>
			</Flex>
			<Flex display={['flex', 'flex', 'none', 'none']}>
					<MobileSlider />
				</Flex>
			<Flex justifyContent="space-between" fontSize="24px" fontWeight="400" gridGap="106px" pt="40px" pb="30px" display={['none', 'none', 'flex', 'flex']}>
				<Flex justifyContent="flex-start" lineHeight="120%" direction="column" textAlign="center">
					<Text>
						Did you know that{' '}
						<Text as="span" color={Colors.brandMain}>
						you can
						</Text>
						<Text color={Colors.brandMain}>
						release a game on web3
						</Text>
						<Text>in 10 minutes?</Text>
					</Text>
				</Flex>
				<Flex justifyContent="flex-start" lineHeight="120%" direction="column"  alignItems='center' textAlign="center">
				<Text>
						Did you know that{' '}
						<Text as="span" color={Colors.brandMain}>
						you  
						</Text>
						<Text color={Colors.brandMain}>
						earn royalties on each
						</Text>
						<Text>game exchange?</Text>
					</Text>
				</Flex>
				<Flex justifyContent="flex-start" lineHeight="120%" direction="column" textAlign="center" alignItems='ce'>
				<Text>
						Did you know that{' '}
						<Text as="span" color={Colors.brandMain}>
						you can
						</Text>
						<Text color={Colors.brandMain}>
						 decide on the HashUp
						</Text>
						<Text as="span" color={Colors.brandMain}>
						platform{" "}
						</Text>
						<Text as="span" >with $HASH?</Text>
					</Text>
				</Flex>
			</Flex>
			<Flex
				borderRadius="5"
				zIndex="2"
				p="17px 22px"
				fontSize="14px"
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
					left: '50%',
					filter: 'blur(35px)',
				}}
			>
				<Text zIndex="4">Publish your game</Text>
			</Flex>
			<SlideFade in={enterCount > 0} offsetY="20vh">
				<Box mt="80px" mb="80px" w="1px" h="100px" bgColor={Colors.brandMain} ref={ref} pt={{base: '-200px'}} />
			</SlideFade>
		</Flex>
	);
};

export default ForCreators;
