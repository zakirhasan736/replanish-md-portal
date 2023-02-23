/* eslint-disable @next/next/no-img-element */
import { Image } from "antd";
import React from "react";
import PropTypes from "prop-types";

const TeamImage = ({ image }) => {
	const [isMouseHover, setIsMouseHover] = React.useState(false);

	return (
		<div
			className="team-image-container"
			onMouseEnter={() => setIsMouseHover(true)}
			onMouseLeave={() => setIsMouseHover(false)}
		>
			<Image src={image} alt="team meet" preview={false} width="100%" />
			{isMouseHover && (
				<div className="on-hover-section animated fadeInLeft">
					<h1 className="heading">Alex Martinez</h1>
					<p className="title">MBBS, MRCP(UK), CCST(DERM)</p>
				</div>
			)}
		</div>
	);
};

TeamImage.propTypes = {
	image: PropTypes.string,
};

export default TeamImage;
