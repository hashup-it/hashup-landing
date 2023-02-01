import { getWindowDimensions } from './responsiveHelpers';
import { addPulsingDotLayer, addStoreLayer } from './layerHelpers';
import { addPulsingDotSource, addStoresSource } from './sourceHelpers';
import AnimatedPopup from 'mapbox-gl-animated-popup';

export const onLoad = (map: any, pulsingDot: any, setStoreInfo: any, setLeftSectionVisible: any, center: any, data: any) => {
    
    const storesData = { type: 'FeatureCollection', features: [...data] };

    //screen width
    const { width } = getWindowDimensions();

    map?.on('load', () => {

        //zoom out when refreshing
        setTimeout(() => {
            const target = {
                zoom: 1.8,
                center: center
            };
            map?.flyTo(
                {
                    ...target,
                    duration: 3000,
                    essential: true
                }
            )
        }, 1000);

        //add stores data
        addStoresSource(map, storesData);

        //add stores points on the map
        addStoreLayer(map);

        //adding pulsing dot image
        map?.addImage(
            'pulsing-dot',
            pulsingDot,
            {
                pixelRatio: 2
            }
        );

        // //create a popup, but don't add it to the map yet
        // const popup = new Popup({
        //     closeButton: false,
        //     closeOnClick: false,
        //     className: 'popup',
        // });

        const animatedPopup = new AnimatedPopup({
            openingAnimation: {
                duration: 900,
                easing: 'easeOutElastic',
                transform: 'transform'
            },
            closingAnimation: {
                duration: 300,
                easing: 'easeInBack',
                transform: 'transform'
            },
            closeButton: false,
            offset: 5
        }).addClassName('popup');

        //closing store details
        onMapClick(map, setLeftSectionVisible, animatedPopup)

        //opening store details
        onStoreClick(map, setStoreInfo, setLeftSectionVisible, animatedPopup)
      
        //on bigger devices show popup on store hover
        if (width >= 1280) {
            onStoreMouseEnter(map, animatedPopup);
            onStoreMouseLeave(map, animatedPopup);
        }
    });
}

//click on the map area (close store details)
const onMapClick = (map: any, setLeftSectionVisible: any, popup: any) => {

    //screen width
    const { width } = getWindowDimensions();

    map?.on('click', () => {
        setLeftSectionVisible(false);
        removePulsingDot(map);
        if (width < 1280)
            popup.remove();
    })
}

//click on the store (open store details)
const onStoreClick = (map: any, setStoreInfo: any, setLeftSectionVisible: any, popup: any) => {

    //screen width
    const { width } = getWindowDimensions();

    map?.on('click', 'places', (e) => {

        e.preventDefault()
        const description = e.features[0].properties.description;
        const storeName = e.features[0].properties?.name
        const logo = e.features[0].properties?.logo;
        const city = e.features[0].properties?.city
        const country = e.features[0].properties?.country;
        const storeLink = e.features[0].properties?.link;
        const coordinates = e.features[0]?.geometry?.coordinates.slice();
        const marketplace = e.features[0]?.properties?.owner_id;

        //in order to create a new one in a different place
        removePulsingDot(map);

        if (width < 1280) {
            lowWidthPopupShow(map, e, popup, coordinates, storeName, logo, country, city, storeLink)
        }
  
        addPulsingDotSource(map, coordinates);

        addPulsingDotLayer(map);
           
        //fix position when left section visible
        //in order to set store in the center of the map
        if(width > 1320)
            coordinates[0] += 3.2
        else if (width >= 1280)
             coordinates[0] += 2.5
        

        const storeInfo = {
            description: description,
            name: storeName,
            logo: logo,
            city: city,
            country: country,
            link: storeLink,
            marketplace: marketplace,
        };

        //opening left section and displaying store info
        setStoreInfo(storeInfo);
        setLeftSectionVisible(true);

        //center the view on the store
        const target = { zoom: 5.7, center: coordinates }
        map?.flyTo({ ...target, duration: 1500, essential: true })
    })
}

//on store hover
const onStoreMouseEnter = (map: any, popup: any) => {

    map?.on('mouseenter', 'places', (e) => {

        //change the cursor style as a UI indicator
        map.getCanvas().style.cursor = 'pointer';
 
        // Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();
        const storeName = e.features[0].properties?.name
        const logo = e.features[0].properties?.logo;
        const country = e.features[0].properties?.country;
        const city = e.features[0].properties?.city;
 
        //ensure that if the map is zoomed out such that multiple
        //copies of the feature are visible, the popup appears
        //over the copy being pointed to
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180)
        {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
      
        //content of the popup
        const popupHtml = `
            <div style="display: flex; gap: 10px; align-items: center; padding: 0 10px;">
                <img src="${logo}" style="width: 30px"/>
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <strong>${storeName}</strong>
                    <p style="color: white; font-size: 10px; line-height: 80%">${city}, ${country}</p>
                </div>
            </div>`
 
        //popup display
        popup.setLngLat(coordinates).setHTML(popupHtml).addTo(map);
    });
}

//on mouse leave the store
const onStoreMouseLeave = (map: any, popup: any) => {

    map?.on('mouseleave', 'places', () => {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
}

//remove pulsing dot object in order to create a new one in a different place
const removePulsingDot = (map: any) => {

    //checkt if pulsing dot layer exists
    //if it exists remove it
    if (map?.getLayer("layer-with-pulsing-dot"))
    {
        map?.removeLayer("layer-with-pulsing-dot");
    }

    //checkt if pulsing dot source exists
    //if it exists remove it    
    if (map?.getSource("dot-point")) {
        map?.removeSource("dot-point");
    }
}

const lowWidthPopupShow = (
    map: any,
    e: any,
    popup: any,
    coordinates: any,
    storeName: string,
    logo: string,
    country: string,
    city: string,
    storeLink: string) => {
    
    //ensure that if the map is zoomed out such that multiple
    //copies of the feature are visible, the popup appears
    //over the copy being pointed to
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180)
    {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
      
    //content of the popup
    const popupHtml = `
        <a href="${storeLink}" style="text-decoration: none; display: flex; gap: 10px; align-items: center; padding: 0 10px;">
            <img src="${logo}" style="width: 30px"/>
            <div style="display: flex; flex-direction: column; align-items: center;">
                <strong>${storeName}</strong>
                <p style="color: white; font-size: 10px; line-height: 110%">${city}, ${country}</p>
                <p style="color: white; font-size: 10px;">CLICK TO GO TO STORE</p>
            </div>
        </a>`
 
    //popup display
    popup.setLngLat(coordinates).setHTML(popupHtml).addTo(map);
}