import { Icon } from '@chakra-ui/react';
import React from 'react';

interface IHamburgerMenu {
	onClick: void;
}

export const HamburgerMenu = ({ onClick, ...props }) => {
	return (
		<Icon
			width="26px"
			height="19px"
			viewBox="0 0 26 19"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			onClick={onClick}
		>
			<rect y="0.0454102" width="16" height="2" fill="#FF3F3F" />
			<rect y="8.04541" width="26" height="2" fill="#FF3F3F" />
			<rect y="16.0454" width="26" height="2" fill="#FF3F3F" />
		</Icon>
	);
};

export default HamburgerMenu;
