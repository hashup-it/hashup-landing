import React from 'react'
import { Flex } from '@chakra-ui/react'
import HeaderGamers from './Header/headerGamers'
import CommunityOwned from './CommunityOwned/communityOwned'
import PlatformInfo from './PlatformInfo/platformInfo'

export const IndexGamers = () => {
  return (
    <Flex direction='column'>
      <HeaderGamers />
      <CommunityOwned />
      <PlatformInfo />
    </Flex>
  )
}

export default IndexGamers