/* eslint-disable react/prop-types */
import React from "react";
import { Input } from "antd";

const InputField = ({
	placeholder,
	name,
	label,
	className,
	maxLength,
	showCount,
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
				type={type}
				name={name}
				addonBefore={addonBefore}
				showCount={showCount}
				maxLength={maxLength}
				className={`ad-input  ${className}`}
				placeholder={placeholder}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
				suffix
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

export default InputField;
