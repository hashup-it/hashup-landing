import { Icon } from '@chakra-ui/react';
import React from 'react';

export interface IElipseMobileIcon {
	opacity: string;
	onClick: () => void;
}

export const ElipseMobileIcon = ({ opacity, onClick }: IElipseMobileIcon) => {
	return (
		<Icon
			width="6px"
			height="6px"
			viewBox="0 0 6 6"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			opacity={opacity}
			onClick={onClick}
		>
			<circle
				cx="3"
				cy="3"
				r="3"
				fill="white"
			/>
		</Icon>
	);
};

export default ElipseMobileIcon;
