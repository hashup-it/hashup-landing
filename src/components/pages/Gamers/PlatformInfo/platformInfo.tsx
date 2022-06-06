import { Flex, Image, Text, Box } from '@chakra-ui/react';
import React from 'react';
import GameXplorerLogo from '../../../../Icons/gameXplorerLogo';
import PlayVideoIcon from '../../../../Icons/playVideoIcon';
import SectionInfoButton from '../../../SectionLabel/sectionInfoButton';
import { Colors } from '../../../../colors';
import ChevronRightIcon from '../../../../Icons/chevronRightIcon';

export const PlatformInfo = () => {
	return (
		<Flex direction="column" justifyContent="flex-start">
			<Flex direction="column" p="0px 0px 0px 150px"> 
        <Flex maxW='20%'>
        <SectionInfoButton label="PLATFORM"/>
        </Flex>
				<Flex direction="column" fontSize="70px" fontWeight="700" pt="46px" gridGap="-40px" lineHeight="110%">
					<Text>With hashup you </Text>
					<Text>can be a gamer without</Text>
					<Text>
						limits<strong>.</strong>
					</Text>
				</Flex>
			</Flex>
			<Flex direction="column" position='relative' >
        <Flex>
				<Image src="./assets/gamerPlatform.png" pt="50px" />
        </Flex>
				<Flex position='absolute' top='50%' justifyContent="space-between" alignItems='center' p='0px 220px 0px 220px' gridGap='150px'>
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
			</Flex>
	);
};

export default PlatformInfo;
