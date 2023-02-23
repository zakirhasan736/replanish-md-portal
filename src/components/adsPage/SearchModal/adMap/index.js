import React from "react";

import { Image, Radio, Tag } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import CommonButton from "src/common/button";
import InputField from "src/common/inputField";

import PropTypes from "prop-types";

const Places = ({ back, handleChange, handleBlur, values, errors }) => {
	const cityTagValues = [
		{
			city: "City of usa",
			image: "/assets/writeAd/Frame 2.svg",
		},
		{
			city: "City of usa",
			image: "/assets/writeAd/Frame 2.svg",
		},
	];

	return (
		<div className="places_main">
			<div className="places_content">
				<h3>Up Next, Show Your Ad In The Right Places</h3>
				<div className="places_main">
					<div>
						<Radio.Group
							name="adArea"
							onChange={(e) => {
								handleChange({
									target: {
										name: "adArea",
										value: e.target.value,
									},
								});
							}}
							onBlur={handleBlur}
							value={values.adArea}
						>
							<div className="places_radio">
								<Radio
									value="atAddress"
									style={{ marginBottom: "10px" }}
								>
									Advertise near an address
								</Radio>
								<Radio
									value="zipCodes"
									style={{ marginBottom: "15px" }}
								>
									Advertise in specific zip codes, cities, or
									regions
								</Radio>
							</div>
						</Radio.Group>
						{errors?.adArea && (
							<div>
								<p
									style={{
										color: "red",
										fontSize: "13px",
										marginBottom: "0",
									}}
								>
									{errors?.adArea}
								</p>
							</div>
						)}
						<div className="parent_tag">
							<div>
								{cityTagValues.map((data, key) => {
									return (
										<Tag
											key={key}
											icon={
												<Image
													src={data.image}
													alt="check"
												/>
											}
										>
											{data.city}
											<PlusOutlined />
										</Tag>
									);
								})}
							</div>
							<div>
								{cityTagValues.map((data, key) => {
									return (
										<Tag
											key={key}
											icon={
												<Image
													src={data.image}
													alt="check"
												/>
											}
										>
											{data.city}
											<PlusOutlined />
										</Tag>
									);
								})}
							</div>
						</div>
						<div>
							<InputField
								placeholder="New York"
								className="place_field"
								name="cityName"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.cityName}
								errors={errors}
							/>
							{/* {errors?.cityName && (
							<div
								style={{
								marginTop: "5px",
								}}
							>
								<p
								style={{
									color: "red",
									fontSize: "13px",
									marginBottom: "0",
								}}
								>
								{errors?.cityName}
								</p>
							</div>
							)} */}
						</div>
					</div>
					<div className="mapImage">
						<Image
							src="assets/adMap/image63.svg"
							alt="map"
							style={{ borderRadius: "15px" }}
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
		</div>
	);
};

Places.propTypes = {
	back: PropTypes.func,
	handleChange: PropTypes.func,
	handleBlur: PropTypes.func,
	values: PropTypes.object,
	errors: PropTypes.func,
};

export default Places;
