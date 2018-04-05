import React from "react";

const AssetDefault = props => (
	<svg
		viewBox="0 0 18 19"
		fillRule="evenodd"
		clipRule="evenodd"
		strokeLinejoin="round"
		strokeMiterlimit={1.414}
		width="1em"
		height="1em"
		{...props}
	>
		<path fill="none" d="M0 .037h18v18H0z" />
		<path d="M14 6.633a4.596 4.596 0 0 0-4.596-4.596H4.972A.972.972 0 0 0 4 3.009v12.055c0 .537.435.973.972.973h8.056a.973.973 0 0 0 .972-.973V6.633zm-1 .402a3.997 3.997 0 0 0-3.998-3.998H9v4h4v-.002z" />
	</svg>
);

export default AssetDefault;
