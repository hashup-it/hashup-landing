import React from 'react'
import { Flex } from '@chakra-ui/react'
import HeaderInvestors from './Header/headerCreators'
import DescriptionCreators from './Description/descriptionCreators'
import HowTo from './HowTo/howTo'

export const IndexCreators = () => {
  return (
    <Flex direction='column'>
        <HeaderInvestors/>
        <DescriptionCreators/>
        <HowTo />
    </Flex>
  )
}

export default IndexCreators