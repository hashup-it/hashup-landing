import { Flex, Image } from '@chakra-ui/react'
import React, { FC } from 'react'
import { ISocialIconType } from './socials'


export const SocialIcon: FC<ISocialIconType> = ({iconUrl, linkUrl}) => {
  return (
      <a href={linkUrl}>
        <Flex
        boxSize='33px'
        border='1px solid'
        borderColor='rgba(255, 255, 255, 0.1)'
        borderRadius='40px'
        align='center'
        justify='center'
        cursor='pointer'
        _hover={{ borderColor: 'white' }}
        >   
            {iconUrl}
        </Flex>
      </a>
  )
}

export default SocialIcon