import React from "react";
import PropTypes from "prop-types";

const propTypes = {
	description: PropTypes.string,
};

const BlogContent = ({ description }) => {
	return (
		<div className="blog-content-container">
			<div className="layout-wrapper">
				<div className="blog-content-section">
					<div
						className="blog-title"
						dangerouslySetInnerHTML={{
							__html: `${description}`,
						}}
					/>
				</div>
			</div>
		</div>
	);
};

BlogContent.propTypes = propTypes;
export default BlogContent;
