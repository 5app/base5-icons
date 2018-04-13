import React from 'react';

const AssetText = props => (
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
		<path d="M3 12v-2h12v2H3zm0-5h12v2H3V7zm0-3h12v2H3V4zm8 11H3v-2h8v2z" />
	</svg>
);

export default AssetText;
