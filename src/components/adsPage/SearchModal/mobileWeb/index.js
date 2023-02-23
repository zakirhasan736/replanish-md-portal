import React from "react";
import { Button, Radio, Image } from "antd";
import CommonButton from "src/common/button";

import PropTypes from "prop-types";
import { Mobile, Web } from "../../../../../public/assets/icon";

const MobileWeb = ({ back, handleChange, values }) => (
	<div className="webMob_container">
		<div className="webMob_content">
			<h3>Thanks! People Come Here After They Click Your Ad</h3>
			<Radio.Group>
				<div className="webMob_button">
					<Button
						className={`mob_button ${
							values?.device === "mobile" ? "active" : ""
						}`}
						onClick={() => {
							handleChange({
								target: { name: "device", value: "mobile" },
							});
						}}
					>
						<Mobile />
						Mobile
					</Button>
					<Button
						className={`web_button ${
							values?.device === "web" ? "active" : ""
						}`}
						onClick={() => {
							handleChange({
								target: { name: "device", value: "web" },
							});
						}}
					>
						<Web />
						Web
					</Button>
				</div>
			</Radio.Group>
			<div className="mobileImage">
				<Image
					src="/assets/mobileWeb/iPhone 12 Pro Mockup.svg"
					width="245.48"
					height="462.38"
					alt="mobile "
				/>
			</div>
		</div>
		<div className="button_main">
			<CommonButton
				child="Next"
				classname="next"
				topClass="nextTop"
				width="128px"
				height="48px"
				background="var(--secondary)"
				borderRadius="24px 0px 0px 24px"
				color="#ffffff"
				htmlType="submit"
			/>
			<CommonButton
				child="Back"
				background="var(--primary)"
				classname="back"
				width="128px"
				height="48px"
				borderRadius="0px 24px 24px 0px"
				color="#ffffff"
				onClick={back}
			/>
		</div>
	</div>
);

MobileWeb.propTypes = {
	back: PropTypes.func,
	handleChange: PropTypes.func,
	values: PropTypes.object,
};

export default MobileWeb;
