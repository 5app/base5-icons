import React from "react";

const Tag = props => (
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
		<path d="M13.325 4.492c.314-.402.505-.89.607-1.39.047-.234.076-.472.09-.71.005-.072.009-.357.016-.427.004-.027.048-.167.072-.206a.512.512 0 0 1 .442-.234.503.503 0 0 1 .482.476c.001.095-.002.19-.005.285-.015.34-.049.68-.117 1.014-.124.612-.356 1.206-.726 1.712a3.386 3.386 0 0 1-.287.345c.066.197.101.406.101.624v3.222a1.797 1.797 0 0 1-.8 1.495l-5.431 5.43a.967.967 0 0 1-1.37 0 9305.643 9305.643 0 0 1-4.443-4.443.967.967 0 0 1 0-1.37l5.17-5.17A1.803 1.803 0 0 1 8.806 4h3.213c.501 0 .958.186 1.306.492zm-2.762 1.871a1.182 1.182 0 1 1-.002 2.364 1.182 1.182 0 0 1 .002-2.364z" />
	</svg>
);

export default Tag;
