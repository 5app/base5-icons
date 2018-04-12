import React from "react";

const Upload = props => (
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
		<path d="M8 12H5c-1.399 0-3.005-1.14-3.005-2.485s1.134-2.434 2.533-2.434c.101 0 .201.007.3.019a3.465 3.465 0 0 1-.04-.521C4.788 4.603 6.454 3 8.512 3c1.685 0 3.107 1.076 3.566 2.553.185-.031.374-.048.566-.048 1.851 0 3.351 1.443 3.351 3.223C15.995 10.507 13.851 12 12 12h-2V9h2L9 6 6 9h2v3z" />
	</svg>
);

export default Upload;
