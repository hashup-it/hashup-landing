import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import React, { forwardRef, useState } from 'react';
import { Colors } from '../../../../colors';
import MobileLeftIcon from '../../../../Icons/mobileLeftIcon';
import MobileRightIcon from '../../../../Icons/mobileRightIcon';
import RightArrowIcon from '../../../../Icons/rightArrowIcon';

export const MobileSlider = () => {
	const [activeText, setActiveText] = useState<number>(0);

    const handleSwayForward = () => {
        setActiveText(previous => {
            const nextState = previous + 1;

            return nextState > 2 ? 0 : nextState
        })
    }

    const handleSwayBackward = () => {
        setActiveText(previous => {
            const nextState = previous - 1;

            return nextState < 0 ? 2 : nextState
        })
    }

	return (
		<Flex justifyContent="space-between" alignItems='center'>
			<MobileLeftIcon onClick={handleSwayBackward} cursor='pointer'/>
			<Flex fontSize='18px' textAlign='center'>
                {activeText === 0  && (
                <Text>
                    Do you know how <Text as='span' color={Colors.brandMain}> easy it is to publish games </Text> with us?
                </Text>
                )}
                {activeText === 1 && (
                    <Text>
                    Did you know that you <Text as='span' color={Colors.brandMain}> don't </Text> <Text as='span' color={Colors.brandMain}>  have to lose money on your game </Text> sales at all?
                    </Text>
                )}
                {activeText === 2 && (
                    <Text>
                    Making money on <Text as='span' color={Colors.brandMain}> game trading? </Text> It's possible!
                    </Text>
                )}
			</Flex>
			<MobileRightIcon onClick={handleSwayForward} cursor='pointer'/>
		</Flex>
	);
};

export default MobileSlider;
