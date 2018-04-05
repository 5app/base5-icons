import React from "react";

const AssetEbook = props => (
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
		<path d="M2 15V4h5.379A2.16 2.16 0 0 1 9 4.734 2.16 2.16 0 0 1 10.621 4H16v11h-5.386A2.153 2.153 0 0 0 9 15.729 2.153 2.153 0 0 0 7.386 15H2zm6-8.214A1.785 1.785 0 0 0 6.214 5H2.857v7.21c0 .475.189.93.524 1.266.336.335.792.524 1.266.524H8V6.786zM15.143 5h-3.364A1.783 1.783 0 0 0 10 6.779V14h3.393a1.75 1.75 0 0 0 1.75-1.75V5z" />
	</svg>
);

export default AssetEbook;
