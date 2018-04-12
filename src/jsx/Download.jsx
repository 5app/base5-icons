import React from "react";

const Download = props => (
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
		<path d="M13.001 6h-3V2.98a.98.98 0 0 0-.98-.98h-.04a.98.98 0 0 0-.98.98V6h-3l4 3.56 4-3.56z" />
		<path d="M15.548 10.752L14 9h-1.489L14 11h-3v1.021a.979.979 0 0 1-.979.979H7.979A.979.979 0 0 1 7 12.021V11H4l1.49-2H4l-1.553 1.752S1.862 11.318 2 12v.997C2 14.103 2.897 15 4.003 15h9.988c.533 0 1.044-.212 1.421-.588.376-.377.588-.888.588-1.421V12c.161-.699-.452-1.248-.452-1.248z" />
	</svg>
);

export default Download;
