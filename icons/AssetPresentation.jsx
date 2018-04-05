import React from "react";

const AssetPresentation = props => (
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
		<path d="M8 10h5.976A5.501 5.501 0 0 1 8.5 15 5.502 5.502 0 0 1 3 9.5a5.501 5.501 0 0 1 5-5.476V10z" />
		<path d="M10 3a5.502 5.502 0 0 1 4.976 4.976H10V3z" />
	</svg>
);

export default AssetPresentation;
