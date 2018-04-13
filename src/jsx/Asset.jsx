import React from 'react';

const Asset = props => (
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
		<path d="M14 6.596A4.596 4.596 0 0 0 9.404 2H4.972A.972.972 0 0 0 4 2.972v12.056c0 .537.435.972.972.972h8.056a.972.972 0 0 0 .972-.972V6.596zM13 7a4 4 0 0 0-4-4v4h4z" />
	</svg>
);

export default Asset;
