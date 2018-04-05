import React from "react";

const Trending = props => (
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
		<path d="M17 9l-1.793-1.793-4.5 4.5a1.1 1.1 0 0 1-.292.203c-.284.129-.62.117-.894-.032a1.123 1.123 0 0 1-.228-.171L7 9.414l-4.293 4.293-.052.049a1.06 1.06 0 0 1-.442.221 1.01 1.01 0 0 1-.355.013 1.01 1.01 0 0 1-.835-.777c-.02-.093-.027-.189-.02-.284a.998.998 0 0 1 .29-.636l5-5a1.1 1.1 0 0 1 .292-.203c.284-.129.62-.117.894.032.085.047.158.105.228.171L10 9.586l3.793-3.793L12 4h5v5z" />
	</svg>
);

export default Trending;
