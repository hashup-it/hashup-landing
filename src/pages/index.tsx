import Header from '../components/Header/header';
import SectionOne from '../components/SectionOne/sectionOne';
import Advantages from '../components/Advantages/advantages';
import ChoosePath from '../components/ChoosePath/choosePath';
import GlobalContainer from '../components/GlobalContainter/globalContainer';
import Community from '../components/Community/community';
import { Flex } from '@chakra-ui/react';
import StickySocials from '../components/StickySocials/stickySocials';
import WhatYouGet from '../components/WhatYouGetSection/whatYouGet';
import Recommendations from '../components/Recommendations/recommendations';
import Ecosystem from '../components/Ecosystem/ecosystem';
import Roadmap from '../components/Roadmap/roadmap';
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Map from '../components/Map/Map';
import { StoresLogo } from '../components/StoresLogo/StoresLogo';

const Index = () => (
	<Flex>
		<GlobalContainer>
			<ParallaxProvider>
				<StickySocials />
				<Header />
				<Map />
				<StoresLogo />
				<SectionOne />
				<Advantages />
				<ChoosePath />
				<WhatYouGet />
				<Recommendations />
				<Ecosystem />
				<Roadmap />
				<Community />
			</ParallaxProvider>
		</GlobalContainer>
	</Flex>
);

export default Index;
