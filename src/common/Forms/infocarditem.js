import React from "react";
import PropTypes from "prop-types";
// import { Col, Radio, Row } from "antd";
import './style.module.less';
const propTypes = {
	number: PropTypes.string,
	infoTitle: PropTypes.string,
	infoDesc: PropTypes.string,
}; 

const InfoCardItem = ({ data }) => {
	return (
		<div className='info-card-item'>
		<span className='info-modal-number'>{data.number}</span>
		<h3 className='info-card-title'>{data.infoTitle}</h3>
		<p className='info-card-desc'>{data.infoDesc}</p>
	</div>
	);
};

InfoCardItem.propTypes = propTypes;
export default InfoCardItem;