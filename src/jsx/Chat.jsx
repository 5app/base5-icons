import React from "react";

const Chat = props => (
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
		<path d="M7 12H5a2 2 0 0 1-2-2V6c0-1.103.895-1.999 2-2h8c1.105.001 2 .897 2 2v4a2.001 2.001 0 0 1-2 2h-2v2.667S9.003 12.02 7 12zm4-7s.891.121 1.931 1.126c.881.852 1.116 1.464 1.116 1.464s.073-1.231-.835-1.967C12.323 4.903 11 5 11 5z" />
	</svg>
);

export default Chat;
