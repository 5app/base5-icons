import React from "react";

const Favourite = props => (
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
		<path
			d="M11.036 2A1.965 1.965 0 0 1 13 3.964V17l-4-4-4 4V3.959A1.956 1.956 0 0 1 6.959 2h4.077z"
			fillRule="nonzero"
		/>
	</svg>
);

export default Favourite;
