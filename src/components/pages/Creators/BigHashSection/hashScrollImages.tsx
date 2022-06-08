import React, { useEffect, useState } from 'react';
import { Flex, Image } from '@chakra-ui/react';

const assetCount = 30;

const getImageId = () => {
	const assetCount = 30;
	const indices = Array.from(Array(assetCount).keys());

	return indices.map((index) => `assets/images/hash_glitch/HashGlitch_${index.toString().padStart(5, '0')}.jpg`);
};

const handleOnScroll = (
	animationHookReference: any,
	setCurrentAssetIndex: React.Dispatch<React.SetStateAction<number>>
) => {
	if (!animationHookReference.current) {
		return;
	}

	const { offsetTop } = animationHookReference.current;
	const animationBoundStart = offsetTop - window.scrollY + 2300;
    const animationEnd = offsetTop - window.scrollY - 10

	let assetIndex = Math.min(Math.floor(animationBoundStart / 30), assetCount);

    if (assetIndex === 0) {
        assetIndex = 1
    }
	setCurrentAssetIndex(assetIndex);

};

interface IHashupLogoBackground {
	animationHookReference: React.MutableRefObject<HTMLDivElement>;
}

export const HashScrollImages = ({ animationHookReference }: IHashupLogoBackground) => {
	const [currentAssetIndex, setCurrentAssetIndex] = useState(0);
	const imageUriArray = getImageId();
	useEffect(() => {
		window.removeEventListener('scroll', () => handleOnScroll(animationHookReference, setCurrentAssetIndex));
		window.addEventListener('scroll', () => handleOnScroll(animationHookReference, setCurrentAssetIndex), {
			passive: true,
		});

		return () =>
			window.removeEventListener('scroll', () => handleOnScroll(animationHookReference, setCurrentAssetIndex));
	}, []);
    
    console.log(imageUriArray[currentAssetIndex])

	return <Image src={imageUriArray[currentAssetIndex]} />;
};
