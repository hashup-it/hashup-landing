import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';

export interface ISocialIconType {
	iconUrl: React.ReactNode;
	linkUrl: string;
}

export const SocialIcon: FC<ISocialIconType> = ({ iconUrl, linkUrl }) => {
	return (
		<a href={linkUrl}>
			<Flex
				boxSize="33px"
				border="1px solid"
				borderColor="rgba(255, 255, 255, 0.3)"
				borderRadius="40px"
				align="center"
				justify="center"
				cursor="pointer"
				_hover={{ borderColor: 'white' }}
			>
				{iconUrl}
			</Flex>
		</a>
	);
};

export default SocialIcon;
