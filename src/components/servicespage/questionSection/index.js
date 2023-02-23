import React from "react";
import PropTypes from "prop-types";

const propTypes = {
	children: PropTypes.node,
	question: PropTypes.string,
	answerText: PropTypes.element,
	answer: PropTypes.string || PropTypes.bool,
};

const QuestionSection = ({ children, question, answer, answerText }) => {
	return (
		<div className="question-container">
			<div className="layout-wrapper">
				<div className="service-about-details-wrapper">
					<h1 className="question-text">{question}</h1>
					{answer ? (
						<p className="answer-text">{answer}</p>
					) : (
						<div className="answer-text">{answerText}</div>
					)}
				</div>
				{children}
			</div>
		</div>
	);
};

QuestionSection.propTypes = propTypes;

export default QuestionSection;
