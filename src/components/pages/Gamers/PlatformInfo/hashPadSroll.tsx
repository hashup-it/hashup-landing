import React, { useEffect, useState, useRef } from 'react';
import { Flex, Image } from '@chakra-ui/react';

const assetCount = 24;

const getImageId = () => {
	const assetCount = 24;
	const indices = Array.from(Array(assetCount).keys());

	return indices.map((index) => `assets/images/hash_pad/iPad_${(index).toString().padStart(5, '0')}.jpg`);
};

const handleOnScroll = (
	animationHookReference: any,
	setCurrentAssetIndex: React.Dispatch<React.SetStateAction<number>>
) => {
	if (!animationHookReference.current) {
		return;
	}

	const pixelsFromBottom = window.innerHeight - animationHookReference.current.getBoundingClientRect().top
	const pixelsFromBottomLimit = window.innerHeight + animationHookReference.current.getBoundingClientRect().height

	const assetIndex = Math.min(Math.floor(pixelsFromBottom / (pixelsFromBottomLimit / assetCount) *1.2), assetCount);

	setCurrentAssetIndex(assetIndex);
};

export const HashPadSroll = () => {
	const [currentAssetIndex, setCurrentAssetIndex] = useState(0);

	const hashImageReference = useRef(null!);

	const imageUriArray = getImageId();
	useEffect(() => {
		window.removeEventListener('scroll', () => handleOnScroll(hashImageReference, setCurrentAssetIndex));
		window.addEventListener('scroll', () => handleOnScroll(hashImageReference, setCurrentAssetIndex), {
			passive: true,
		});

		return () =>
			window.removeEventListener('scroll', () => handleOnScroll(hashImageReference, setCurrentAssetIndex));
	}, []);
    
	return <Image src={imageUriArray[currentAssetIndex]} ref={hashImageReference} />;
};

