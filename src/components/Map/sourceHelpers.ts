export const addStoresSource = (map: any, data: any) => {
	console.log(data);
	map?.addSource('places', {
		type: 'geojson',
		data: data,
	});
};

export const addPulsingDotSource = (map: any, coordinates: any) => {
	map?.addSource('dot-point', {
		type: 'geojson',
		data: {
			type: 'FeatureCollection',
			features: [
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: coordinates, // icon position [lng, lat]
					},
				},
			],
		},
	});
};
