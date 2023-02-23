import React from "react";
import PropTypes from "prop-types";

const propTypes = {
	icon: PropTypes.object,
	title: PropTypes.string,
};

const IconText = ({ icon, title }) => {
	return (
		<div className="icon-text-wrapper">
			{icon}
			<p className="title-text">{title}</p>
		</div>
	);
};

IconText.propTypes = propTypes;
export default IconText;
