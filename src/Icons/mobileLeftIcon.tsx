import { Icon } from '@chakra-ui/react';
import React from 'react';

export interface IMobileLeftIcon {
	onClick?: () => void
	cursor: string
	opacity?: string
	width: string
	height: string
}

export const MobileLeftIcon = ({onClick, cursor, opacity, width, height}: IMobileLeftIcon ) => {
	return (

		<Icon width={width} height={height} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick} cursor={cursor} opacity={opacity}>
			<path
				d="M45 54L27 36L45 18"
				stroke="white"
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Icon>
	);
};

export default MobileLeftIcon;
