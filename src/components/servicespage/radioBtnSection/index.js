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

// const optionsArr = [
// 	{
// 		value: 1,
// 		label: "Yes, with 1 of these areas",
// 	},
// 	{
// 		value: 2,
// 		label: "Yes, with 2 of these areas",
// 	},
// 	{
// 		value: 3,
// 		label: "Yes, with 3 of these areas",
// 	},
// 	{
// 		value: 4,
// 		label: "Yes, I'd like to know about your Full Replenished Look",
// 	},
// ];
