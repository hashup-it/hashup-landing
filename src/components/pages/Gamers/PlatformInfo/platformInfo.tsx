import { Box, Flex, Link, Text } from '@chakra-ui/react';
import React, { useRef } from 'react';
import GameXplorerLogo from '../../../../Icons/gameXplorerLogo';
import PlayVideoIcon from '../../../../Icons/playVideoIcon';
import SectionInfoButton from '../../../SectionLabel/sectionInfoButton';
import { Colors } from '../../../../colors';
import ChevronRightIcon from '../../../../Icons/chevronRightIcon';
import { HashPadSroll } from './hashPadSroll';
import MobileGameXplorerLogo from '../../../../Icons/mobileGameXplorerLogo';

export const PlatformInfo = () => {
	const ref = useRef(null!);
	const inputRef = useRef(null!);

	return (
		<Flex
			direction="column"
			justifyContent="flex-start"
			alignItems={{ base: 'center', lg: 'flex-start' }}
		>
			<Flex
				direction="column"
				p={['20px', '20px', '0px 0px 0px 150px', '0px 0px 0px 150px']}
				alignItems={{ base: 'center', lg: 'flex-start' }}
			>
				<Flex maxW={['100%', '100%', '20%', '20%']}>
					<SectionInfoButton label="PLATFORM" />
				</Flex>
				<Flex
					direction="column"
					fontSize={['28px', '32px', '64px', '70px']}
					fontWeight="700"
					pt="46px"
					gridGap="-40px"
					lineHeight="110%"
					zIndex="1"
					textAlign={{ base: 'center', lg: 'left' }}
				>
					{/* <Text>Fina</Text>
					<Text>for gamers and game</Text>
					<Text>
						developers<strong>.</strong>
					</Text> */}
				</Flex>
			</Flex>
			<Flex
				direction="column"
				position="relative"
			>
				<Flex
					pt="-30px"
					ref={inputRef}
				>
					<HashPadSroll />
				</Flex>
				<Flex
					position="absolute"
					top="50%"
					justifyContent={['center', 'center', 'space-between', 'space-between']}
					direction={['column', 'column', 'column', 'row']}
					alignItems="center"
					p={['30px 0px 0px 0px', '40px 80px 0 px 40px', '40px 220px 0px 220px', '40px 220px 0px 220px']}
					gridGap={['50px', '100px', '120px', '150px']}
					zIndex="10"
				>
					<Flex
						direction="column"
						justifyContent={['center', 'center', 'flex-start', 'flex-start']}
						gridGap="50px"
						alignItems={['center', 'center', 'flex-start', 'flex-start']}
					>
						<Flex display={['none', 'none', 'flex', 'flex']}>
							<GameXplorerLogo />
						</Flex>
						<Flex display={['flex', 'flex', 'none', 'none']}>
							<MobileGameXplorerLogo />
						</Flex>
						<Box
							fontSize={['14px', '18px', '22px', '26px']}
							fontWeight="500"
							maxW={['85%', '90%', 'none', 'none']}
							textAlign={{ base: 'center', lg: 'left' }}
						>
							<Text as="span">
								More and more games are appearing on the HashUp protocole. Search the best ones and add
								them to your store. The HashUp protocol is a great store for games that ANYONE can sell!
								The developers decide how much money you make as a store!
							</Text>
							<Text
								color="#A1A1A6"
								as="span"
							>
								{' '}
							</Text>
						</Box>
						<Link
							href="https://gamexplorer.io/"
							target="_blank"
							zIndex="2"
							_hover={{ active: 'none' }}
						>
							<Flex
								gridGap="3px"
								justifyContent="flex-start"
								zIndex="2"
								cursor="pointer"
								_hover={{ opacity: '0.8' }}
							>
								<Flex
									zIndex="10000"
									bgColor={Colors.brandMain}
									color="white"
									cursor="pointer"
									borderRadius="0px 0px 0px 14px"
									p="8px 13px"
									fontSize="14px"
									alignItems="center"
									fontWeight="600"
								>
									Go to GameXplorer
								</Flex>
								<Flex
									bgColor={'#9A2727'}
									alignItems="center"
									p="15px"
								>
									<ChevronRightIcon />
								</Flex>
							</Flex>
						</Link>
					</Flex>

					<Flex
						gridGap={['20px', '30px', '40p', '40px']}
						alignItems={['center', 'center', 'flex-start', 'flex-start']}
						justifyContent={['center', 'center', 'flex-start', 'flex-start']}
						direction={['column', 'column', 'row', 'row']}
					>
						<Text
							fontSize={['22px', '32px', '42px', '50px']}
							fontWeight="600"
						>
							How does our platform work<strong>?</strong>
						</Text>
						<PlayVideoIcon
							height="66px"
							cursor="pointer"
							_hover={{ opacity: '0.8' }}
						/>
					</Flex>
				</Flex>
			</Flex>
			<Flex
				direction="column"
				justifyContent="flex-start"
			>
				<Flex
					direction="column"
					p={['450px 0px 0px 50px', '300px 0px 0px 210px', '300px 0px 0px 210px', '300px 0px 0px 210px']}
					zIndex="1"
				>
					<Flex
						pt="100px"
						maxW="25%"
						right={{ sm: '80%' }}
					>
						<SectionInfoButton label="LICENSES 3.0" />
					</Flex>
					<Flex
						pt="50px"
						maxW={['100%', '100%', '70%', '70%']}
						fontSize={['24px', '32px', '64px', '70px']}
						fontWeight="600"
						lineHeight="110%"
						direction="column"
					>
						<Text>Add games from HashUp</Text>
						<Text>to your marketplace!</Text>
					</Flex>
					<Box
						pt="50px"
						fontSize={['16px', '18px', '22px', '26px']}
						maxW={['90%', '60%', '50%', '50%']}
						fontWeight="500"
					>
						<Text as="span">
							{' '}
							HashUp allows publishing web2 and web3 games using blockchain technology. HashUp's
							infrastructure reduces the cost of creating a real gaming marketplace to zero!
						</Text>
						<Text
							pt="50px"
							color="white"
						>
							{' '}
							Sell with HashUp today!
						</Text>
					</Box>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default PlatformInfo;
