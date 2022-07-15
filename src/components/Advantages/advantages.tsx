import { Box, Flex, SlideFade, Text } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { useInViewport } from 'react-in-viewport';
import { Colors } from '../../colors';
import ArrowRightIcon from '../../Icons/arrowRightIcon';
import FirstDistributionModel from '../../Icons/firstDistributionModel';
import HashupLogoBg from '../../Icons/hashupLogoBg';
import SecondDistributionModel from '../../Icons/secondDistributionModel';
import ThirdDistributionModel from '../../Icons/thirdDistributionModel';
import SectionInfoButton from '../SectionLabel/sectionInfoButton';
import MobileCard from './mobileCard';
import PhaseCard from './phaseCard';
import { ScrollImages } from './scrollImages';

export const Advantages = () => {
	const [activeCard, setActiveCard] = useState<number>(0);

	const ref = useRef(null);
	const { enterCount } = useInViewport(ref, {}, { disconnectOnLeave: false }, {});

	const inputRef = useRef(null);
	const scrollHandler = (_) => {
		if (inputRef.current.getBoundingClientRect().top > 0) setActiveCard(0);
		if (
			inputRef.current.getBoundingClientRect().top < 0 &&
			inputRef.current.getBoundingClientRect().top > -0.1 * inputRef.current.getBoundingClientRect().height
		)
			setActiveCard(2);
		if (inputRef.current.getBoundingClientRect().top < -0.15 * inputRef.current.getBoundingClientRect().height) {
			setActiveCard(1);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', scrollHandler, true);
		return () => {
			window.removeEventListener('scroll', scrollHandler, true);
		};
	}, []);

	return (
		<Flex
			ref={inputRef}
			zIndex="0"
			flexDirection="column"
			bgColor="#0A0A0A"
			w="100vw"
			p="70px"
			alignItems="center"
			justifyContent="space-between"
		>
			<SectionInfoButton label="HOW DOES IT WORK" />
			{/* <ScrollImages animationHookReference={ref} /> */}
			<SlideFade in={enterCount > 0} offsetY="100px">
				<Flex
					maxW={['100vw', '80vw', '60vw', '60vw']}
					textAlign={['left', 'left', 'center', 'center']}
					flexDirection="column"
					gridGap="20px"
					mt="40px"
					ref={ref}
				>
					<Text fontSize={['28px', '46px', '64px', '70px']} fontWeight="700" lineHeight="130%">
						Advantages of the new distribution model<strong>!</strong>
					</Text>
					<Text fontSize="20px" fontWeight="300" color={Colors.greyText}>
						HashUp is a game distribution platform that combines native licensed media with the world of the
						Web3, using the ERC20 token standard.{' '}
					</Text>
					<Text fontSize="20px" fontWeight="300">
						Finally, you can truly hodl, sell, exchange, and trade your game!{' '}
					</Text>
				</Flex>
				<Flex display={['flex', 'flex', 'none', 'none']} alignItems="center" justifyContent="center" pt="30px">
					<MobileCard />
				</Flex>
				<Flex
					display={['none', 'none', 'flex', 'flex']}
					h="60vh"
					w="100%"
					justifyContent="space-between"
					mt="20px"
					alignItems="center"
				>
					<PhaseCard
						isActive={false}
						image={<FirstDistributionModel />}
						num={1}
						labelFirst="Physical"
						labelSecond="Distribution"
						visible={activeCard === 0 ? true : false}
					/>
					<ArrowRightIcon color="white" mt="-130px" h="25px" />
					<PhaseCard
						isActive={false}
						image={<SecondDistributionModel />}
						num={2}
						labelFirst="Digital"
						labelSecond="Distribution"
						visible={activeCard === 2 ? true : false}
					/>
					<ArrowRightIcon color="white" mt="-130px" h="25px" />
					<PhaseCard
						isActive={activeCard === 1 ? true : false}
						image={<ThirdDistributionModel />}
						num={3}
						labelFirst="Decentralized"
						labelSecond="Web 3.0."
					/>
				</Flex>
			</SlideFade>
		</Flex>
	);
};

export default Advantages;
