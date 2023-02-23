import React from "react";
import PropTypes from "prop-types";

const propTypes = {
	pointNum: PropTypes.number,
	pointcontent: PropTypes.string,
};

const WorkPoints = ({ pointNum, pointcontent }) => {
	return (
		<div className="work-points-section">
			<h1 className="point-num question-text">{pointNum}</h1>
			<p className="point-content answer-text">{pointcontent}</p>
		</div>
	);
};

WorkPoints.propTypes = propTypes;
export default WorkPoints;
