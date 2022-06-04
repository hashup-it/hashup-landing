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

import ElementCompOne from './elementCompOne';

export const convertVhToPx = (vh: string) => Number(vh) * (document.documentElement.clientHeight / 100);
export const convertPxToVw = (px: string) => Number(px) * (100 / document.documentElement.clientWidth);

enum ActiveText {
	FIRST,
	SECOND,
}


export const CommunityOwned = () => {
	const [activeText, setActiveText] = useState<number>(ActiveText.FIRST);
  	const [isActiveComponent, setIsActiveComponent] = useState<number>(0)
	
	const ref = useRef(null);
	const inputRef = useRef(null!);

	const { enterCount } = useInViewport(ref, {}, { disconnectOnLeave: false }, {});

	const scrollHandler = (any) => {
		// console.log(inputRef.current ? convertPxToVw(inputRef.current.getBoundingClientRect().top) : null);

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

		if (inputRef.current.getBoundingClientRect().top <= convertVhToPx('0')) {
			// ActiveText.THIRD
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', scrollHandler, true);
		return () => {
			window.removeEventListener('scroll', scrollHandler, true);
		};
	}, []);

	const typeOptions: { [p: number]: () => React.ReactNode } = {
		[ActiveText.FIRST]: () => (
      <SlideFade in={enterCount > 0} offsetY="40px">
			<Text lineHeight="100%">
				Did you know that current model of gaming platforms <strong>limits</strong> you?
			</Text>
      </SlideFade>
		),
		[ActiveText.SECOND]: () => (
			<Flex direction="column">
				<SlideFade in={enterCount > 0} offsetY="40px">
					<Flex direction="column">
						<Text lineHeight="100%">
							Surpised<strong>?</strong>
						</Text>
						<Text fontSize="70" lineHeight="100%">
							How is that possible?
						</Text>
					</Flex>
				</SlideFade>
				<SlideFade in={enterCount > 0} offsetY="40px">
					<Flex direction="column" justifyContent="flex-start" >
						<Flex direction="column" pt="100px" justifyContent="flex-start" textAlign="start">
							<Text fontSize="60px" maxW='50%' lineHeight="110%">Well, it is, here’s <strong>how</strong>:</Text>
						</Flex>
						<Flex> 
							<Flex direction='column' maxW='100%' justifyContent="flex-start" >
								<Flex justifyContent="flex-start" alignItems='center'>
								<ComponentAnimatedOne isActive={isActiveComponent} text='Can you trade games with friends like you used to?'  onClick={() => setIsActiveComponent(0)}/>
							{isActiveComponent === 0 ? <ElementCompOne text='No.'/> : null}
								</Flex>
								<Flex justifyContent="flex-start">
							<ComponentAnimatedSecond text='Can you sell or trade your game on the secondary market?' isActive={isActiveComponent} onClick={() => setIsActiveComponent(1)} />
							{isActiveComponent === 1 ? <ElementCompOne text='No.'/> : null}
								</Flex>
								<Flex justifyContent="flex-start">
							<ComponentAnimatedThird text='Can you sell or trade your game on the secondary market?' isActive={isActiveComponent} onClick={() => setIsActiveComponent(2)} />
							{isActiveComponent === 2 ? <ElementCompOne text='Also.'/> : null}
								</Flex>
								<Flex justifyContent="flex-start">
							<ComponentAnimatedForth text='And if you own a cryptocurrency - can you store your games in it?' isActive={isActiveComponent} onClick={() => setIsActiveComponent(3)} />
							{isActiveComponent === 3 ? <ElementCompOne text='No.'/> : null}
								</Flex>
               		</Flex>
						</Flex>
					</Flex>
				</SlideFade>
			</Flex>
		),
	};

	return (
		<Flex direction="column" alignItems="center" ref={inputRef} pb='320px'>
			<Flex gridGap="6px">
				<Text fontSize="12px" color={Colors.brandMain}>
					COMMUNITY-OWNED
				</Text>
				<Text fontSize="12px" color="white">
					AND OPERATED
				</Text>
			</Flex>
			<Flex
				pt="40px"
				direction="column"
				fontSize="90px"
				fontWeight="700"
				alignItems="center"
				maxW="75%"
				textAlign="center"
				ref={ref}
			>
				<SlideFade in={enterCount > 0} offsetY="400px">
					<Flex>
            {typeOptions[activeText]()}
          </Flex>
				</SlideFade>
			</Flex>
		</Flex>
	);
};

export default CommunityOwned;
