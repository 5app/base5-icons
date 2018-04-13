import React from 'react';

const Spinnerdot = props => (
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
		<circle cx={14} cy={14} r={2} />
	</svg>
);

export default Spinnerdot;
