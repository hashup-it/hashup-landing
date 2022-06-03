import React from 'react'
import { Flex } from '@chakra-ui/react'
import HeaderGamers from './Header/headerGamers'
import CommunityOwned from './CommunityOwned/communityOwned'

export const IndexGamers = () => {
  return (
    <Flex direction='column'>
      <HeaderGamers />
      <CommunityOwned />
    </Flex>
  )
}

export default IndexGamers