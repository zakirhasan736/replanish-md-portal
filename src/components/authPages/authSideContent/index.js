import React from "react";
import { BlackTextLogo } from "src/components/SVGImageIcon/blackTextLogo";
import { IconLogo } from "src/components/SVGImageIcon/iconLogo";
import PropTypes from "prop-types";
import { Carousel } from "antd";
import Link from "next/link";

const propTypes = {
	heading: PropTypes.string,
	contentArr: PropTypes.array,
};

const AuthSideContent = ({ heading, contentArr }) => {
	return (
		<div className="auth-side-content-container">
			<Link href="/">
				<div className="auth-logo">
					{IconLogo}
					&nbsp; &nbsp;
					{BlackTextLogo}
				</div>
			</Link>
			<div className="content-section">
				<h2 className="heading">{heading}</h2>
				<Carousel
					className="content-slider"
					effect="fade"
					autoplay
					dots={{ className: "custom-dot" }}
				>
					{contentArr?.map((content, index) => (
						<div key={index}>
							<p className="peragraph">{content.title}</p>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
};

AuthSideContent.propTypes = propTypes;
export default AuthSideContent;
