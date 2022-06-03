import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Flex, Text, SlideFade } from '@chakra-ui/react';
import { Colors } from '../../../../colors';
import { useInViewport } from 'react-in-viewport';
import { access } from 'fs';

export const convertVhToPx = (vh: string) => Number(vh) * (document.documentElement.clientHeight / 100);
export const convertPxToVw = (px: string) => Number(px) * (100 / document.documentElement.clientWidth);

enum ActiveText {
	FIRST,
	SECOND,
}

export const CommunityOwned = () => {
	const [activeText, setActiveText] = useState<number>(ActiveText.FIRST);

  
	const ref = useRef(null);
	const inputRef = useRef(null!);

	const { enterCount } = useInViewport(ref, {}, { disconnectOnLeave: false }, {});

	const scrollHandler = (any) => {
		console.log(inputRef.current ? convertPxToVw(inputRef.current.getBoundingClientRect().top) : null);

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
			<Text lineHeight="100%">
				Did you know that current model of gaming platforms <strong>limits</strong> you?
			</Text>
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
					<Flex direction="column" justifyContent="space-between" alignItems="center">
						<Flex direction="column" pt="100px" justifyContent="flex-start" textAlign="start">
							<Text fontSize="60px">Well, it is</Text>
							<Text fontSize="60px">
								here’s <strong>how</strong>:
							</Text>
						</Flex>
						<Flex>
							<Flex>
								<Text color={Colors.greyText} fontSize="12px">
									Can you trade games with friends like you used to?
								</Text>
							</Flex>
						</Flex>
					</Flex>
				</SlideFade>
			</Flex>
		),
	};

	return (
		<Flex direction="column" alignItems="center" ref={inputRef} pb="1500px">
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
