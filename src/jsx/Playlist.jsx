import React from 'react';

const Playlist = props => (
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
		<path d="M4 12c.002 0 1 .021 1 1 0 .98-1 1-1 1H3s-1-.014-1-1c0-.985.998-1 1-1h1zm0-4c.002 0 1 .021 1 1s-.998 1-1 1H3s-1-.014-1-1c0-.985.998-1 1-1h1zm0-4c.002 0 1 .021 1 1s-.998 1-1 1H3s-1-.014-1-1c0-.985.998-1 1-1h1zM15 12c.002 0 1 .021 1 1 0 .98-1 1-1 1H7s-1-.014-1-1c0-.985.998-1 1-1h8zm-2-4c.002 0 1 .021 1 1s-.998 1-1 1H7s-1-.014-1-1c0-.985.998-1 1-1h6zm2-4c.002 0 1 .021 1 1s-.998 1-1 1H7s-1-.014-1-1c0-.985.998-1 1-1h8z" />
	</svg>
);

export default Playlist;
