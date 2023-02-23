/* eslint-disable react/jsx-key */
import React from "react";

import { Radio, Select } from "antd";

import TextField from "src/common/textField";
import CommonButton from "src/common/button";

import PropTypes from "prop-types";

const Budget = ({ back, handleChange, handleBlur, values, errors }) => {
	const { Option } = Select;

	const budgetValues = [
		{
			price: 845,
			average: "37,326",
			estimated: "30-80",
		},
		{
			price: 3621,
			average: "218,878",
			estimated: "90-200",
		},
		{
			price: 1347,
			average: "540,949",
			estimated: "200-430",
		},
	];

	return (
		<div className="budget_main">
			<div className="budget_content">
				<h3>Set A Budget To Get The Result You Want</h3>
				<div className="budget_main">
					<Radio.Group
						name="definedBudget"
						onChange={(e) => {
							handleChange({
								target: {
									name: "definedBudget",
									value: e.target.value,
								},
							});
						}}
						onBlur={handleBlur}
						value={values.definedBudget}
					>
						<div className="budget_select">
							<Radio value="definedBudget">
								Select a budget option
							</Radio>
							<div className="budget_dropdown">
								<Select
									defaultValue="Currency : USD"
									bordered={false}
								>
									<Option value="usd">USD</Option>
								</Select>
							</div>
						</div>

						<div className="definedBudgetCard">
							{budgetValues.map((price, key) => {
								return (
									<div
										onClick={() => {
											handleChange({
												target: {
													name: "budget",
													value: price,
												},
											});
										}}
									>
										<div
											className={`budget_card ${
												values?.budget?.price ===
												price.price
													? "active"
													: ""
											}`}
											key={key}
											name="budget"
											onBlur={handleBlur}
											value={values.budget}
										>
											<div className="upper_card">
												<div className="currency">
													<span className="symbol">
														$
													</span>
													<span className="pay">
														{price.price}
													</span>
												</div>
												<div className="average">
													<span>
														daily average ·{" "}
														{price.average} monthly
														max
													</span>
												</div>
											</div>
											<div className="lower_card">
												<p>
													Get an estimated{" "}
													{price.estimated} ad clicks
													each month
												</p>
											</div>
										</div>
										{errors?.budget && (
											<div
												style={{
													padding: "10px",
												}}
											>
												<p
													style={{
														color: "red",
														fontSize: "13px",
														marginBottom: "0",
													}}
												>
													{errors?.budget}
												</p>
											</div>
										)}
									</div>
								);
							})}
						</div>
						<div
							className="budget_radio"
							style={{ marginTop: "20px", width: "98%" }}
						>
							<Radio value="customBudget">
								Enter your own budget
							</Radio>
						</div>
						{errors?.definedBudget && (
							<div style={{ padding: "10px" }}>
								<p
									style={{
										color: "red",
										fontSize: "13px",
										marginBottom: "0",
									}}
								>
									{errors?.definedBudget}
								</p>
							</div>
						)}
					</Radio.Group>
					<div className="bottomText">
						<TextField
							textAlign="center"
							fontSize="18px"
							fontFamily="Poppins, sans-serif"
							mt="49px"
							mb="41px"
						>
							You only pay for clicks on your ad. Some days you
							might spend less than your daily average, and on
							others you might spend more. But over the month you{" "}
							{`won't`} pay more than your monthly max.{" "}
							<span
								style={{
									color: "#8DD9C2",
									cursor: "pointer",
								}}
							>
								Learn more
							</span>
						</TextField>
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
		</div>
	);
};

Budget.propTypes = {
	back: PropTypes.func,
	handleChange: PropTypes.func,
	handleBlur: PropTypes.func,
	values: PropTypes.object,
	errors: PropTypes.func,
};

export default Budget;
