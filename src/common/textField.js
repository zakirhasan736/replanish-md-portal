import { Input } from "antd";
import React from "react";
import PropTypes from "prop-types";

const propTypes = {
	placeholder: PropTypes.string,
	prefix: PropTypes.element,
	type: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
};

const TextField = ({ placeholder, prefix, type, value, onChange }) => {
	return (
		<div className="text-field-container">
			<Input
				size="large"
				placeholder={placeholder}
				prefix={prefix}
				className="text-field"
				type={type}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

TextField.propTypes = propTypes;
export default TextField;
