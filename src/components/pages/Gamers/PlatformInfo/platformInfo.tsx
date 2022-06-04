import { Flex, Image, Text, Box } from '@chakra-ui/react'
import React from 'react'
import GameXplorerLogo from '../../../../Icons/gameXplorerLogo'
import PlayVideoIcon from '../../../../Icons/playVideoIcon'
import SectionInfoButton from '../../../SectionLabel/sectionInfoButton'

export const PlatformInfo = () => {
  return (
    <Flex direction='column' justifyContent='flex-start' >
        <Flex direction='column' p='0px 0px 0px 150px'>
        <SectionInfoButton label='PLATFORM' />
        <Flex direction='column' fontSize='70px' fontWeight='700' pt='46px' gridGap='-40px' lineHeight="110%">
        <Text>With hashup you </Text>
        <Text>can be a gamer without</Text>
        <Text>limits<strong>.</strong></Text>
        </Flex>
        </Flex>
        <Flex direction='column'>
            <Image src='./assets/gamerPlatform.png' pt='50px'/>
            <Flex zIndex='10' bottom='23%' position='absolute' left='18%'>
            <GameXplorerLogo/>
            </Flex>

            <Flex justifyContent='space-between'>
                <Box maxW='40%' fontSize='26px' fontWeight='500'>
                  <Text >Combines a digital game store with a blockchain explorer and social media for gamers. </Text>
                  <Text color='#A1A1A6'> It also creates an environment for browsing games and user profiles while introducing an element of social media. </Text>
                </Box>
                <Flex maxW='30%'>
                <Text fontSize='50px' fontWeight='600'>How our platform works<strong>?</strong></Text>
                <PlayVideoIcon />
                </Flex>
            </Flex>
           
        </Flex>
        </Flex>
   
  )
}

export default PlatformInfo