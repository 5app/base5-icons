import React from "react";

const External = props => (
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
		<path d="M11 6c-6.156.039-8 8-8 8 1.599-2.156 3.641-3.972 8-4v3l5-5-5-5v3z" />
	</svg>
);

export default External;
