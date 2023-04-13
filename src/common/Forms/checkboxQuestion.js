import React from "react";
import PropTypes from "prop-types";
import { Col, Checkbox } from "antd";
import './style.module.less';
const propTypes = {
	valueI: PropTypes.string,
	questionTitle: PropTypes.string,
};

const CheckBoxQuestionSelect = ({ data, name }) => {
	console.log(name)
	return (

		<Col xs={24} md={24}>
			<div className="check-box-info-itembox">
				<div className="check-box-info-item">
					<Checkbox name={name} value={data.valueI} className="radio-btn"><span className="pref-item-title-box">
						<span className="prefItemTitle">{data.questionTitle}</span> <span className="doses-charge-per">{data.doseCharge}</span>
					</span></Checkbox>
					<span className='suggestedPinText'>{data.suggestPinText}</span>
				</div>
				<p className="descriptionText">{data.descText}</p>
			</div>
		</Col>

	);
};

CheckBoxQuestionSelect.propTypes = propTypes;
export default CheckBoxQuestionSelect;