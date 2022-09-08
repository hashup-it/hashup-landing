import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';
import { Colors } from '../../colors';
import RightArrowIcon from '../../Icons/chevronRightIcon';

export interface ICommunityButtons {
	name: string;
	description: string;
	icon: React.ReactNode;
	size?: any;
	link: string;
}

export const CommunityButtons: FC<ICommunityButtons> = ({ name, description, icon, link }) => {
	return (
		<Link href={link} target="_blank">
			<Flex
				w={['85%', '75%', '20%', '20%']}
				h="142px"
				cursor="pointer"
				_hover={{ opacity: '0.8' }}
				alignItems="start"
				justifyContent="start"
				borderWidth="1px"
				borderColor={Colors.brandMain}
				bgColor="transparent"
				color="white"
				direction="column"
				padding="20px"
				borderRadius="4px"
				_first={{
					borderTopLeftRadius: '44px',
				}}
				_last={{
					borderBottomRightRadius: '34px',
				}}
			>
				<Flex direction="column" cursor="pointer">
					<Flex
						alignItems="center"
						gridGap="16px"
						cursor="pointer"
						fontSize="32px"
						fontWeight="400"
						lineHeight="160%"
					>
						<Flex gridGap="12px" alignItems="center">
							{icon}
							<Text color="white">{name}</Text>
						</Flex>
						<RightArrowIcon />
					</Flex>
				</Flex>
				<Text color={Colors.subGrey} fontSize="12px" fontWeight="400" lineHeight="140%">
					{description}
				</Text>
			</Flex>
		</Link>
	);
};

export default CommunityButtons;
