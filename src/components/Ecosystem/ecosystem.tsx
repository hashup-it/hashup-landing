import { Flex, SlideFade, Text } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { Colors } from '../../colors';
import SectionInfoButton from '../SectionLabel/sectionInfoButton';
import GameContractCard from './gameContractCard';
import GameXplorerCard from './gameXplorerCard';
import PlatformTile from './platformTile';
import PCLauncherCard from './pcLauncherCard';
import { useInViewport } from 'react-in-viewport';
import MobileEcosystem from './mobileEcosystem';

export const Ecosystem = () => {
	const [activePlatform, setActivePlatform] = useState<number>(0);

	const Platforms = [
		{
			element: <PCLauncherCard />,
		},
		{
			element: <GameXplorerCard />,
		},
		{
			element: <GameContractCard />,
		},
	];

	const ref = useRef(null);
	const { enterCount } = useInViewport(ref, {}, { disconnectOnLeave: false }, {});

	return (
		<Flex
			flexDirection="column"
			pt="100px"
			gridGap="30px"
			alignItems="center"
			mb={['0px', '0px', '100px', '100px']}
		>
			<SectionInfoButton label="HASHUP PLATFORMS" />
			<SlideFade
				in={enterCount > 0}
				offsetY="100px"
			>
				<Flex
					direction="column"
					alignItems="center"
					maxW={['75vw', '75vw', '43vw', '43vw']}
					ref={ref}
				>
					<Text
						fontSize={['32px', '46px', '64px', '70px']}
						fontWeight="700"
					>
						Our Ecosystem<strong>.</strong>
					</Text>
					<Text
						fontSize="18px"
						fontWeight="300"
						lineHeight="170%"
						color={Colors.greyText}
						textAlign="center"
					>
						In creating our ecosystem, we modeled it after the physical game distribution of the 1990s.
						Create a cartridge in the GameContract.HashUp.it factory, send it to the warehouse (the HashUp
						protocol), and any store can download games from the warehouse and sell them (by connecting to
						protocol)!
					</Text>
					<Flex display={['flex', 'flex', 'none', 'none']}>
						<MobileEcosystem />
					</Flex>
					<Flex
						gridGap={['10px', '20px', '30px', '30px']}
						mt="50px"
						mb="100px"
						display={['none', 'none', 'flex', 'flex']}
					>
						<PlatformTile
							first="PC"
							second="Launcher"
							active
							transform={90}
							onClick={() => setActivePlatform(0)}
							bgColor={activePlatform === 0 ? Colors.brandMain : ''}
						/>
						<PlatformTile
							first="Game"
							second="Xplorer"
							active
							transform={-50}
							onClick={() => setActivePlatform(1)}
							bgColor={activePlatform === 1 ? Colors.brandMain : ''}
						/>
						<PlatformTile
							first="Game"
							second="Contract"
							active
							transform={90}
							onClick={() => setActivePlatform(2)}
							bgColor={activePlatform === 2 ? Colors.brandMain : ''}
						/>
						<PlatformTile
							first="Game"
							second="Cap"
							active={false}
						/>
					</Flex>
				</Flex>
			</SlideFade>
			<Flex
				position="absolute"
				borderRadius="50%"
				display={['none', 'none', 'flex', 'flex']}
				w="600px"
				h="600px"
				top="40%"
				left="40%"
			/>
			{Platforms[activePlatform].element}
		</Flex>
	);
};

export default Ecosystem;
