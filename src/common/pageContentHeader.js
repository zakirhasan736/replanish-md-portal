import { Button } from "antd";
import React from "react";
import PropTypes from "prop-types";

const propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
	btnText: PropTypes.string,
	onClick: PropTypes.func,
};

const PageContentHeader = ({ title, content, btnText, onClick }) => {
	return (
		<div className="page-content-header-container">
			<div className="layout-wrapper">
				<h1 className="main-heading">{title}</h1>
				<p className="inner-content">{content}</p>
				<Button
					size="large"
					type="primary"
					className="online-btn"
					onClick={onClick}
				>
					{btnText}
				</Button>
			</div>
		</div>
	);
};

PageContentHeader.propTypes = propTypes;

export default PageContentHeader;
