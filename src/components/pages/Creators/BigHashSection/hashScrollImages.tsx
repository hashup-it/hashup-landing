import React, { useEffect, useRef, useState } from 'react';
import { Flex, Image } from '@chakra-ui/react';

const assetCount = 29;

const getImageId = () => {
	const indices = Array.from(Array(assetCount).keys());

	return indices.map(
		(index) => `assets/images/hash_glitch/HashGlitch_${(index + 1).toString().padStart(5, '0')}.jpg`
	);
};

const handleOnScroll = (
	animationHookReference: any,
	setCurrentAssetIndex: React.Dispatch<React.SetStateAction<number>>
) => {
	if (!animationHookReference.current) {
		return;
	}

	const pixelsFromBottom = window.innerHeight - animationHookReference.current.getBoundingClientRect().top;
	const pixelsFromBottomLimit = window.innerHeight + animationHookReference.current.getBoundingClientRect().height;

	const assetIndex = Math.min(Math.floor(pixelsFromBottom / (pixelsFromBottomLimit / assetCount)), assetCount);

	setCurrentAssetIndex(assetIndex);
};

export const HashScrollImages = () => {
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

	return <Image objectFit="cover" src={imageUriArray[currentAssetIndex]} ref={hashImageReference} />;
};
