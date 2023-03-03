import React from "react";
import RadioBtnQuestions from "src/common/radioBtnQuestions";
import PropTypes from "prop-types";

const propTypes = {
	title: PropTypes.string,
	extraOption: PropTypes.string,
};

const RadioBtnSection = ({ title, extraOption }) => {
	return (
		<div className="radio-btn-container">
			<div className="layout-wrapper">
				<h1 className="main-heading">{title}</h1>
				<RadioBtnQuestions extraOption={extraOption} />
			</div>
		</div>
	);
};

RadioBtnSection.propTypes = propTypes;

export default RadioBtnSection;
