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
  const [isActive, setIsActive] = useState<number>(0)

  
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
					<Flex direction="column" justifyContent="space-between" >
						<Flex direction="column" pt="100px" justifyContent="flex-start" textAlign="start">
							<Text fontSize="60px" maxW='50%' lineHeight="110%">Well, it is, here’s <strong>how</strong>:</Text>
						</Flex>
						<Flex>
							<Flex direction='column'>
                <Flex ml={isActive === 0 ? '25px' : '0px'} justifyContent='flex-start' alignItems='center' gridGap='20px' textAlign='start' >
								<Text color={isActive === 0 ? 'white' : '#9a9a9a'} onClick={() => setIsActive(0)} fontSize="26px" fontWeight='500' cursor='pointer' maxW='50%'>
                Can you sell or trade your game on the secondary market?
								</Text>
                {isActive === 0 ? (
                <Flex fontSize='90px' alignItems='center'>
                  <Text color={Colors.brandMain}>No</Text>
                  <Text>.</Text>
                </Flex> ) : null}
                </Flex>
                <Flex ml={isActive === 1 ? '25px' : '0px'} justifyContent='flex-start' alignItems='center' gridGap='20px' textAlign='start' >
								<Text color={isActive === 1 ? 'white' : '#9a9a9a'} onClick={() => setIsActive(1)} fontSize="26px" fontWeight='500' cursor='pointer' maxW='50%'>
                Can you sell or trade your game on kurwa kurwa kurwa ket?
								</Text>
                {isActive === 1 ? (
                <Flex fontSize='90px' alignItems='center'>
                  <Text color={Colors.brandMain}>No</Text>
                  <Text>.</Text>
                </Flex> ) : null}
                </Flex>
                <Flex ml={isActive === 2 ? '25px' : '0px'} justifyContent='flex-start' alignItems='center' gridGap='20px' textAlign='start' >
								<Text color={isActive === 2 ? 'white' : '#9a9a9a'} onClick={() => setIsActive(2)} fontSize="26px" fontWeight='500' cursor='pointer' maxW='50%'>
                Can you sell or trade your game on the secondary market?
								</Text>
                {isActive === 2 ? (
                <Flex fontSize='90px' alignItems='center'>
                  <Text color={Colors.brandMain}>No</Text>
                  <Text>.</Text>
                </Flex> ) : null}
                </Flex>
                <Flex ml={isActive === 3 ? '25px' : '0px'} justifyContent='flex-start' alignItems='center' gridGap='20px' textAlign='start' >
								<Text color={isActive === 3 ? 'white' : '#9a9a9a'} onClick={() => setIsActive(3)} fontSize="26px" fontWeight='500' cursor='pointer' maxW='50%'>
                Can you sell or trade your game on the secondary market?
								</Text>
                {isActive === 3 ? (
                <Flex fontSize='90px' alignItems='center'>
                  <Text color={Colors.brandMain}>No</Text>
                  <Text>.</Text>
                </Flex> ) : null}
                </Flex>
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
