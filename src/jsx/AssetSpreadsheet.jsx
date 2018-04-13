import React from 'react';

const AssetSpreadsheet = props => (
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
		<path d="M12 15v-2h3v2h-3zm0-5h3v2h-3v-2zm0-3h3v2h-3V7zm0-3h3v2h-3V4zM8 6V4h3v2H8zm-5 7h4v2H3v-2zm0-3h4v2H3v-2zm0-3h4v2H3V7zm0-3h4v2H3V4zm8 5H8V7h3v2zm0 3H8v-2h3v2zm0 3H8v-2h3v2z" />
	</svg>
);

export default AssetSpreadsheet;
