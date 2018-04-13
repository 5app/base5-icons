import React from 'react';

const Fullscreen = props => (
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
		<path d="M14 12H8c-.96 0-2-1.04-2-2V4c0-.96 1.04-2 2-2h6c.96 0 2 1.04 2 2v6c0 .96-1.04 2-2 2zm0-7c0-.48-.52-1-1-1H9c-.48 0-1 .52-1 1v4c0 .48.52 1 1 1h4c.48 0 1-.52 1-1V5zM9 16H4c-.96 0-2-1.04-2-2V9h2v4c0 .48.52 1 1 1h4v2z" />
	</svg>
);

export default Fullscreen;
