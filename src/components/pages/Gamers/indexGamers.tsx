import React from 'react'
import { Flex } from '@chakra-ui/react'
import HeaderGamers from './Header/headerGamers'
import CommunityOwned from './CommunityOwned/communityOwned'
import PlatformInfo from './PlatformInfo/platformInfo'
import Licenses from './Licenses/licenses'
import LauncherApp from './LauncherApp/launcherApp'

export const IndexGamers = () => {
  return (
    <Flex direction='column'>
      <HeaderGamers />
      <CommunityOwned />
      <PlatformInfo />
      <Licenses />
      <LauncherApp />
    </Flex>
  )
}

export default IndexGamers