import React from "react";
import PropTypes from "prop-types";
import { Image } from "antd";

const propTypes = {
	serviceImg: PropTypes.string,
	serviceText: PropTypes.string,
};

const ServicesImgText = ({ serviceImg, serviceText }) => {
	return (
		<div className="service-img-wrapper">
			<Image
				src={serviceImg}
				className="service-img"
				alt="img"
				preview={false}
			/>
			<p className="title-text">{serviceText}</p>
		</div>
	);
};

ServicesImgText.propTypes = propTypes;

export default ServicesImgText;
