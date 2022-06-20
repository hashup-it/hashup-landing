import React, { useEffect, useState } from 'react';
import { Flex, Image } from '@chakra-ui/react';

const assetCount = 24;

const getImageId = () => {
	const assetCount = 24;
	const indices = Array.from(Array(assetCount).keys());

	return indices.map((index) => `assets/images/hash_cartridges/cartridge_${index.toString().padStart(5, '0')}.jpg`);
};

const handleOnScroll = (
	animationHookReference: any,
	setCurrentAssetIndex: React.Dispatch<React.SetStateAction<number>>
) => {
	if (!animationHookReference.current) {
		return;
	}

	const { offsetTop } = animationHookReference.current;
  	const animationBoundEnd = offsetTop - window.scrollY + 400;

  const assetIndex = Math.min(Math.floor(animationBoundEnd / 30), assetCount);
  setCurrentAssetIndex(assetIndex);

	setCurrentAssetIndex(assetIndex);
};

interface IHashupLogoBackground {
	animationHookReference: React.MutableRefObject<HTMLDivElement>;
}

export const CartridgesScroll = ({ animationHookReference }: IHashupLogoBackground) => {
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
    
	return <Image src={imageUriArray[currentAssetIndex]} />;
};
