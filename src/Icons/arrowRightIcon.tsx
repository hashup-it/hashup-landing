import { Icon } from '@chakra-ui/react';
import React from 'react';

export const ArrowRightIcon = ({ color, h, mt, ...props }: { color?: string; h?: string; mt?: string }) => {
	return (
		<Icon
			width={h ? h : '14px'}
			height={h ? h : '14px'}
			mt={mt}
			viewBox="0 0 14 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M2.91675 7H11.0834" stroke={color ? color : '#FF3F3F'} strokeWidth="1.4" strokeLinejoin="round" />
			<path
				d="M7 2.91675L11.0833 7.00008L7 11.0834"
				stroke={color ? color : '#FF3F3F'}
				strokeWidth="1.4"
				strokeLinejoin="round"
			/>
		</Icon>
	);
};

export default ArrowRightIcon;
