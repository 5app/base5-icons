import React from 'react';

const AssetLink = props => (
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
		<path d="M10.856 10.918l1.664 3.73c.166.409-.051.866-.486 1.023l-.786.283c-.434.156-.921-.048-1.088-.456l-1.485-3.645L6 13V3l7 7-2.144.918z" />
	</svg>
);

export default AssetLink;
