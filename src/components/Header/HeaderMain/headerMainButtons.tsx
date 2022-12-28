import { Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { Colors } from '../../../colors';
import ChevronRightIcon from '../../../Icons/chevronRightIcon';

export const HeaderMainButtons = () => {
	return (
		<Flex gridGap="31px" mt="40px" alignItems="center" direction={['column', 'column', 'row', 'row']}>
			<Link href="https://dl.patchkit.net/d/3sxi7923gq5eccqh7tlzo/direct" _hover={{ opacity: '0.5' }}>
				<Flex
					bgColor={Colors.brandMain}
					w="200px"
					h="70px"
					borderRadius="0 0 0 25px"
					p="12px 19px"
					alignItems="center"
					justifyContent="space-between"
					cursor="pointer"
					transition="ease 0.2s"
				>
					<Flex flexDirection="column">
						<Text fontSize="15px" fontWeight="500" color="black">
							Download
						</Text>
						<Text fontSize="18px" fontWeight="600" color="white">
							PC Launcher
						</Text>
					</Flex>
					<ChevronRightIcon />
				</Flex>
			</Link>

			<Link href="https://wiki.hashup.it/" _hover={{ opacity: '0.5' }}>
				<Flex
					bgColor={Colors.brandMain}
					w="200px"
					h="70px"
					borderRadius="0 0 0 0px"
					p="12px 19px"
					alignItems="center"
					justifyContent="space-between"
					cursor="pointer"
					transition="ease 0.2s"
				>
					<Flex flexDirection="column">
						<Text fontSize="15px" fontWeight="500" color="black">
							Connect
						</Text>
						<Text fontSize="18px" fontWeight="600" color="white">
							and Sell!
						</Text>
					</Flex>
					<ChevronRightIcon />
				</Flex>
			</Link>


			<Link href="https://gamexplorer.io/" _hover={{ opacity: '0.5' }} target="_blank">
				<Flex
					bgColor="#00000080"
					w="200px"
					h="70px"
					borderRadius="0 25px 0 0"
					border={`1px solid ${Colors.brandMain}`}
					p="12px 19px"
					alignItems="center"
					justifyContent="space-between"
					cursor="pointer"
					transition="ease 0.2s"
				>
					<Flex flexDirection="column">
						<Text fontSize="15px" fontWeight="500" color="white">
							Go to
						</Text>
						<Text fontSize="18px" fontWeight="600" color={Colors.brandMain}>
							GameXplorer
						</Text>
					</Flex>
					<ChevronRightIcon />
				</Flex>
			</Link>
		</Flex>
	);
};

export default HeaderMainButtons;
