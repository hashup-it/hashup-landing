import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Colors } from '../../colors';
import HashupSingleLogo from '../../Icons/hashupSingleLogo';

interface IPhaseCard {
	isActive: boolean;
	image?: any;
	num: number;
	labelFirst: string;
	labelSecond: string;
	visible?: boolean;
}

export const PhaseCard: FC<IPhaseCard> = ({ isActive, image, num, labelFirst, labelSecond, visible }) => {
	return (
		<Flex>
			{isActive ? (
				<Flex
					borderRadius="0 50px 0 0"
					p="10px"
					position="relative"
					bgGradient="linear(180deg, rgba(255, 63, 63, 1), rgba(255, 63, 63, 0))"
					backdropFilter="blur(75px)"
				>
					<Flex
						bgColor="black"
						borderRadius="0 50px 0 0"
						w="calc(100% - 2px)"
						h="calc(100% - 2px)"
						position="absolute"
						top="1px"
						left="1px"
					/>
					<Flex
						bgColor={Colors.brandMain}
						borderRadius="50%"
						position="absolute"
						mt="-20px"
						mr="-10px"
						h="70px"
						w="70px"
						top="0"
						right="0"
						alignItems="center"
						justifyContent="center"
						zIndex="0"
					/>
					<Flex
						borderRadius="0 50px 0 0"
						flexDirection="column"
						color="white"
						alignItems="center"
						justifyContent="center"
						p="60px 0"
						gridGap="5px"
						zIndex="1"
						bgGradient="linear(180deg, rgba(255, 63, 63, 1), rgba(255, 63, 63, 0))"
						backdropFilter="blur(75px)"
						position="relative"
					>
						<Flex
							bgColor="#0b0b0b"
							bgGradient="linear(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.0018) 100%)"
							borderRadius="0 50px 0 0"
							w="calc(100% - 2px)"
							h="calc(100% - 2px)"
							position="absolute"
							top="1px"
							left="1px"
							zIndex="-1"
							flexDirection="column"
							alignItems="center"
							justifyContent="center"
							gridGap="10px"
						/>
						<HashupSingleLogo
							zIndex="10"
							h="50px"
							position="absolute"
							top="0"
							right="0"
							mt="-20px"
							mr="-10px"
						/>
						{/* <Text fontSize="26px" fontWeight="700">
							<strong>#</strong>
							{num}
						</Text>
						<Text fontWeight="700">{labelFirst}</Text>
						<strong>{labelSecond}</strong> */}
						{image}
					</Flex>
				</Flex>
			) : (
				<Flex
					opacity={visible ? '1' : '0.3'}
					flexDirection="column"
					color="white"
					alignItems="center"
					justifyContent="space-between"
					p="0px"
					gridGap="10px"
				>
					{/* <Text fontSize="26px" fontWeight="700">
						#{num}
					</Text>
					<Text>{labelFirst}</Text>
					{labelSecond} */}
					{image}
				</Flex>
			)}
		</Flex>
	);
};

export default PhaseCard;
