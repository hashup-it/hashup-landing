import { Icon } from '@chakra-ui/react';
import React from 'react';

export interface IMobileLeftIcon {
	onClick: () => void
	cursor: string
}

export const MobileLeftIcon = ({onClick, cursor}: IMobileLeftIcon ) => {
	return (

		<Icon width="72px" height="72px" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick} cursor={cursor}>
			<path
				d="M45 54L27 36L45 18"
				stroke="white"
				stroke-width="3"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</Icon>
	);
};

export default MobileLeftIcon;
