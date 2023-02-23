import React, { useState } from "react";

import { InputNumber, Radio, Select, Slider } from "antd";
import TextField from "src/common/textField";
import CommonButton from "src/common/button";
import PropTypes from "prop-types";

const propTypes = {
	back: PropTypes.func,
	handleSubmit: PropTypes.func,
	handleChange: PropTypes.func,
	handleBlur: PropTypes.func,
	values: PropTypes.string,
	errors: PropTypes.string,
	touched: PropTypes.string,
	isSubmitting: PropTypes.bool,
};

const CustomBudget = ({
	back,
	handleSubmit,
	handleChange,
	handleBlur,
	values,
	errors,
	touched,
	isSubmitting,
}) => {
	const { Option } = Select;

	const [inputValue, setInputValue] = useState(0);

	return (
		<div className="custom_budget_main">
			<div className="budget_content_2">
				<h3>Set A Budget To Get The Result You Want</h3>
				<div className="custom_budget_main">
					{/* <Radio.Group> */}
					<div className="budget_radio">
						<Radio value={1}>Select a budget option</Radio>
					</div>
					<div className="custom_budget_select">
						<Radio value={2}>Enter your own budget</Radio>
						<div className="custom_budget_dropdown">
							Currency :
							<Select defaultValue="USD" bordered={false}>
								<Option value="usd">USD</Option>
							</Select>
						</div>
					</div>
					{/* </Radio.Group> */}
					<div className="amount">
						<div className="amount_input">
							<InputNumber
								min={1}
								max={1000}
								value={values.customBudget}
								name="customBudget"
								onChange={(e) => {
									handleChange({
										target: {
											name: "customBudget",
											value: e,
										},
									});
									setInputValue(e);
								}}
							/>
						</div>
						<TextField
							fontSize="15px"
							fontWeight="600"
							fontFamily="Lato, sans-serif"
							mt="12px"
							paddingLeft="10px"
						>
							daily average spend is $1100
						</TextField>
					</div>
					<div className="slider">
						<Slider
							min={1}
							max={1000}
							name="customBudget"
							onChange={(e) => {
								handleChange({
									target: {
										name: "customBudget",
										value: e,
									},
								});
								setInputValue(e);
							}}
							value={
								inputValue === "number"
									? inputValue
									: inputValue
							}
						/>
						{errors?.customBudget && (
							<div style={{ padding: "10px" }}>
								<p
									style={{
										color: "red",
										fontSize: "13px",
										marginBottom: "0",
									}}
								>
									{errors?.customBudget}
								</p>
							</div>
						)}
					</div>
				</div>
				<div className="button_main">
					<CommonButton
						child="Finish"
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

CustomBudget.propTypes = propTypes;

export default CustomBudget;
