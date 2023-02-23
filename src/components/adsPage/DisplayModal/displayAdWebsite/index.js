import React from "react";

import { Input, Select } from "antd";

import InputField from "src/common/inputField";
import CommonButton from "src/common/button";

import PropTypes from "prop-types";

const AdWebsite = ({ back, handleChange, handleBlur, values, errors }) => {
	const { Option } = Select;
	return (
		<div className="ad_website">
			<div className="ad_website_main">
				<h3>Create Display Ads</h3>
			</div>
			<div className="ad_website_content">
				<div className="ad_website_button">
					<div className="button_download">
						<p style={{ marginBottom: "0.5em" }}>Button</p>
						<Select
							name="buttonSelect"
							onChange={(e) => {
								handleChange({
									target: { name: "buttonSelect", value: e },
								});
							}}
							onBlur={handleBlur}
							value={values.buttonSelect}
						>
							<Option value="download">Download</Option>
						</Select>
						{errors?.buttonSelect && (
							<div>
								<p
									style={{
										color: "red",
										fontSize: "14px",
										marginBottom: "0",
									}}
								>
									{errors?.buttonSelect}
								</p>
							</div>
						)}
					</div>
					<div className="button_text">
						<p style={{ marginBottom: "0.5em" }}>Button Text</p>
						<Input
							placeholder="Download case study"
							className="ad_website_fields"
							name="buttonText"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.buttonText}
						/>
						{errors?.buttonText && (
							<div>
								<p
									style={{
										color: "red",
										fontSize: "14px",
										marginBottom: "0",
									}}
								>
									{errors?.buttonText}
								</p>
							</div>
						)}
					</div>
				</div>
				<div className="ad_button_website">
					<InputField
						label="Website Link"
						showCount
						maxLength={30}
						name="websiteLink"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.websiteLink}
						errors={errors}
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
};

AdWebsite.propTypes = {
	back: PropTypes.func,
	handleChange: PropTypes.func,
	handleBlur: PropTypes.func,
	values: PropTypes.object,
	errors: PropTypes.func,
};

export default AdWebsite;
