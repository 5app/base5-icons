import React from 'react';

const Tools = props => (
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
		<path d="M9 5a2 2 0 1 1-.001-3.999A2 2 0 0 1 9 5zM9 11a2 2 0 1 1-.001-3.999A2 2 0 0 1 9 11zM9 17a2 2 0 1 1-.001-3.999A2 2 0 0 1 9 17z" />
	</svg>
);

export default Tools;
