export const addStoreLayer = (map: any) => {
	map?.addLayer({
		id: 'places',
		type: 'circle',
		source: 'places',
		paint: {
			'circle-color': '#ff3f3f',
			'circle-radius': 5,
			'circle-stroke-width': 2,
			'circle-stroke-color': '#ffffff',
		},
	});
};

export const addPulsingDotLayer = (map: any) => {
	map?.addLayer({
		id: 'layer-with-pulsing-dot',
		type: 'symbol',
		source: 'dot-point',
		layout: {
			'icon-image': 'pulsing-dot',
		},
	});
};
