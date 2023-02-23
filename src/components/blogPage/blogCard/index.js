import { Image } from "antd";
import Link from "next/link";
import React from "react";
import { ArrowIcon } from "src/components/SVGImageIcon/arrowIcon";
import PropTypes from "prop-types";

const propTypes = {
	id: PropTypes.number,
	image: PropTypes.string,
	date: PropTypes.string,
	heading: PropTypes.string,
	content: PropTypes.string,
};

const BlogCard = ({ id, image, date, heading, content }) => {
	const limitedContent = content?.substring(0, 100) + "...";
	return (
		<div className="blog-card-container">
			<div className="blog-img-section">
				<Image
					src={image}
					preview={false}
					alt="image"
					className="blog-image"
				/>
				<div className="date-tag">{date}</div>
			</div>

			<h1 className="card-heading">{heading}</h1>
			<p
				className="card-content"
				dangerouslySetInnerHTML={{
					__html: `${limitedContent}`,
				}}
			/>
			{/* <p className="card-content">{limitedContent}</p> */}
			<Link href={`/blog/${id}`}>
				<a className="read-more-btn">Read More &nbsp; {ArrowIcon}</a>
			</Link>
		</div>
	);
};

BlogCard.propTypes = propTypes;
export default BlogCard;
