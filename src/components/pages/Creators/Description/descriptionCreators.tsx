import React, { useRef } from 'react';
import { Flex, SlideFade, Text } from '@chakra-ui/react';
import HashupUnionLogo from '../../../../Icons/hashupUnionLogo';
import RedTriangleIcon from '../../../../Icons/redTriangleIcon';
import { Colors } from '../../../../colors';
import { useInViewport } from 'react-in-viewport';

export const DescriptionCreators = () => {
	const ref = useRef(null);
	const { enterCount } = useInViewport(ref, {}, { disconnectOnLeave: false }, {});

	return (
		<>
			<SlideFade in={enterCount > 0} offsetY="100px">
				<Flex alignItems="center" justifyContent="center" direction="column" position="relative" ref={ref}>
					<Flex position="absolute">
						<HashupUnionLogo />
					</Flex>
					<Flex
						fontSize={['24px', '32px', '64px', '70px']}
						maxW={['100%', '100%', '80%', '80%']}
						textAlign="center"
						fontWeight="700"
						lineHeight="100%"
						gridGap="-20px"
					>
						<Flex>
							<RedTriangleIcon
								mt="-50px"
								transform="rotate(160deg)"
								h={['31px', '31px', '62px', '62px']}
								w={['22px', '22px', '45px', '45px']}
							/>
						</Flex>
						<Text>
							HashUp is the easiest way to get into Web3.0<strong>.</strong>
						</Text>
						<Flex position="relative" left="-10%" marginTop={['40px', '130px']}>
							<RedTriangleIcon
								mt={{ base: '25px' }}
								transform="rotate(-15deg)"
								position="absolute"
								h={['31px', '31px', '62px', '62px']}
								w={['22px', '22px', '45px', '45px']}
							/>
						</Flex>
					</Flex>
				</Flex>
			</SlideFade>
		</>
	);
};

export default DescriptionCreators;
