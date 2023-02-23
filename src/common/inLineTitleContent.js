import React from "react";
import PropTypes from "prop-types";

const propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
};

const InLineTitleContent = ({ title, content }) => {
	return (
		<div className="inline-title-content-content">
			<p className="dark-text">{title} :&nbsp;</p>
			<p className="light-text">{content}</p>
		</div>
	);
};

InLineTitleContent.propTypes = propTypes;
export default InLineTitleContent;
