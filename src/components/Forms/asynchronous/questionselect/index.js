import React, { useState } from "react";
import { Button, Col, Radio, Row } from "antd";
import PropTypes from "prop-types";
import QuestionSelectItem from "src/common/Forms/questionSelectItem";
import { QuestionStepEnter, QuestionStepTwoEnter, QuestionStepThreeEnter, MedicalQuestionData } from "../db"


const propTypes = {
	extraOption: PropTypes.string,
};


const SelectQuestion = ({ FillBtnText, StepNext, StepQuestionData }) => {
	const [value, setValue] = useState(1);

	const onChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<div className="question-select-box">
			<Radio.Group
				onChange={onChange}
				value={value}
				size="large"
				className="radio-group-container question-select"
			>
				{(StepQuestionData === 'StepEnter' &&
					<Row gutter={[0, 32]}>
						{QuestionStepEnter.map((data) => (
							<QuestionSelectItem data={data} />
						))}
					</Row>) ||
					(StepQuestionData === 'StepTwoEnter' &&
						<Row gutter={[0, 32]}>
							{QuestionStepTwoEnter.map((data) => (
								<QuestionSelectItem data={data} />
							))}
						</Row>) ||
					(StepQuestionData === 'StepThreeEnter' &&
						<Row gutter={[0, 32]}>
							{QuestionStepThreeEnter.map((data) => (
								<QuestionSelectItem data={data} />
							))}
						</Row>) ||
					(StepQuestionData === 'MedicalQuestion' &&
						<Row gutter={[0, 32]}>
							{MedicalQuestionData.map((data) => (
								<QuestionSelectItem data={data} />
							))}
						</Row>)
				}

			</Radio.Group>

			{StepNext &&
				<Button className='trigger-Button black-button'>{FillBtnText}</Button>
			}

		</div>
	);
};

SelectQuestion.propTypes = propTypes;

export default SelectQuestion;