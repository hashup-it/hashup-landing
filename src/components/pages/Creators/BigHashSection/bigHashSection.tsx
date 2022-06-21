import { Flex, Image, SlideFade, Text } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import { Colors } from '../../../../colors';
import SectionInfoButton from '../../../SectionLabel/sectionInfoButton';
import { HashScrollImages } from './hashScrollImages';

export const BigHashSection = () => {

    const ref = useRef(null!);
    const inputRef = useRef(null!);
    const { enterCount } = useInViewport(
        ref,
        {},
        { disconnectOnLeave: false },
        {}
    );

    return (

        <SlideFade in={enterCount > 0} offsetY="25vh">
            <Flex
                justifyContent="center"
                direction="column"
                gridGap="45px"
                ml="10.5%"
                mt="200px"
                position="relative"
                zIndex="100"
                ref={ref}
            >
                <Flex position="absolute" top={["10", "10", "-5", "-5%"]} zIndex="-1" ref={inputRef}>
                    <HashScrollImages />
                    <Flex display={['none', 'none', 'flex', 'flex']}>
                        <Image src="assets/images/hash_glitch/HashGlitch_00001.jpg" />
                    </Flex>
                </Flex>
                <Flex zIndex="100">
                    <SectionInfoButton label="DIGITAL GAME STORE" />
                </Flex>
                <Text fontSize={['24px', '32px', '46px', '60px']} fontWeight="600" zIndex="100" maxW="70%">
                    Do you see a lack of immediate remuneration of creators?
                </Text>
                <Text fontSize={['16px', '18px', '23px', '23px']} fontWeight="500" as="span" w={["80%", "80%", "50%", "50%"]} zIndex="100">
                    Combines a digital game store with a blockchain explorer and social media for gamers.
                    <Text color={Colors.greyText} as="span">
                        {' '}
                        It also creates an environment for browsing games and user profiles while introducing an
                        element of social media.
                    </Text>
                </Text>
            </Flex>
        </SlideFade>

    );
};

export default BigHashSection;
