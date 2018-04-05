import React from "react";

const Collection = props => (
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
		<path
			d="M12 2H6s-1 .204-1 1h8c0-.796-1-1-1-1zm2 3.204C14 4.408 13 4 13 4H5s-1 .408-1 1.204V6h10v-.796zM15 6v1H3V6s-1.025.396-1 1.408c.028 1.124.865 5.857 1 6.592.148.807 1 1 1 1h10s.851-.193 1-1c.135-.735 1.055-5.519 1-6.592C15.953 6.491 15 6 15 6zm-3 4c0 .441-.559 1-1 1H7c-.441 0-1-.559-1-1V9h1v1h4V9h1v1z"
			fillRule="nonzero"
		/>
	</svg>
);

export default Collection;
