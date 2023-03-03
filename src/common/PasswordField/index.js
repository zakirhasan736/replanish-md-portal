/* eslint-disable react/prop-types */
import React from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const { Password } = Input;

const PasswordField = ({
	placeholder,
	name,
	label,
	className,
	maxLength,
	onChange,
	onBlur,
	value,
	errors,
}) => {
	return (
		<div className="password-field">
			<p>{label}</p>
			<Password
				name={name}
				maxLength={maxLength}
				className={`ad-input ${className} `}
				placeholder={placeholder}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
				iconRender={(visible) =>
					visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
				}
			/>
			{errors?.[name] && (
				<p
					style={{
						color: "red",
						fontSize: "13px",
						marginBottom: "0",
						paddingTop: "5px",
					}}
				>
					{errors[name]}
				</p>
			)}
		</div>
	);
};

export default PasswordField;
