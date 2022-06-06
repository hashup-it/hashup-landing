import { Icon } from '@chakra-ui/react';
import React from 'react';

export const GrayCircleLauncher = () => {
	return (
		<Icon width="315px" height="315px" viewBox="0 0 315 315" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g filter="url(#filter0_f_2325_2727)">
				<circle cx="157.5" cy="157.5" r="122.5" stroke="#1B1B1B" stroke-width="21" />
			</g>
			<circle cx="157.5" cy="157.5" r="122.5" stroke="#1B1B1B" stroke-width="21" />
			<g opacity="0.4" filter="url(#filter1_f_2325_2727)">
				<circle cx="157.5" cy="157.5" r="122.5" stroke="black" stroke-width="4" />
			</g>
			<defs>
				<filter
					id="filter0_f_2325_2727"
					x="0.5"
					y="0.5"
					width="314"
					height="314"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="12" result="effect1_foregroundBlur_2325_2727" />
				</filter>
				<filter
					id="filter1_f_2325_2727"
					x="22"
					y="22"
					width="271"
					height="271"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="5.5" result="effect1_foregroundBlur_2325_2727" />
				</filter>
			</defs>
		</Icon>
	);
};

export default GrayCircleLauncher;
