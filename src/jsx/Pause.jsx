import React from "react";

const Pause = props => (
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
		<path d="M5 4h3v10H5V4zm5 0h3v10h-3V4z" />
	</svg>
);

export default Pause;
