import React, { useState } from "react";
import { Col, Radio, Row } from "antd";
import PropTypes from "prop-types";

const propTypes = {
	extraOption: PropTypes.string,
};
const defaultProps = {
	extraOption: "Yes, I'd like to know about your Full Replenished Look",
	// extraOption: "Yes, I'd like to know about your Full Replenished Feel",
};

const RadioBtnQuestions = ({ extraOption }) => {
	const [value, setValue] = useState(1);

	const onChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<Radio.Group
			onChange={onChange}
			value={value}
			size="large"
			className="radio-group-container"
		>
			<Row gutter={[32, 32]}>
				<Col xs={24} md={12}>
					<Radio value={1} className="radio-btn">
						Yes, with 1 of these areas
					</Radio>
				</Col>
				<Col xs={24} md={12}>
					<Radio value={2} className="radio-btn">
						Yes, with 2 of these areas
					</Radio>
				</Col>
				<Col xs={24} md={12}>
					<Radio value={3} className="radio-btn">
						Yes, with 3 of these areas
					</Radio>
				</Col>
				<Col xs={24} md={12}>
					<Radio value={4} className="radio-btn">
						{extraOption}
					</Radio>
				</Col>
			</Row>
		</Radio.Group>
	);
};

RadioBtnQuestions.propTypes = propTypes;
RadioBtnQuestions.defaultProps = defaultProps;

export default RadioBtnQuestions;
