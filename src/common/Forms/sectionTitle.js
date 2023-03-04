import React from "react";
import PropTypes from "prop-types";
import './style.module.less';
const propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
}; 

const SectionTitle = ({ title, subtitle }) => {
	return (
		<div className="section-title-box">
			<h4 className="subtitle">{subtitle}</h4>
			<h2 className="title">{title}</h2>
		</div>
	);
};

SectionTitle.propTypes = propTypes;
export default SectionTitle;