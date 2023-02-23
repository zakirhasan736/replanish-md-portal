import React from "react";

import { Input } from "antd";

import TextField from "src/common/textField";
import InputField from "src/common/inputField";
import CommonButton from "src/common/button";

import PropTypes from "prop-types";

const AdDescription = ({ back, handleChange, handleBlur, values, errors }) => {
	const { TextArea } = Input;

	return (
		<div className="ad_desc">
			<div className="ad_desc_main">
				<h3>Create Display Ads</h3>
			</div>
			<div className="ad_desc_content">
				<TextField
					fontSize="15px"
					fontWeight="600"
					fontFamily="Lato, sans-serif"
					letterSpacing="0.4px"
					mb={20}
				>
					Info(optional)
				</TextField>
				<InputField
					label="Headline"
					showCount
					maxLength={30}
					name="displayHeadline"
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.displayHeadline}
					errors={errors}
				/>
				<div className="ad_textArea">
					<TextField fontSize="13px" mt={30} mb={5}>
						Description
					</TextField>
					<TextArea
						rows={6}
						maxLength={500}
						name="displayDescription"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.displayDescription}
					/>
					{errors?.displayDescription && (
						<div>
							<p
								style={{
									color: "red",
									fontSize: "14px",
									marginBottom: "0",
								}}
							>
								{errors?.displayDescription}
							</p>
						</div>
					)}
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

AdDescription.propTypes = {
	back: PropTypes.func,
	handleChange: PropTypes.func,
	handleBlur: PropTypes.func,
	values: PropTypes.object,
	errors: PropTypes.func,
};

export default AdDescription;
