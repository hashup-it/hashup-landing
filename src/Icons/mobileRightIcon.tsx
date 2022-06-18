import { Icon } from '@chakra-ui/react';
import React from 'react';

export interface IMobileRightIcon {
	onClick?: () => void
	cursor: string,
	opacity?: string
}

export const MobileRightIcon = ({onClick, cursor, opacity} : IMobileRightIcon ) => {
	return (
		<Icon width="72px" height="72px" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick} cursor={cursor} opacity={opacity}>
			<path
				d="M27 18L45 36L27 54"
				stroke="white"
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Icon>
	);
};

export default MobileRightIcon;
