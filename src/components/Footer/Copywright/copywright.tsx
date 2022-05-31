import { Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'
import OdlIcon from '../../../Icons/odlIcon'
import CopywrightInfo from './copywrightInfo'

export const Copywright = () => {
  return (
    <Flex w='100%' justifyContent='space-between'>
        <Text fontSize="12px" color="#8A8F98">
			Copyright © {new Date().getFullYear()} by HashUp All Rights Reserved.
		</Text>
        <Flex fontSize='12px' color='#8a8f98' gridGap='33px'>
        <OdlIcon />
          {CopywrightInfo.map(({name, url}) => (
            <Text key={`cp_${url}_${name}`} as={Link} target="_blank" href={url} cursor="pointer" _hover={{color: 'white'}}>{name}</Text>
          ))}
        </Flex>
    </Flex>
    
  )
}

export default Copywright