/* eslint-disable react/prop-types */
import { Button } from "antd";
import React from "react";

const CommonButton = ({
	child,
	classname,
	topClass,
	width,
	height,
	background,
	borderRadius,
	border = 0,
	color = "#ffffff",
	onClick,
	htmlType,
	disabled,
}) => {
	return (
		<div className={topClass}>
			<Button
				style={{
					width,
					height,
					background,
					borderRadius,
					color,
					border,
				}}
				className={classname}
				onClick={onClick}
				htmlType={htmlType}
				disabled={disabled}
			>
				{child}
			</Button>
		</div>
	);
};

export default CommonButton;
