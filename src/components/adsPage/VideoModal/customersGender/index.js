import React from "react";

import { Checkbox } from "antd";

import TextField from "src/common/textField";
import EstimatedCard from "src/components/adsPage/SearchModal/specificIntrest/estimatedCard";
import CommonButton from "src/common/button";

import PropTypes from "prop-types";

const VideoAge = ({ back, handleChange, handleBlur, errors }) => {
	const genderCheckbox = [
		{
			gender: "Female",
		},
		{
			gender: "Male",
		},
		{
			gender: "Unknown",
		},
	];

	const ageCheckbox = [
		{
			age: "18-24",
		},
		{
			age: "25-34",
		},
		{
			age: "35-44",
		},
		{
			age: "45-54",
		},
		{
			age: "55-64",
		},
		{
			age: "65+",
		},
		{
			age: "Unknown",
		},
	];

	const parentCheckbox = [
		{
			parent: "Not a parent",
		},
		{
			parent: "Parent",
		},
		{
			parent: "Unknown",
		},
	];

	return (
		<div className="video_gender_main">
			<div className="video_gender_content">
				<h3>
					Select The Gender, Age, And Parental Status Of Your
					Customers
				</h3>
				<div className="video_gender_main">
					<div className="video_checkbox">
						<div className="video_gender_checkbox">
							<p>Gender</p>
							{genderCheckbox.map((genValue, index) => {
								return (
									<Checkbox
										key={index}
										name="gender"
										value={genValue.gender}
										onChange={handleChange}
										onBlur={handleBlur}
										error={errors}
									>
										{genValue.gender}
									</Checkbox>
								);
							})}
						</div>
						<div className="video_age_checkbox">
							<p>Age</p>
							{ageCheckbox.map((ageValue, index) => {
								return (
									<Checkbox
										key={index}
										name="age"
										value={ageValue.age}
										onChange={handleChange}
										onBlur={handleBlur}
										error={errors}
									>
										{ageValue.age}
									</Checkbox>
								);
							})}
						</div>
						<div className="video_parental_checkbox">
							<p>Parental status</p>
							{parentCheckbox.map((parentValue, index) => {
								return (
									<Checkbox
										key={index}
										name="parentalStatus"
										value={parentValue.parent}
										onChange={handleChange}
										onBlur={handleBlur}
										error={errors}
									>
										{parentValue.parent}
									</Checkbox>
								);
							})}
						</div>
					</div>
					<div className="video_mediaCard">
						<EstimatedCard />
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
				>
					Your ads can show to people in or who share interest in your
					locations, and to people who speak the languages you select.
					status. <span style={{ color: "#2c99cb" }}>Learn more</span>
				</TextField>
			</div>
		</div>
	);
};

VideoAge.propTypes = {
	back: PropTypes.func,
	handleChange: PropTypes.func,
	handleBlur: PropTypes.func,
	errors: PropTypes.func,
};

export default VideoAge;
