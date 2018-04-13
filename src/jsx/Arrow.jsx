import React from 'react';

const Arrow = props => (
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
		<path d="M6 8h9c.003 0 1 .005 1 1s-.997 1-1 1H6v3L2 9l4-4v3z" />
	</svg>
);

export default Arrow;
