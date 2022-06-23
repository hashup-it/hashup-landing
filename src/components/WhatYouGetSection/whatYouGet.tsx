import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Colors } from '../../colors';
import ChevronRightIcon from '../../Icons/chevronRightIcon';
import SectionInfoButton from '../SectionLabel/sectionInfoButton';
import MobileProfitCard from './mobileProfitCard';
import ProfitCard from './profitCard';
import ElipseMobileIcon from '../../Icons/elipseMobileIcon';
import { useSwipeable } from 'react-swipeable';

const CardsInfo = [
	{
		number: '01',
		label: 'The #HASH token',
		description: "When the platform grows bigger, the token's price also goes higher. It all happens in real time!",
		src: 'assets/videos/HashCoinWeb.mp4',
		subNumber: '02',
		link: '/gamers'
	},
	{
		number: '02',
		label: 'True ownership',
		description: 'Build your collection. Buy, sell and trade your games permisionless.',
		src: 'assets/videos/CartridgeWeb.mp4',
		subNumber: '03',
		link: '/gamers'
	},
	{
		number: '03',
		label: 'Gamers and Creators run the market',
		description: "Less commissions and more influence on the market. Doesn't it sound awesome?",
		src: 'assets//videos/LaptopWeb.mp4',
		link: '/creators'
	},
];

export const WhatYouGet = () => {
	const [card, setCard] = useState<number>(0);

	const nextCard = (forceForward = false) => {
		if (forceForward) {
			setCard(previousCard => previousCard < 2 ? previousCard + 1 : 0);
		} else {
			if (card < 2) {
				setCard(previousCard => previousCard + 1)
			}
		}
	};

	const previousCard = (forceForward = false) => {
		if (forceForward) {
			setCard(previousCard => previousCard > 0 ? previousCard - 1 : 2);
		} else {
			if (card > 0) {
				setCard(previousCard => previousCard - 1)
			}
		}
	};

	const handlers = useSwipeable({
		onSwipedLeft: () => nextCard(true),
		onSwipedRight: () => previousCard(true),
		trackMouse: true
	});

	return (
		<Flex h="120vh" flexDirection="column" p="90px 90px 0 90px" alignItems="center" bgColor="#0A0A0A" mb="100px">
			<SectionInfoButton label="WHAT DO YOU GET?" zIndex="1000" />
			<Flex position="relative" w="100vw" h="100%" mt="20px" flexDirection="column" alignItems="center">
				<Flex
					flexDirection="column"
					gridGap="7px"
					zIndex="10"
					alignItems="center"
					w={['85%', '80%', '75%', '85%']}
					mt="30px"
					mb={['30px', '30px', '60px', '60px']}
				>
					<Text fontSize={['30px', '42px', '56px', '70px']} fontWeight="700">
					What does HashUp give you<strong>?</strong>
					</Text>
					<Text
						fontSize={['18px', '18px', '20px', '20px']}
						fontWeight="300"
						color={Colors.greyText}
						maxW={['none', 'none', '65%', '66%']}
						textAlign={['left', 'left', 'center', 'center']}
					>
						We believe that by the decentralization of the game distribution it is possible to lower the games' prices and increase profits for the creators.
					</Text>
				</Flex>
				<Flex display={['flex', 'flex', 'none', 'none']}  alignItems="center" direction="column" gridGap="48px" justifyContent="space-between">
					<Flex>
						<MobileProfitCard
							width={card === 2 ? '23px' : '80px'}
							number={CardsInfo[card].number}
							subNumber={CardsInfo[card].subNumber}
							label={CardsInfo[card].label}
							description={CardsInfo[card].description}
							link={CardsInfo[card].link}
							handlers={handlers}
						/>
					</Flex>
					<Flex gridGap="16px">
						<ElipseMobileIcon opacity={card === 0 ? '1' : '0.2'} onClick={() => setCard(0)} />
						<ElipseMobileIcon opacity={card === 1 ? '1' : '0.2'} onClick={() => setCard(1)} />
						<ElipseMobileIcon
							opacity={card === CardsInfo.length - 1 ? '1' : '0.2'}
							onClick={() => setCard(2)}
						/>
					</Flex>
				</Flex>
				<Flex
					display={['none', 'none', 'flex', 'flex']}
					justifyContent="space-between"
					w="100%"
					p="0 180px"
					zIndex="1"
					alignItems="center"
				>
					<ProfitCard
						number={CardsInfo[card].number}
						label={CardsInfo[card].label}
						description={CardsInfo[card].description}
						src={CardsInfo[card].src}
						link={CardsInfo[card].link}
					/>
					<Flex gridGap="10px">
						<Flex
							bgColor={Colors.brandMain}
							p="20px 25px"
							borderRadius="30px 0 0 0"
							cursor="pointer"
							onClick={() => previousCard()}
							opacity={card === 0 ? '0' : '1'}
						>
							<ChevronRightIcon h="20px" transform="rotate(180deg)" />
						</Flex>
						<Flex
							bgColor={Colors.brandMain}
							p="20px 25px"
							borderRadius="0 30px 0 0"
							cursor={card === 2 ? 'normal' : 'pointer'}
							onClick={() => nextCard()}
							opacity={card === 2 ? '.5' : '1'}
						>
							<ChevronRightIcon h="20px" />
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default WhatYouGet;
