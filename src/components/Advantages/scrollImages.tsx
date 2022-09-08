import React, { useEffect, useState } from 'react';
import { Flex, Image } from '@chakra-ui/react';

const assetCount = 75;

const getImageUri = () => {
	const assetCount = 75;
	const indices = Array.from(Array(assetCount).keys());
	return indices.map((index) => `/assets/images/hash_sequence/hash${index.toString().padStart(2, '0')}.jpg`);
};

const handleOnScroll = (
	animationHookReference: any,
	setCurrentAssetIndex: React.Dispatch<React.SetStateAction<number>>
) => {
	if (!animationHookReference.current) {
		return;
	}

	const { offsetTop } = animationHookReference.current;
	const animationBoundEnd = offsetTop - window.scrollY + 1000;

	const assetIndex = Math.min(Math.floor(animationBoundEnd / 30), assetCount);
	setCurrentAssetIndex(assetIndex);
};

interface IHashupLogoBackground {
	animationHookReference: React.MutableRefObject<HTMLDivElement>;
}

export const ScrollImages = ({ animationHookReference }: IHashupLogoBackground) => {
	const [currentAssetIndex, setCurrentAssetIndex] = useState(0);

	const imageUriArray = getImageUri();

	useEffect(() => {
		window.removeEventListener('scroll', () => handleOnScroll(animationHookReference, setCurrentAssetIndex));
		window.addEventListener('scroll', () => handleOnScroll(animationHookReference, setCurrentAssetIndex), {
			passive: true,
		});

		return () =>
			window.removeEventListener('scroll', () => handleOnScroll(animationHookReference, setCurrentAssetIndex));
	}, []);

	return <Flex>{<Image src={imageUriArray[currentAssetIndex]} />}</Flex>;
};
