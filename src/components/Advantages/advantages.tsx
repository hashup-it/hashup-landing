import { Flex, SlideFade, Text } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { useInViewport } from 'react-in-viewport';
import { Colors } from '../../colors';
import ArrowRightIcon from '../../Icons/arrowRightIcon';
import FirstDistributionModel from '../../Icons/firstDistributionModel';
import SecondDistributionModel from '../../Icons/secondDistributionModel';
import ThirdDistributionModel from '../../Icons/thirdDistributionModel';
import SectionInfoButton from '../SectionLabel/sectionInfoButton';
import MobileCard from './mobileCard';
import PhaseCard from './phaseCard';

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
					<Text fontSize={['28px', '46px', '64px', '70px']} fontWeight="700" lineHeight="130%" textAlign={"center"}>
						<strong>One</strong> protocol<strong>.</strong>
					</Text>
					<Text fontSize={['28px', '46px', '64px', '70px']} fontWeight="700" lineHeight="130%" textAlign={"center"}>
						<strong>Hundreds</strong> stores<strong>.</strong>
					</Text>
					<Text fontSize={['28px', '46px', '64px', '70px']} fontWeight="700" lineHeight="130%" textAlign={"center"}>
						<strong>One</strong> Wallet<strong>.</strong>
					</Text>
					<Text fontSize="20px" fontWeight="300" color={Colors.greyText}>
						HashUp is a protocol for token-license distribution. It allows you to sell games and tokens on multiple web3 stores
						simultaneously from one place. {' '}
					</Text>
					<Text fontSize="20px" fontWeight="300">
						You decide how much the stores earn! Use it to <strong>decentralize</strong> your marketing! {' '}
					</Text>
				</Flex>
				<Flex display={['flex', 'flex', 'none', 'none']} alignItems="center" justifyContent="center" pt="30px">
					<MobileCard />
				</Flex>
				{/* <Flex
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
						visible={activeCard === 0}
					/>
					<ArrowRightIcon color="white" mt="-130px" h="25px" />
					<PhaseCard
						isActive={false}
						image={<SecondDistributionModel />}
						num={2}
						labelFirst="Digital"
						labelSecond="Distribution"
						visible={activeCard === 2}
					/>
					<ArrowRightIcon color="white" mt="-130px" h="25px" />
					<PhaseCard
						isActive={activeCard === 1}
						image={<ThirdDistributionModel />}
						num={3}
						labelFirst="Decentralized"
						labelSecond="Web 3.0."
					/>
				</Flex> */}
			</SlideFade>
		</Flex>
	);
};

export default Advantages;
