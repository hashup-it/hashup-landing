import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import RedTriangleIcon from '../../../Icons/redTriangleIcon';
import HeaderMainButtons from './headerMainButtons';

export const HeaderMain = () => {
	return (
		<Flex
			flexDirection="column"
			w="100%"
			alignItems="center"
			zIndex="10"
			justifyContent="center"
			gridGap="32px"
			height="100%"
			/** Mobile-fixup */
			mt={{ base: '73px', lg: '0' }}
		>
			<Flex fontSize={{ base: '12px', lg: '15px' }} fontWeight="600" color="white" gridGap="4px" display={{}}>
				<RedTriangleIcon mt="-5px" />
				Content Providing Protocol to your <strong>Marketplace</strong>
				<RedTriangleIcon transform="rotate(3deg)" mt="15px" />
			</Flex>
			<Flex
				flexDirection="column"
				fontSize={{ base: '38px', lg: '80px' }}
				fontWeight="800"
				color="white"
				gridGap="-40px"
				textAlign="center"
				alignItems="center"
				lineHeight="100%"
			>
				<Flex display={['none', 'none', 'flex', 'flex']}>Protocol and</Flex>
				<Flex display={['none', 'none', 'flex', 'flex']}>infrastructure for</Flex>
				<Flex display={['none', 'none', 'flex', 'flex']}>
					<strong style={{marginLeft: '10px'}}>Gaming </strong>3.0
					<strong>.</strong>
				</Flex>
				<Flex display={['flex', 'flex', 'none', 'none']}>
					<Text>
						{' '}
						Protocol and infrastructure for <strong>gaming</strong> marketplaces<strong>.</strong>
					</Text>
				</Flex>
			</Flex>
			<HeaderMainButtons />
		</Flex>
	);
};

export default HeaderMain;
