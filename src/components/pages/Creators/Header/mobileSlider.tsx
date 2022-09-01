import { Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Colors } from '../../../../colors';
import MobileLeftIcon from '../../../../Icons/mobileLeftIcon';
import MobileRightIcon from '../../../../Icons/mobileRightIcon';
import { useSwipeable } from 'react-swipeable';

export const MobileSlider = () => {
	const [activeText, setActiveText] = useState<number>(0);

	const handleSwayForward = () => {
		setActiveText((previous) => {
			const nextState = previous + 1;

			return nextState > 2 ? 0 : nextState;
		});
	};

	const handlers = useSwipeable({
		onSwipedLeft: () => handleSwayForward(),
		onSwipedRight: () => handleSwayBackward(),
		trackMouse: true,
	});

	const handleSwayBackward = () => {
		setActiveText((previous) => {
			const nextState = previous - 1;

			return nextState < 0 ? 2 : nextState;
		});
	};

	return (
		<Flex justifyContent="space-between" alignItems="center" {...handlers} h="15vh">
			<MobileLeftIcon width="42px" height="42px" onClick={handleSwayBackward} cursor="pointer" />
			<Flex fontSize="18px" textAlign="center">
				{activeText === 0 && (
					<Text>
						Do you know that{' '}
						<Text as="span" color={Colors.brandMain}>
							{' '}
							you can release a game on web3{' '}
						</Text>{' '}
						in 10 minutes?
					</Text>
				)}
				{activeText === 1 && (
					<Text>
						Do you know that{' '}
						<Text as="span" color={Colors.brandMain}>
							{' '}
							you earn royalties on each{' '}
						</Text>{' '}
						game exchange?
					</Text>
				)}
				{activeText === 2 && (
					<Text>
						Do you know that the games you release can be{' '}
						<Text as="span" color={Colors.brandMain}>
							{' '}
							stored on digital wallets
						</Text>
						?
					</Text>
				)}
			</Flex>
			<MobileRightIcon width="42px" height="42px" onClick={handleSwayForward} cursor="pointer" />
		</Flex>
	);
};

export default MobileSlider;
