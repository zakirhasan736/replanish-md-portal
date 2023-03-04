import React from "react";
import PropTypes from "prop-types";
import { AuthFooterLogo } from "src/components/SVGImageIcon/authFooterLogo";

const propTypes = {
	children: PropTypes.node.isRequired,
};

const AuthLayoutWrapper = ({ children }) => {
	return (
		<div className="auth-layout-wrapper-container">
			<div className="layout-wrapper">
				<div className="auth-content">{children}</div>
			</div>
			<div className="auth-footer">
				{AuthFooterLogo}
				<p className="footer-text">
					Copyright © RMD - 2022 | All Rights Reserved
				</p>
			</div>
		</div>
	);
};

AuthLayoutWrapper.propTypes = propTypes;
export default AuthLayoutWrapper;
