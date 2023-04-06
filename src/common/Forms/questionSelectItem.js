import React from "react";
import PropTypes from "prop-types";
import { Col, Radio, Row } from "antd";
import './style.module.less';
const propTypes = {
	valueI: PropTypes.string,
	questionTitle: PropTypes.string,
}; 

const QuestionSelectItem = ({ data }) => {
	return (
       
		<Col  xs={24} md={24}>
				<Radio value={data.valueI} className="radio-btn">{data.questionTitle}</Radio>
		</Col>
  
	);
};

QuestionSelectItem.propTypes = propTypes;
export default QuestionSelectItem;