import React from 'react';

const Flag = props => (
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
		<path d="M14.95 5.538c-6.221 9.569-4.091-.183-9.35 4.483L6.795 15H5.451L3.01 4.837l1.232-.469c5.895-4.563 2.816 4.106 10.416.885.242-.103.436.064.292.285z" />
	</svg>
);

export default Flag;
