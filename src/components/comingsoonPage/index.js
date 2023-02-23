import { Grid } from "antd";
import Link from "next/link";
import React from "react";
import { BlackTextLogo } from "../SVGImageIcon/blackTextLogo";
import { IconLogo } from "../SVGImageIcon/iconLogo";

const { useBreakpoint } = Grid;

const ComingSoon = () => {
	const screens = useBreakpoint();

	return (
		<div className="coming-soon-wrapper">
			<div className="layout-wrapper">
				{screens?.sm && (
					<div className="logo">
						{IconLogo}
						&nbsp; &nbsp;
						{BlackTextLogo}
					</div>
				)}

				<div className="inner-content">
					<h1 className="coming-soon-heading">
						<span className="highlight-text">COMING SOON.</span>
					</h1>

					<h1 className="coming-soon-heading">
						Team is working on the new website.
					</h1>
				</div>

				<br />
				<Link href="/">
					<a className="back-btn">Back To The Home Page</a>
				</Link>
			</div>
		</div>
	);
};

export default ComingSoon;
