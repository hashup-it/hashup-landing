import mapboxgl from 'mapbox-gl';

export const addControlButtons = (map: any, position: String) => {
	map?.addControl(new mapboxgl.NavigationControl({ showCompass: false }), position);
};

export const addAttribution = (map: any, attributionText: string) => {
	map.addControl(
		new mapboxgl.AttributionControl({
			customAttribution: attributionText,
		})
	);
};
