import type { NextPage } from 'next';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useRef, useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { StoreInfo } from './StoreInfo/StoreInfo';
import { createPulsingDot } from './objectHelpers';
import { addAttribution, addControlButtons } from './controlHelpers';
import { onLoad } from './eventHelper';
import axios from 'axios';
import { getMiddle } from '../../utils/math';

const Map: NextPage = () => {
	//map element
	const map1 = useRef<mapboxgl.Map | any>(null);
	const pulseDotSize = 150;
	// TODO: fetch AOT
	const center = getMiddle([
		[21.017532, 52.237049],
		[103.819836, 1.352083],
	]);

	//information about the store
	const [storeInfo, setStoreInfo] = useState<any>();

	//visibility of the store details
	const [leftSectionVisible, setLeftSectionVisible] = useState<boolean>(false);

	useEffect(() => {
		axios.get('https://open-api.hashup.it/v1/stores/').then((res: any) => {
			const storeData = res.data;
			storeData.forEach((store: any) => {
				store.properties = { ...store.properties, owner_id: store.owner_id };
			});
			storeData.push({
				properties: {
					name: 'HashSwift',
					logo: 'https://svgshare.com/i/qtR.svg',
					description: '',
					city: 'Sosnowiec',
					country: 'Poland',
					link: 'https://dynamic-semifreddo-f4a2a3.netlify.app/',
					owner_id: '0x714ef5c429ce9bdd0cac3631d30474bd04e954dc',
				},
				geometry: {
					coordinates: ['19.104078', '50.286263'],
					type: 'Point',
				},
				cms: {},
				_id: '1',
				__v: 0,
				chain_id: 137,
				type: 'Feature',
			});
			storeData.push({
				properties: {
					name: '#Store',
					logo: 'https://svgshare.com/i/qtR.svg',
					description: '',
					city: 'Łódź',
					country: 'Poland',
					link: 'https://epic-games-clone-lac.vercel.app/',
					owner_id: '0x714ef5c429ce9bdd0cac3631d30474bd04e954dc',
				},
				geometry: {
					coordinates: ['19.457216', '51.759445'],
					type: 'Point',
				},
				cms: {},
				_id: '1',
				__v: 0,
				chain_id: 137,
				owner_id: '0x714ef5c429ce9bdd0cac3631d30474bd04e954dc',
				type: 'Feature',
			});
			storeData.push({
				properties: {
					name: '#Steam',
					logo: 'https://svgshare.com/i/qtR.svg',
					description: '',
					city: 'Radom',
					country: 'Poland',
					link: 'https://steam-hashup.vercel.app/',
					owner_id: '0x714ef5c429ce9bdd0cac3631d30474bd04e954dc',
				},
				geometry: {
					coordinates: ['21.1471333', '51.4027236'],
					type: 'Point',
				},
				cms: {},
				_id: '1',
				__v: 0,
				chain_id: 137,
				owner_id: '0x714ef5c429ce9bdd0cac3631d30474bd04e954dc',
				type: 'Feature',
			});
			storeData.push({
				properties: {
					name: 'HashUp Chat Store',
					logo: 'https://svgshare.com/i/qtR.svg',
					description: '',
					city: 'San Francisco',
					country: 'USA',
					link: 'https://hashup-chat-store-beta.vercel.app/',
					owner_id: '0x714ef5c429ce9bdd0cac3631d30474bd04e954dc',
				},
				geometry: {
					coordinates: ['-122.431297', '37.773972'],
					type: 'Point',
				},
				cms: {},
				_id: '1',
				__v: 0,
				chain_id: 137,
				owner_id: '0x714ef5c429ce9bdd0cac3631d30474bd04e954dc',
				type: 'Feature',
			});

			if (typeof map1.current === 'string' || map1.current instanceof HTMLElement) {
				mapboxgl.accessToken =
					'pk.eyJ1IjoicHJvc3NhIiwiYSI6ImNsZGNid2Y1MzA5NzQzbnE1b2w0NWt3cnAifQ.ZR0ZY3eBKsD7MU100juXbQ';

				if (!mapboxgl.supported()) {
					alert('Your browser does not support Mapbox GL');
				} else {
					//creating a map
					map1.current = new mapboxgl.Map({
						container: map1?.current as string | HTMLElement,
						style: 'mapbox://styles/prossa/cldcb5xx7009t01li9wrg6kan',
						center: [21, 52.25],
						zoom: 6,
						minZoom: 1.5,
						maxZoom: 8,
						attributionControl: false,
						logoPosition: 'top-left',
						testMode: true,
					});

					//disable map rotation using right click + drag
					map1?.current?.dragRotate.disable();

					//disable map rotation using touch rotation gesture
					map1?.current?.touchZoomRotate.disableRotation();

					//pulsingDot object
					const pulsingDot = createPulsingDot(map1?.current, pulseDotSize);

					//add control buttons and info about creators
					addControlButtons(map1?.current, 'bottom-left');
					addAttribution(map1?.current, 'Map design by © HashUp');

					//handle on map load event (and all of the interaction)
					onLoad(map1?.current, pulsingDot, setStoreInfo, setLeftSectionVisible, center, storeData);
				}
			}
		});
	}, [map1?.current, leftSectionVisible]);

	return (
		<Flex
			p="6rem 0 0 0"
			flexDirection="column"
			textAlign="center"
			gap="20px"
		>
			<Text
				fontSize={['32px', '46px', '64px', '70px']}
				fontWeight="700"
			>
				See all of the stores<strong>!</strong>
			</Text>

			<Flex
				h="80vh"
				w="100vw"
				textAlign="center"
				position="relative"
				justifyContent="end"
			>
				<StoreInfo
					storeName={storeInfo?.name}
					logo={storeInfo?.logo}
					city={storeInfo?.city}
					country={storeInfo?.country}
					description={storeInfo?.description}
					storeLink={storeInfo?.link}
					display={leftSectionVisible}
					marketplace={storeInfo?.marketplace}
				/>

				<Flex
					h="80vh"
					w={{ base: '100vw', xl: leftSectionVisible ? '70vw' : '100vw' }}
					transition="0.2s"
				>
					<Flex
						w="100%"
						h="100%"
						color="black"
						ref={map1}
					/>
				</Flex>
			</Flex>
		</Flex>
	);
};
export default Map;
