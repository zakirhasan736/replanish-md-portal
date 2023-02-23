import React from "react";

import { Tag, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import TextField from "src/common/textField";
import CommonButton from "src/common/button";

import PropTypes from "prop-types";

const Keyword = ({ back, handleChange, handleBlur, values, errors }) => {
	const tagValues = [
		"yahoo email",
		"Search engine optimization company",
		"yahoo email sign up",
		"yahoo website",
		"yahoo mail sign in yahoo",
		"yahoo sign up",
		"yahoo app",
		"yahoo new account",
	];

	const { Option } = Select;

	return (
		<div className="keyword_main">
			<h3>Add Keyword Theme To Match Your Ad To Searches</h3>
			<div className="keyword_body">
				<div className="selected_keywords">
					<div className="selected_keyword_upper">
						{values?.selectedKeyword?.length ? (
							<div>
								<TextField
									fontSize="15px"
									mb="10px"
									fontWeight="500"
									fontFamily="Lato,sans-serif"
								>
									Selected keyword themes:
								</TextField>
								{values?.selectedKeyword?.map((data, key) => (
									<Tag
										key={key}
										closable
										color="#8DD9C2"
										style={{
											border: 0,
										}}
										onClose={() => {
											const update =
												values?.selectedKeyword?.filter(
													(item) => item !== data
												);
											handleChange({
												target: {
													name: "selectedKeyword",
													value: update,
												},
											});
										}}
									>
										{data}
									</Tag>
								))}
							</div>
						) : null}
					</div>
					<div className="selected_keyword_lower">
						<TextField
							fontSize="15px"
							mb="10px"
							fontWeight="500"
							fontFamily="Lato,sans-serif"
						>
							Selected keyword themes:
						</TextField>
						{tagValues.map((value, key) => (
							<Tag
								key={key}
								onClick={() => {
									if (
										!values?.selectedKeyword?.includes(
											value
										)
									) {
										handleChange({
											target: {
												name: "selectedKeyword",
												value: [
													{
														...values?.selectedKeyword,
													},
													value,
												],
											},
										});
									}
								}}
								name="selectedKeyword"
								onBlur={handleBlur}
								value={values.selectedKeyword}
							>
								<span className="add_icon">
									<PlusOutlined />
								</span>
								{value}
							</Tag>
						))}
						{errors?.selectedKeyword && (
							<div
								style={{
									marginTop: "10px",
									marginBottom: "15px",
								}}
							>
								<p
									style={{
										color: "red",
										fontSize: "14px",
										marginBottom: "0",
									}}
								>
									{errors?.selectedKeyword}
								</p>
							</div>
						)}
					</div>
					<div className="language_input">
						<TextField
							fontSize="15px"
							mb="14px"
							fontWeight="500"
							fontFamily="Lato, sans-serif"
						>
							Advertise in
						</TextField>
						<Select
							name="advertise"
							onChange={(e) => {
								handleChange({
									target: { name: "advertise", value: e },
								});
							}}
							onBlur={handleBlur}
							value={values.advertise}
						>
							<Option value="English">English</Option>
							<Option value="French">French</Option>
						</Select>
					</div>
					{errors?.advertise && (
						<div
							style={{
								marginTop: "10px",
								marginBottom: "15px",
							}}
						>
							<p
								style={{
									color: "red",
									fontSize: "14px",
									marginBottom: "0",
								}}
							>
								{errors?.advertise}
							</p>
						</div>
					)}
					<div className="bottomText">
						<TextField
							fontSize="19px"
							textAlign="center"
							fontFamily="Poppins, sans-serif"
							mt="73px"
							mb={66}
						>
							Give us a few keyword themes and we&apos;ll show
							your ad for similar searches. You can also add
							negative keyword themes after you&apos;re set up.{" "}
							<span
								style={{
									color: "#2c99cb",
									cursor: "pointer",
								}}
							>
								Learn more about keyword themes
							</span>
						</TextField>
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

Keyword.propTypes = {
	back: PropTypes.func,
	handleChange: PropTypes.func,
	handleBlur: PropTypes.func,
	values: PropTypes.object,
	errors: PropTypes.func,
};

export default Keyword;
