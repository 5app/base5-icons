import React from "react";

const AssetImage = props => (
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
		<path d="M2 14.001l4-5 3 2L12 7l4 7.001H2zm6.034-9.028c-.874.151-.903.996-1.534.997-.691.001-.769-.82-1.534-.997C4.204 4.797 3 5.001 3 5.001s.885-1.055 2-1c.632.031 1.023.577 1.249 1.046A.485.485 0 0 1 6.5 4.97c.093 0 .176.032.251.077.226-.469.617-1.015 1.249-1.046 1.115-.055 2 1 2 1s-1.195-.161-1.966-.028z" />
	</svg>
);

export default AssetImage;
