import React from "react";

import { Radio, Select } from "antd";

import TextField from "src/common/textField";
import EstimatedCard from "src/components/adsPage/SearchModal/specificIntrest/estimatedCard";
import CommonButton from "src/common/button";
import InputField from "src/common/inputField";

import PropTypes from "prop-types";

const ContinousAd = ({ back, handleChange, handleBlur, values, errors }) => {
	const { Option } = Select;
	return (
		<div className="continous_ad">
			<div className="continous_ad_main">
				<h3>Almost Done! Set A Budget That&apos;s Right For You</h3>
			</div>
			<div className="continous_ad_content">
				<div className="continous_ad_form">
					<TextField
						fontSize={15}
						fontFamily="Lato, sans-serif"
						mb={14}
					>
						How much you want to spend
					</TextField>
					Currency :{" "}
					<Select
						defaultValue="United States Dollar"
						bordered={false}
					>
						<Option value="usDollar">United States Dollar</Option>
					</Select>
					<InputField
						label="Enter a daily budget"
						showCount
						maxLength={30}
						allowClear
						placeholder="$ 845"
						name="dailyBudget"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.dailyBudget}
						errors={errors}
					/>
					<TextField mt={25} mb={15}>
						How long will your ads run?
					</TextField>
					<Radio.Group
						name="adOption"
						onChange={(e) => {
							handleChange({
								target: {
									name: "adOption",
									value: e.target.value,
								},
							});
						}}
						onBlur={handleBlur}
						value={values.adOption}
					>
						<Radio value="continousAd">Run continously</Radio>
						<br />
						<Radio value="endDate" disabled>
							Select an end date
						</Radio>
					</Radio.Group>
					{errors?.adOption && (
						<div>
							<p
								style={{
									color: "red",
									fontSize: "14px",
									marginBottom: "0",
								}}
							>
								{errors?.adOption}
							</p>
						</div>
					)}
					<TextField
						mt={20}
						mb={20}
						fontFamily="Lato, sans-serif"
						fontSize={15}
					>
						How does it work?
					</TextField>
					<TextField fontFamily="Lato, sans-serif">
						Pay only when someone watches 30 seconds of your video
						ad (or the duration if it&apos;s shorter than 30
						seconds) or interacts with the ad, whichever comes
						first. Some days you might spend less than your daily
						average, and on others you might spend more. But over
						the month you won&apos;t be charged more than 30.4 times
						your daily budget. Learn more
					</TextField>
				</div>
				<div className="video_mediaCard">
					<EstimatedCard />
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
				>
					Your ads can show to people in or who share interest in your
					locations, and to people who speak the languages you select.{" "}
					<span style={{ color: "#2c99cb" }}>Learn more</span>
				</TextField>
			</div>
		</div>
	);
};

ContinousAd.propTypes = {
	back: PropTypes.func,
	handleChange: PropTypes.func,
	handleBlur: PropTypes.func,
	values: PropTypes.object,
	errors: PropTypes.func,
};

export default ContinousAd;
