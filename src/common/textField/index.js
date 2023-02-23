/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-dupe-keys */
import React from "react";

const TextField = ({
	name,
	children,
	font,
	fontSize,
	color = "#131414",
	mb = 0,
	mt = 0,
	onClick,
	textAlign,
	fontWeight,
	fontFamily,
	letterSpacing,
	textDecoration,
	paddingLeft,
	className,
	title,
	lineHeight,
}) => {
	return (
		<p
			title={title}
			className={`${className || ""} ${onClick ? "cp" : ""}`}
			// className={className}
			style={{
				margin: 0,
				paddinnameg: 0,
				fontFamily: font,
				fontSize,
				color,
				marginBottom: mb,
				marginTop: mt,
				textAlign,
				fontFamily,
				fontWeight,
				letterSpacing,
				lineHeight,
				paddingLeft,
				textDecoration,
				whiteSpace: "pre-wrap",
			}}
			onClick={onClick}
		>
			{name || children}
		</p>
	);
};

export default TextField;
