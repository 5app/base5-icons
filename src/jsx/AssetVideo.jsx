import React from 'react';

const AssetVideo = props => (
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
		<path d="M11 9H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2v1H7a1 1 0 0 0-1 1H3V3h12v8l-3.231-1.616A.984.984 0 0 0 11 9zM5 4H4v2h1V4zm0 4H4v2h1V8zm0 4H4v2h1v-2zm8-3h1V8h-1v1zm0-3h1V4h-1v2zm-1-1a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5zm3 9.5v.5h-1l-4 2v-7l7 3.5-2 1z" />
	</svg>
);

export default AssetVideo;
