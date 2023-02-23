import { Image } from "antd";
// import Link from "next/link";
import React from "react";
// import { ArrowIcon } from "src/components/SVGImageIcon/arrowIcon";
import PropTypes from "prop-types";

const propTypes = {
	image: PropTypes.number,
	title: PropTypes.string,
	content: PropTypes.string,
};

const ImageCard = ({ image, title, content }) => {
	return (
		<div className="image-card-container">
			<Image
				src={`/images/Specials${image}.png`}
				alt="team meet"
				preview={false}
				width="100%"
				className="card-image"
			/>
			{/* <div className="card-content">
				<h1 className="heading">{title}</h1>
				<p className="description">{content}</p>
				<Link href="#">
					<a className="read-more-btn">
						Read More &nbsp; {ArrowIcon}
					</a>
				</Link>
			</div> */}
		</div>
	);
};

ImageCard.propTypes = propTypes;

export default ImageCard;
