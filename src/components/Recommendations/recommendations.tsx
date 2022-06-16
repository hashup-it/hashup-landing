import { Box, Flex, Image, SlideFade, Text } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { useInViewport } from 'react-in-viewport';
import { Parallax, ParallaxProvider, useParallax } from 'react-scroll-parallax';
import { Colors } from '../../colors';
import AvatarDots from '../../Icons/avatarDots';
import ChevronRightIcon from '../../Icons/chevronRightIcon';
import MobileLeftIcon from '../../Icons/mobileLeftIcon';
import MobileRightIcon from '../../Icons/mobileRightIcon';
import { OpinionCard } from './opinion';
import { Opinions } from './opinionsInfo';

export const Recommendations = () => {
	const [opinion, setOpinion] = useState<number>(0);

	const nextOpinion = () => {
		if (opinion < Opinions.length - 1) setOpinion(opinion + 1);
	};

	console.log(Opinions.length);

	const previousOpinion = () => {
		if (opinion > 0) setOpinion(opinion - 1);
	};

	const ref = useRef(null);
	const { enterCount } = useInViewport(ref, {}, { disconnectOnLeave: false }, {});

	return (
		<>
			<Flex display={['flex', 'flex', 'none', 'none']} direction="column" alignItems="center">
				<Text fontSize="32px" color="white" fontWeight="700">
					Look what people say<strong>.</strong>
				</Text>
				<Flex alignItems="center" pt='5px'>
					<MobileLeftIcon cursor="pointer" onClick={previousOpinion} opacity={opinion === 0 ? '0.5' : '1'}/>
					<Flex maxW="90%" pt="30px" transform='translateX(-5%)'>
						<Image src={Opinions[opinion].photo} />
					</Flex>
					<MobileRightIcon cursor="pointer" onClick={nextOpinion} opacity={opinion === Opinions.length - 1 ? '0.5' : '1'} />
				</Flex>
				<Flex>
					<OpinionCard
						name={Opinions[opinion].name}
						role={Opinions[opinion].role}
						opinion={Opinions[opinion].opinion}
						logo={Opinions[opinion].logo}
					/>
				</Flex>
			</Flex>

			<Flex pt="150px" alignItems="center" width="100%" height="100vh" display={['none', 'none', 'flex', 'flex']}>
				<Flex width="50%" justifyContent="start">
					<Image src={Opinions[opinion].photo} />
				</Flex>
				<Flex direction="column" width="50%" justifyContent="start">
					<Text fontSize="50px" color="white" fontWeight="700">
						Look what people say<strong>.</strong>
					</Text>
					<OpinionCard
						name={Opinions[opinion].name}
						role={Opinions[opinion].role}
						opinion={Opinions[opinion].opinion}
						logo={Opinions[opinion].logo}
					/>
					<Flex pt="70px" gridGap="25px">
						<ChevronRightIcon
							cursor="pointer"
							transform="rotate(180deg)"
							onClick={previousOpinion}
							opacity={opinion === 0 ? '0.5' : '1'}
						/>
						<ChevronRightIcon
							cursor="pointer"
							onClick={nextOpinion}
							opacity={opinion === Opinions.length - 1 ? '0.5' : '1'}
						/>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
};

export default Recommendations;
