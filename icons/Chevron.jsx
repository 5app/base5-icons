import React from "react";

const Chevron = props => (
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
		<path d="M5 7h8l-4 5-4-5z" />
	</svg>
);

export default Chevron;
