/* eslint-disable react/prop-types */
import React from "react";

import { Input } from "antd";

const InputFieldNoCount = ({
	placeholder,
	name,
	label,
	className,
	addonBefore,
	type,
	onChange,
	onBlur,
	value,
	errors,
}) => {
	return (
		<div>
			<p style={{ marginBottom: "7px", paddingTop: "15px" }}>{label}</p>
			<Input
				style={{
					border: "1px solid #ededed",
					borderRadius: "8px",
					height: "40px",
					padding: "10px 21px",
				}}
				name={name}
				type={type}
				addonBefore={addonBefore}
				className={`input  ${className}`}
				placeholder={placeholder}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
			/>
			{errors && (
				<p
					style={{
						color: "red",
						fontSize: "13px",
						marginBottom: "0",
					}}
				>
					{errors[name]}
				</p>
			)}
		</div>
	);
};

export default InputFieldNoCount;
