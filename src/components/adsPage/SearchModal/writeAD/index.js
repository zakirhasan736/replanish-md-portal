import React from "react";
import { Checkbox, Select, Image } from "antd";

import InputField from "src/common/inputField";
import CommonButton from "src/common/button";
import TextField from "src/common/textField";

import PropTypes from "prop-types";

const WriteAD = ({ back, handleChange, handleBlur, values, errors }) => {
	const { Option } = Select;

	const prefixSelector = (
		<Select
			style={{ width: 70 }}
			name="countryCode"
			onChange={(e) => {
				handleChange({
					target: { name: "countryCode", value: e },
				});
			}}
			onBlur={handleBlur}
			value={values.countryCode}
		>
			<Option value="+86">+86</Option>
			<Option value="+87">+87</Option>
		</Select>
	);

	return (
		<div className="writeAd_main">
			<div className="writeAd_content">
				<h3>Now {`It's`} Time To Write Your Ad</h3>
				<div className="adForm_main">
					<div className="adForm_main_left">
						<InputField
							label="Headline 1"
							placeholder="Yahoo."
							showCount
							maxLength={30}
							type="text"
							name="headline1"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.headline1}
							errors={errors}
						/>
						<InputField
							label="Headline 2"
							placeholder="Yahoo, Native! — Advertiser"
							showCount
							maxLength={30}
							name="headline2"
							type="text"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.headline2}
							errors={errors}
						/>
						<InputField
							label="Headline 3"
							placeholder="Company in India Call business"
							showCount
							maxLength={30}
							name="headline3"
							type="text"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.headline3}
							errors={errors}
						/>
						<InputField
							label="Description 1"
							placeholder="We Can Optimize Your Website to Rank Higher on Search "
							showCount
							maxLength={30}
							name="description1"
							type="text"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.description1}
							errors={errors}
						/>
						<InputField
							label="Description 2"
							placeholder="We Can Optimize Your Website to Rank Higher on Search "
							showCount
							maxLength={30}
							name="description2"
							type="text"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.description2}
							errors={errors}
						/>
						<div
							style={{
								marginTop: "30px",
								marginBottom: "10px",
							}}
						>
							<Checkbox
								name="adButton"
								onChange={handleChange}
								onBlur={handleBlur}
							>
								Show a call button in your ad
							</Checkbox>
						</div>
						{/* {formik?.errors?.adButton && (
							<div style={{ marginTop: "10px" }}>
								<Alert
								message={formik?.errors?.adButton}
								type="error"
								></Alert>
							</div>
						)} */}
						<InputField
							label="Phone Number :"
							addonBefore={prefixSelector}
							className="phone_number"
							placeholder="7203004969"
							type="number"
							name="phoneNumber"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.phoneNumber}
							errors={errors}
						/>
					</div>
					<div className="form_card">
						<Image
							src="/assets/writeAd/Group79.png"
							width="372.5px"
							height="389.78px"
							alt="card"
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
						background="#8dd9c2"
						borderRadius="24px 0px 0px 24px"
						color="#ffffff"
						htmlType="submit"
					/>
					<CommonButton
						child="Back"
						background="#2c99cb"
						classname="back"
						width="128px"
						height="48px"
						borderRadius="0px 24px 24px 0px"
						color="#ffffff"
						onClick={back}
					/>
				</div>
				<div className="bottomText">
					<TextField
						mt={95}
						textAlign="center"
						fontFamily="Lato, sans-serif"
						fontSize={14}
					>
						Need inspiration?{" "}
						<span
							style={{
								color: "#2c99cb",
								textDecoration: "underline",
								cursor: "pointer",
							}}
						>
							Learn more about writing successful ads.
						</span>
					</TextField>
				</div>
			</div>
		</div>
	);
};

WriteAD.propTypes = {
	back: PropTypes.func,
	handleChange: PropTypes.func,
	handleBlur: PropTypes.func,
	values: PropTypes.object,
	errors: PropTypes.func,
};

export default WriteAD;
