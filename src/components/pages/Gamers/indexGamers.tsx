import React from 'react';
import { Flex } from '@chakra-ui/react';
import HeaderGamers from './Header/headerGamers';
import CommunityOwned from './CommunityOwned/communityOwned';
import PlatformInfo from './PlatformInfo/platformInfo';
import LauncherApp from './LauncherApp/launcherApp';
import StickySocials from '../../StickySocials/stickySocials';

export const IndexGamers = () => {
	return (
		<Flex direction="column">
			<StickySocials />
			<HeaderGamers />
			{/* <CommunityOwned /> */}
			<PlatformInfo />
			<LauncherApp />
		</Flex>
	);
};

export default IndexGamers;
