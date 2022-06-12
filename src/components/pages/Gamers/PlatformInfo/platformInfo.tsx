import { Flex, Image, Text, Box } from '@chakra-ui/react';
import React, { useRef, useState, } from 'react';
import GameXplorerLogo from '../../../../Icons/gameXplorerLogo';
import PlayVideoIcon from '../../../../Icons/playVideoIcon';
import SectionInfoButton from '../../../SectionLabel/sectionInfoButton';
import { Colors } from '../../../../colors';
import ChevronRightIcon from '../../../../Icons/chevronRightIcon';
import { HashpadScroll } from './hashPadSroll';
import { CartridgesScroll } from './cartridgesScroll';

export const PlatformInfo = () => {

	const ref = useRef(null!);
	const inputRef = useRef(null!)



	return (
		<Flex direction="column" justifyContent="flex-start">
			<Flex direction="column" p="0px 0px 0px 150px"> 
        <Flex maxW='20%'>
        <SectionInfoButton label="PLATFORM"/>
        </Flex>
				<Flex direction="column" fontSize="70px" fontWeight="700" pt="46px" gridGap="-40px" lineHeight="110%" zIndex='1'>
					<Text>With hashup you </Text>
					<Text>can be a gamer without</Text>
					<Text>
						limits<strong>.</strong>
					</Text>
				</Flex>
			</Flex>
			<Flex direction="column" position='relative'>
        <Flex pt='-30px' ref={inputRef}>
			<HashpadScroll animationHookReference={inputRef} /> {
			<Image src='assets/images/hash_pad/iPad_00001.jpg' />
}
        </Flex>
				<Flex position='absolute' top='50%' justifyContent="space-between" alignItems='center' p='40px 220px 0px 220px' gridGap='150px' zIndex='1'>
					<Flex direction="column" justifyContent="flex-start" gridGap="50px">
						<GameXplorerLogo />
						<Box fontSize="26px" fontWeight="500">
							<Text as="span">
								Combines a digital game store with a blockchain explorer and social media for gamers.
							</Text>
							<Text color="#A1A1A6" as="span">
								{' '}It also creates an environment for browsing games and user profiles while introducing an
								element of social media.
							</Text>
						</Box>
            <Flex gridGap='3px'>
            <Flex
          bgColor={Colors.brandMain}
          color="white"
          borderRadius="0px 0px 0px 14px"
          p="8px 13px"
          fontSize="14"
          alignItems="center"
          fontWeight="600"
        >
          Go to GameXplorer
        </Flex>
        <Flex bgColor={"#9A2727"} alignItems="center" p="15px">
          <ChevronRightIcon />
        </Flex>
            </Flex>
					</Flex>
					<Flex gridGap="40px" justifyContent='flex-start'>
						<Text fontSize="50px" fontWeight="600">
							How our platform works<strong>?</strong>
						</Text>
						<PlayVideoIcon width={66} height={66} />
					</Flex>
				</Flex>
        </Flex>
		<Flex direction="column" justifyContent="flex-start" >
			<Flex ref={ref} zIndex='0'>
			<CartridgesScroll animationHookReference={ref} />
			</Flex>
			<Flex direction="column" p="500px 0px 0px 210px" zIndex='1'>
				<Flex pt='100px' maxW="20%">
					<SectionInfoButton label="LICENSES" />
				</Flex>
                <Flex pt='50px' maxW='70%' fontSize='70px' fontWeight='600' lineHeight='110%' direction='column'>
                    <Text>Cartrigde what</Text>
                    <Text>is it to the gamer<strong>?</strong></Text>
                </Flex>
                <Box pt='50px' fontSize='26px' maxW='50%' fontWeight='500'>
                    <Text as='span'> The gaming licenses you purchased on the HashUp platform are in the form of <strong>ERC-20 tokens</strong>.</Text>
                    <Text as='span' color={Colors.additional}> In short, they work just like other cryptocurrencies. </Text>
                    <Text pt='50px' color={Colors.additional}> Owning a unit entitles the owner to launch the game. </Text>
                </Box>

			</Flex>
		</Flex>
			</Flex>
			
	);
};

export default PlatformInfo;
