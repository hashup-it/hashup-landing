import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import React, { forwardRef, useState } from 'react';
import { Colors } from '../../../../colors';
import MobileLeftIcon from '../../../../Icons/mobileLeftIcon';
import MobileRightIcon from '../../../../Icons/mobileRightIcon';
import { useSwipeable } from 'react-swipeable';
import RightArrowIcon from '../../../../Icons/rightArrowIcon';


export const MobileSlider = () => {
	const [activeText, setActiveText] = useState<number>(0);

    const handleSwayForward = () => {
        setActiveText(previous => {
            const nextState = previous + 1;

            return nextState > 2 ? 0 : nextState
        })
    }

    const handlers = useSwipeable({
		onSwipedLeft: () => handleSwayForward(),
		onSwipedRight: () => handleSwayBackward(),
		trackMouse: true
	});


    const handleSwayBackward = () => {
        setActiveText(previous => {
            const nextState = previous - 1;

            return nextState < 0 ? 2 : nextState
        })
    }

	return (
		<Flex justifyContent="space-between" alignItems='center' {...handlers} h='15vh'>
			<MobileLeftIcon onClick={handleSwayBackward} cursor='pointer'/>
			<Flex fontSize='18px' textAlign='center'>
                {activeText === 0  && (
                <Text>
                    Did you know that <Text as='span' color={Colors.brandMain}> you can release a game on web3 </Text> in 10 minutes?
                </Text>
                )}
                {activeText === 1 && (
                    <Text>
                    Did you know that <Text as='span' color={Colors.brandMain}> you earn royalties on each </Text> game exchange?
                    </Text>
                )}
                {activeText === 2 && (
                    <Text>
                    Did you know that <Text as='span' color={Colors.brandMain}> you can decide on the HashUp platform </Text> with $HASH?
                    </Text>
                )}
			</Flex>
			<MobileRightIcon onClick={handleSwayForward} cursor='pointer'/>
		</Flex>
	);
};

export default MobileSlider;
