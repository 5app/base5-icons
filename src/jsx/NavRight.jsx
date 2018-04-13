import React from 'react';

const NavRight = props => (
	<svg
		viewBox="0 0 18 18"
		fillRule="evenodd"
		clipRule="evenodd"
		strokeLinejoin="round"
		strokeMiterlimit={1.414}
		width="1em"
		height="1em"
		{...props}
	>
		<path fill="none" d="M0 0h18v18H0z" />
		<path d="M5 4l9 5-9 5V4z" />
	</svg>
);

export default NavRight;
