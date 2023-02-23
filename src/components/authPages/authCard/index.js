import React from "react";

import PropTypes from "prop-types";

const propTypes = {
	heading: PropTypes.string,
	title: PropTypes.string,
	children: PropTypes.node,
};

const AuthCard = ({ heading, title, children }) => {
	return (
		<div className="auth-card-container">
			<h1 className="auth-card-heading">{heading}</h1>
			<p className="auth-card-title">{title}</p>
			{children}
		</div>
	);
};

AuthCard.propTypes = propTypes;
export default AuthCard;
