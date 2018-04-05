import React from "react";

const Search = props => (
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
		<path d="M10.759 12.168A4.964 4.964 0 0 1 8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.306 1.968-.832 2.759l.051.046 2.488 2.488a1 1 0 0 1-1.414 1.414l-2.488-2.488-.046-.051zM8 4.488A3.514 3.514 0 0 1 11.512 8 3.514 3.514 0 0 1 8 11.512 3.514 3.514 0 0 1 4.488 8 3.514 3.514 0 0 1 8 4.488zM8 5s-.038-.009 1 1c.879.854 1.805 2 1.805 2s-.21-1.187-1-2A3.73 3.73 0 0 0 8 5z" />
	</svg>
);

export default Search;
