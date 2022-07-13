import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Flex, Text, SlideFade } from '@chakra-ui/react';
import { Colors } from '../../../../colors';
import { useInViewport } from 'react-in-viewport';
import { access } from 'fs';
import ComponentAnimated from './componentAnimatedOne';
import ComponentAnimatedOne from './componentAnimatedOne';
import ComponentAnimatedSecond from './componentAnimatedSecond';
import ComponentAnimatedThird from './componentAnimatedThird';
import ComponentAnimatedForth from './componentAnimatedForth';
import { ElementCompOne } from './elementCompOne';

export const convertVhToPx = (vh: string) => Number(vh) * (document.documentElement.clientHeight / 100);
export const convertPxToVw = (px: string) => Number(px) * (100 / document.documentElement.clientWidth);

export const enum ActiveText {
	FIRST,
	SECOND,
}

export const CommunityOwned = () => {
	const [activeText, setActiveText] = useState<number>(ActiveText.FIRST);
	const [isActiveComponent, setIsActiveComponent] = useState<number>(0);

	const ref = useRef(null);
	const inputRef = useRef(null!);
	const changeItem = useRef(null!);

	const { enterCount } = useInViewport(ref, {}, { disconnectOnLeave: false }, {});

	const scrollHandler = (any) => {
		if (!inputRef.current) {
			return;
		}

		if (inputRef.current.getBoundingClientRect().top >= convertVhToPx('20')) {
			setActiveText(ActiveText.FIRST);
		}

		if (
			inputRef.current.getBoundingClientRect().top < convertVhToPx('20') &&
			inputRef.current.getBoundingClientRect().top > -0.4 * inputRef.current.getBoundingClientRect().height
		) {
			setActiveText(ActiveText.SECOND);
		}

		if (inputRef.current.getBoundingClientRect().top <= convertVhToPx('-5')) {
			setIsActiveComponent(0);
		}

		if (inputRef.current.getBoundingClientRect().top <= convertVhToPx('-15')) {
			setIsActiveComponent(1);
		}

		if (inputRef.current.getBoundingClientRect().top <= convertVhToPx('-30')) {
			setIsActiveComponent(2);
		}

		if (inputRef.current.getBoundingClientRect().top <= convertVhToPx('-40')) {
			setIsActiveComponent(3);
		}

		if (inputRef.current.getBoundingClientRect().top <= convertVhToPx('-55')) {
			setIsActiveComponent(4);
		}

		console.log(inputRef.current.getBoundingClientRect().top);
	};

	useEffect(() => {
		window.addEventListener('scroll', scrollHandler, true);
		return () => {
			window.removeEventListener('scroll', scrollHandler, true);
		};
	}, []);

	const typeOptions: { [p: number]: () => React.ReactNode } = {
		[ActiveText.FIRST]: () => (
			<Flex direction="column" alignItems="center" w="100%">
				<SlideFade in={enterCount > 0} offsetY="100px">
					<Text
						lineHeight="100%"
						maxW={['100%', '100%', '85%', '85%']}
						textAlign="center"
						fontSize={['30px', '42px', '70px', '90px']}
					>
						Did you know that current model of gaming platforms <strong> limits</strong> you?
					</Text>
				</SlideFade>
			</Flex>
		),
		[ActiveText.SECOND]: () => (
			<Flex direction="column" alignItems="center" textAlign="center" w="100%">
				<SlideFade in={enterCount > 0} offsetY="40px">
					<Flex direction="column" alignItems="center" textAlign="center">
						<Text lineHeight="100%" fontSize={{ base: '36px', lg: '90px' }}>
							Surprised<strong>?</strong>
						</Text>
						<Text fontSize={{ base: '24px', lg: '70px' }} lineHeight="100%">
							How is that possible?
						</Text>
					</Flex>
				</SlideFade>
				<SlideFade in={enterCount > 0} offsetY="40px">
					<Flex direction="column" maxW={['80%', '80%', '100vw', '100vw']} ml={['15%', '15%', '0%', '0%']}>
						<Flex direction="column" mt="100px" textAlign="start">
							<Text
								fontSize={['20px', '20px', '60px', '60px']}
								maxW={['100%', '100%', '70%', '70%']}
								lineHeight="110%"
							>
								Well,
							</Text>
							<Text fontSize={['20px', '20px', '60px', '60px']} maxW="70%" lineHeight="110%">
								it is, here’s <strong>how</strong>:
							</Text>
						</Flex>

						<Flex
							direction="column"
							pt={['14px', '14px', 'none', 'none']}
							gridGap={['12px', '12px', '0px', '0px']}
							ref={changeItem}
						>
							<Flex
								alignItems="center"
								justifyContent="space-between"
								maxH="40vh"
								direction={['column', 'column', 'row', 'row']}
							>
								<ComponentAnimatedOne
									isActive={isActiveComponent}
									text="Can you trade games with friends like you used to?"
								/>
								{isActiveComponent === 0 ? (
									<SlideFade in={enterCount > 0} offsetY="40px">
										<Text fontSize={['30px', '30px', '90px', '90px']}>
											<strong>No</strong>.
										</Text>
									</SlideFade>
								) : null}
							</Flex>
							<Flex
								alignItems="center"
								justifyContent="space-between"
								maxH="40vh"
								direction={['column', 'column', 'row', 'row']}
							>
								<ComponentAnimatedSecond
									text="Can you sell or trade your game on the secondary market?"
									isActive={isActiveComponent}
								/>
								{isActiveComponent === 1 ? (
									<SlideFade in={enterCount > 0} offsetY="40px">
										<Flex fontSize={['30px', '30px', '90px', '90px']}>
											<Text>
												<strong>No</strong>.
											</Text>
										</Flex>
									</SlideFade>
								) : null}
							</Flex>
							<Flex
								alignItems="center"
								justifyContent="space-between"
								maxH="40vh"
								direction={['column', 'column', 'row', 'row']}
							>
								<ComponentAnimatedThird
									text="Can you help in funding new games?"
									isActive={isActiveComponent}
								/>
								{isActiveComponent === 2 ? (
									<SlideFade in={enterCount > 0} offsetY="40px">
										<Flex
											direction="column"
											fontSize={['30px', '30px', '90px', '90px']}
											gridGap="-40px"
											lineHeight="90%"
										>
											Also
											<Text>
												<strong>no</strong>.
											</Text>
										</Flex>
									</SlideFade>
								) : null}
							</Flex>
							<Flex
								alignItems="center"
								justifyContent="space-between"
								maxH="40vh"
								direction={['column', 'column', 'row', 'row']}
							>
								<ComponentAnimatedForth
									text="And if you own a cryptocurrency - can you store your games in it?"
									isActive={isActiveComponent}
								/>
								{isActiveComponent === 3 ? (
									<SlideFade in={enterCount > 0} offsetY="40px">
										<ElementCompOne activeComp={false} />
									</SlideFade>
								) : null}
								{isActiveComponent === 4 ? (
									<SlideFade in={enterCount > 0} offsetY="40px">
										<ElementCompOne activeComp={true} />
									</SlideFade>
								) : null}
							</Flex>
						</Flex>
					</Flex>
				</SlideFade>
			</Flex>
		),
	};

	return (
		<Flex direction="column" alignItems="center" ref={inputRef} mb={['80px', '100px', '150px', '200px']} w="100%">
			<Flex gridGap="6px">
				<Text fontSize="12px" color={Colors.brandMain}>
					COMMUNITY-OWNED
				</Text>
				<Text fontSize="12px" color="white">
					AND OPERATED
				</Text>
			</Flex>
			<Flex
				mt="40px"
				//direction="column"
				fontSize={{ base: '38px', lg: '90px' }}
				fontWeight="700"
				alignItems="stretch"
				justifyContent="space-between"
				ml={['none', 'none', '10vw', '10vw']}
				w={['100vw', '100vw', '80vw', '80vw']}
				textAlign="center"
				ref={ref}
			>
				<SlideFade in={enterCount > 0} offsetY="100px">
					{typeOptions[activeText]()}
				</SlideFade>
			</Flex>
		</Flex>
	);
};

export default CommunityOwned;
