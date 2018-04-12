import React from "react";

const AssetDiagram = props => (
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
		<path d="M5 13h2v2H5zM2 9h2v6H2zM8 5h2v10H8zM11 3h2v12h-2zM14 7h2v8h-2z" />
	</svg>
);

export default AssetDiagram;
