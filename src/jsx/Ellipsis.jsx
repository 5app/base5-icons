import React from 'react';

const Ellipsis = props => (
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
		<path d="M15 11a2 2 0 1 1-.001-3.999A2 2 0 0 1 15 11zM9 11a2 2 0 1 1-.001-3.999A2 2 0 0 1 9 11zM3 11a2 2 0 1 1-.001-3.999A2 2 0 0 1 3 11z" />
	</svg>
);

export default Ellipsis;
