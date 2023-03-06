import { Icon } from '@chakra-ui/react';
import React from 'react';

export const RedCircleLauncher = () => {
	return (
		<Icon
			width="673px"
			height="673px"
			viewBox="0 0 673 673"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g filter="url(#filter0_f_2325_2726)">
				<circle
					cx="336.5"
					cy="336.5"
					r="301.5"
					stroke="#FF3F3F"
					strokeWidth="21"
				/>
			</g>
			<circle
				cx="336.5"
				cy="336.5"
				r="301.5"
				stroke="#FF3F3F"
				strokeWidth="21"
			/>
			<g
				opacity="0.4"
				filter="url(#filter1_f_2325_2726)"
			>
				<circle
					cx="336.5"
					cy="336.5"
					r="301.5"
					stroke="#6D0000"
					strokeWidth="4"
				/>
			</g>
			<defs>
				<filter
					id="filter0_f_2325_2726"
					x="0.5"
					y="0.5"
					width="672"
					height="672"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood
						floodOpacity="0"
						result="BackgroundImageFix"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur
						stdDeviation="12"
						result="effect1_foregroundBlur_2325_2726"
					/>
				</filter>
				<filter
					id="filter1_f_2325_2726"
					x="22"
					y="22"
					width="629"
					height="629"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood
						floodOpacity="0"
						result="BackgroundImageFix"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur
						stdDeviation="5.5"
						result="effect1_foregroundBlur_2325_2726"
					/>
				</filter>
			</defs>
		</Icon>
	);
};

export default RedCircleLauncher;
