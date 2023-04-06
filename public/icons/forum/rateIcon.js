import React from "react";

const RateIcon = ({ color }) => {
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			{color ? (
				<path
					d="M6.00033 0.666016L7.80283 4.31768L11.8337 4.90685L8.91699 7.74768L9.60533 11.761L6.00033 9.86518L2.39533 11.761L3.08366 7.74768L0.166992 4.90685L4.19783 4.31768L6.00033 0.666016Z"
					stroke="#ECECEC"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			) : (
				<path
					d="M6.00033 0.666016L7.80283 4.31768L11.8337 4.90685L8.91699 7.74768L9.60533 11.761L6.00033 9.86518L2.39533 11.761L3.08366 7.74768L0.166992 4.90685L4.19783 4.31768L6.00033 0.666016Z"
					fill="#FFC245"
				/>
			)}
		</svg>
	);
};

export default RateIcon;
