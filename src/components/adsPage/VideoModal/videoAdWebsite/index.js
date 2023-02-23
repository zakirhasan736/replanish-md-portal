import React from "react";

import { Alert, Button, Checkbox, Image } from "antd";

import TextField from "src/common/textField";
import VideoPreview from "src/components/adsPage/VideoModal/videoAdMedia/budgetCard";
import CommonButton from "src/common/button";
import InputField from "src/common/inputField";

import PropTypes from "prop-types";
import { Mobile, Web } from "../../../../../public/assets/icon";

const SelectVideo = ({ back, handleChange, handleBlur, values, errors }) => {
	const onClose = (e) => {
		console.log(e, "I was closed.");
	};
	return (
		<div className="video_website">
			<div className="video_website_main">
				<h3>Let&apos;s Create Your Video Ad</h3>
			</div>
			<div className="video_website_content">
				<div className="video_website_modal">
					<div className="video_website_field">
						<TextField
							fontSize="15px"
							fontWeight="600"
							fontFamily="Lato, sans-serif"
							letterSpacing="0.4px"
							mb="17px"
						>
							Select a video
						</TextField>
						<Alert
							message="Pepsi qanday ishlab chiqariladi?"
							description="by Business Class . 24,557 views"
							type="error"
							closable
							showIcon
							icon={
								<Image
									src="/assets/icon/Rectangle 385.svg"
									width="65px"
									height="59px"
									alt="image"
								/>
							}
							onClose={onClose}
							style={{
								background: "#f1f1f1",
								border: "1px solid #D4D4D4",
								borderRadius: "5px",
							}}
						/>
						<Alert
							message="Videos longer than 3 minutes don't usually perform as well as shorter videos."
							type="error"
							style={{
								background: "#fde5e5",
								border: "1px solid #FF8080",
								borderRadius: "5px",
								marginTop: "20px",
							}}
							className="alert"
						/>
						<TextField
							fontSize="15px"
							fontWeight="600"
							fontFamily="Lato, sans-serif"
							letterSpacing="0.4px"
							mt="17px"
							mb="17px"
						>
							After viewers click your ad, where do you want to
							send them?
						</TextField>
						<div className="website_fields">
							<InputField
								label="Landing Page"
								showCount
								maxLength={30}
								allowClear
								placeholder="Website Link"
								name="landingPage"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.landingPage}
								errors={errors}
							/>
							<div className="websiteCheckbox">
								<Checkbox>
									Drive more website visits by adding a button
								</Checkbox>
							</div>
							<div>
								<InputField
									label="Button Label"
									showCount
									maxLength={30}
									allowClear
									placeholder="Button"
									name="buttonLabel"
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.buttonLabel}
									errors={errors}
								/>
							</div>
							<div style={{ marginTop: "20px" }}>
								<InputField
									label="Headline"
									showCount
									maxLength={30}
									allowClear
									placeholder="Headline of video"
									name="videoHealine"
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.videoHeadline}
									errors={errors}
								/>
							</div>
						</div>
					</div>
					<div className="media_rightCard">
						<TextField
							fontSize="15px"
							fontWeight="600"
							fontFamily="Lato, sans-serif"
							letterSpacing="0.4px"
						>
							Ad Preview
						</TextField>
						<VideoPreview />
						<div className="webMob_button">
							<Button
								className={`mob_button ${
									values?.device === "mobile" ? "active" : ""
								}`}
								onClick={() => {
									handleChange({
										target: {
											name: "device",
											value: "mobile",
										},
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
										target: {
											name: "device",
											value: "web",
										},
									});
								}}
							>
								<Web />
								Web
							</Button>
						</div>
					</div>
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
			<div className="bottomText">
				<TextField
					fontSize="17px"
					fontWeight="500"
					fontFamily="Lato, sans-serif"
					textAlign="center"
					color="#8dd9c2"
				>
					To use advanced features such as keyword or placement
					targeting,
					<span style={{ color: "#2C99CB" }}>
						{" "}
						Switch to Expert Mode
					</span>
				</TextField>
			</div>
		</div>
	);
};

SelectVideo.propTypes = {
	back: PropTypes.func,
	handleChange: PropTypes.func,
	handleBlur: PropTypes.func,
	values: PropTypes.object,
	errors: PropTypes.func,
};

export default SelectVideo;
