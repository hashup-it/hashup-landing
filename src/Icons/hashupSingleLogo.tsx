import { Icon } from '@chakra-ui/react';
import React, { FC } from 'react';

interface Props {
	h?: string;
	zIndex?: string;
	position?: any;
	top?: string;
	right?: string;
	mr?: string;
	mt?: string;
}

export const HashupSingleLogo: FC<Props> = ({ h, zIndex, position, top, right, mr, mt, ...props }) => {
	return (
		<Icon
			width={h ? h : '19px'}
			height={h ? h : '19px'}
			viewBox="0 0 19 19"
			fill="none"
			zIndex={zIndex}
			position={position}
			top={top}
			right={right}
			mr={mr}
			mt={mt}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M5.13044 15.1837L2.52489 14.4856L7.2431 3.06473C7.38553 2.71997 7.70801 2.48314 8.07959 2.45041L10.0951 2.27288C10.2443 2.25974 10.3545 2.4092 10.2978 2.54782L5.13044 15.1837Z"
				fill="white"
			/>
			<path
				d="M11.2781 15.9157C11.149 16.2294 10.8697 16.4563 10.5362 16.5183L8.34072 16.9267C8.18512 16.9556 8.05914 16.8009 8.119 16.6544L13.4137 3.69529L16.0189 4.39334L11.2781 15.9157Z"
				fill="white"
			/>
			<path
				d="M9.94442 13.7323L10.6426 11.1267L14.566 12.178L13.4728 14.6777L9.94442 13.7323Z"
				fill="white"
			/>
			<path
				d="M3.76777 6.69501L4.82598 4.18635L7.79789 4.98267L7.09984 7.58783L3.76777 6.69501Z"
				fill="white"
			/>
			<path
				d="M7.76537 7.8247L8.8321 5.31833L14.593 6.80355L13.4357 9.28564L7.76537 7.8247Z"
				fill="white"
			/>
			<path
				d="M14.482 10.2108L15.7952 7.12551L16.4778 7.30843L16.3446 10.7099L14.482 10.2108Z"
				fill="#FF3F3F"
			/>
			<path
				d="M5.46102 12.5311L6.74589 10.0827L10.8176 11.1738L9.76863 13.6853L5.46102 12.5311Z"
				fill="white"
			/>
			<path
				d="M2.25741 11.672L2.44092 8.26392L4.13335 8.7174L2.83465 11.8267L2.25741 11.672Z"
				fill="#FF3F3F"
			/>
			<path
				d="M6.75347 7.5111L2.52793 14.4834L5.53026 7.17691L6.75347 7.5111Z"
				fill="url(#paint0_linear_1755_4167)"
			/>
			<path
				d="M11.8048 11.4265L15.9789 4.42223L12.9974 11.7564L11.8048 11.4265Z"
				fill="url(#paint1_linear_1755_4167)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_1755_4167"
					x1="5.76684"
					y1="7.75986"
					x2="4.01354"
					y2="11.3269"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#D8D8D8" />
					<stop
						offset="1"
						stopColor="white"
						stopOpacity="0"
					/>
				</linearGradient>
				<linearGradient
					id="paint1_linear_1755_4167"
					x1="12.8768"
					y1="11.6447"
					x2="14.8611"
					y2="6.31826"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#DFDFDF" />
					<stop
						offset="1"
						stopColor="white"
						stopOpacity="0"
					/>
				</linearGradient>
			</defs>
		</Icon>
	);
};

export default HashupSingleLogo;
