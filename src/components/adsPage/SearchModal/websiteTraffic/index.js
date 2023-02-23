import React from "react";

import { Input } from "antd";

import TextField from "src/common/textField";
import CommonButton from "src/common/button";

import PropTypes from "prop-types";

const Website = ({ back, handleChange, handleBlur, values, errors }) => {
	return (
		<div className="traffic_main">
			<h3>Tell Us Where People Go After They Click Your Ad</h3>
			<div className="traffic_content">
				<TextField
					mt="30px"
					fontSize="0.75rem"
					color="#010010"
					mb="10px"
				>
					Your Website
				</TextField>
				<div>
					<Input
						placeholder="www.yahoo.com"
						className="website_field"
						type="text"
						name="websiteLandingModal"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.websiteLandingModal}
					/>
				</div>
				{errors?.websiteLandingModal && (
					<div
						style={{
							marginTop: "10px",
						}}
					>
						<p
							style={{
								color: "red",
								fontSize: "14px",
								marginBottom: "0",
							}}
						>
							{errors?.websiteLandingModal}
						</p>
					</div>
				)}
				<TextField
					color="rgba(1, 0, 16, 0.5)"
					fontSize="0.75rem"
					mt="8px"
					mb={250}
				>
					Consider what you&apos;re advertising, and enter the most
					relevant page of your website. This might be your homepage,
					or a more specific page.
				</TextField>
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
};

Website.propTypes = {
	back: PropTypes.func,
	handleChange: PropTypes.func,
	handleBlur: PropTypes.func,
	values: PropTypes.object,
	errors: PropTypes.func,
};

export default Website;
