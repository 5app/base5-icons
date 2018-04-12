import React from "react";

const Box = props => (
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
		<path d="M15 6v6.473A2.528 2.528 0 0 1 12.473 15H5.527A2.528 2.528 0 0 1 3 12.473V6h12zm-5 1.938H8v1.124h2V7.938zM2 3h14v2H2z" />
	</svg>
);

export default Box;
