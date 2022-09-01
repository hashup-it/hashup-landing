import { Icon } from '@chakra-ui/react';
import React from 'react';

export interface ICloseMenuIcon {
	onClick: () => void;
	cursor: string;
}

export const CloseMenuIcon = ({ onClick, cursor }: ICloseMenuIcon) => {
	return (
		<Icon
			width="21px"
			height="20px"
			viewBox="0 0 21 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			onClick={onClick}
			cursor={cursor}
		>
			<path d="M1.38464 1L19.3846 19" stroke="#FF3F3F" stroke-width="2" />
			<path d="M19.3846 1L1.38464 19" stroke="#FF3F3F" stroke-width="2" />
		</Icon>
	);
};

export default CloseMenuIcon;
