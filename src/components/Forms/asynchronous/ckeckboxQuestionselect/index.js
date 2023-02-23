import React, { useState } from "react";
import { Button, Col, Checkbox, Row } from "antd";
import PropTypes from "prop-types";
import { TreatmentPrefDataTwo,TreatmentPrefDataThree,TreatmentPrefDataFour} from "../db"
import CheckBoxQuestionSelect from "src/common/Forms/checkboxQuestion";

const propTypes = {
	extraOption: PropTypes.string,
};


const CheckboxSelectQuestion = ({  StepQuestionData }) => {
	const onChange = (checkedValues) => {
		console.log('checked = ', checkedValues);
	  };
	return (
		<div className="question-select-box">
			<Checkbox.Group
			  onChange={onChange}
				
				className="radio-group-container question-select"
			>
				{(StepQuestionData === 'TreatPrefTwo' &&
					<Row gutter={[0, 25]}>
						{TreatmentPrefDataTwo.map((data) => (
							<CheckBoxQuestionSelect data={data} />
						))}
					</Row>) ||
					(StepQuestionData === 'TreatPrefThree' &&
						<Row gutter={[0, 25]}>
							{TreatmentPrefDataThree.map((data) => (
								<CheckBoxQuestionSelect data={data} />
							))}
						</Row>) ||
					(StepQuestionData === 'TreatPrefFour' &&
						<Row gutter={[0, 25]}>
							{TreatmentPrefDataFour.map((data) => (
								<CheckBoxQuestionSelect data={data} />
							))}
						</Row>) 
						
				}

			</Checkbox.Group>

		</div>
	);
};

CheckboxSelectQuestion.propTypes = propTypes;

export default CheckboxSelectQuestion;