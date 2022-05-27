import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Colors } from '../../colors';
import DiscordIcon from '../../Icons/discordIcon';
import HashupLogo from '../../Icons/hashupLogo';
import LinkedinIcon from '../../Icons/linkedinIcon';
import TelegramIcon from '../../Icons/telegramIcon';
import TwitterIcon from '../../Icons/twitterIcon';
import CommunityButtons from './communityButtons';
import { ICommunityButtons } from './communityButtons';

export const Community = () => {
  const data: ICommunityButtons[] = [
    {
      icon:<TelegramIcon />,
      name:'Telegram',
      description:'Join our channel and get in touch with team members and supporters!',
    },
    {
      icon:<DiscordIcon />,
      name:'Discord',
      description:'Join the server and connect with game devs and gamers around the world!',
    },
    {
      icon:<TwitterIcon />,
      name:'Twitter',
      description:'Get the most insightful tweets about our project and community',
    },
    {
      icon:<LinkedinIcon />,
      name:'LinkedIn',
      description:'Connect with us and expand your network',
    },
  ]

  return (
    <Flex 
    direction='column' 
    alignItems='center'>
        <Flex 
        p='20px'
        fontSize='60px' 
        color='#ffffff' 
        fontWeight='700'>
            <Text> Join the community</Text>
            <Text color={Colors.brandMain} fontWeight='700'>!</Text>
        </Flex>
        <Flex
        fontSize='20px' 
        color={Colors.greyText} 
        fontWeight='300' direction='column' 
        alignItems='center'>
            <Text maxWidth="60vw" textAlign="center">Be the part of the revolution in the game industry and join our growing community of game creators, innovators, and gamers!</Text>
        </Flex>
        <Flex 
        justifyContent='space-between' 
        alignItems='center' 
        gridGap='24px'
        paddingTop='70px'>
            {data.map(element => <CommunityButtons {...element} />)}
        </Flex>
    </Flex>
  )
}

export default Community