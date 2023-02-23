import React from "react";

import { Input, Image } from "antd";

import InputFieldNoCount from "src/common/inputFieldWithoutCount";
import TextField from "src/common/textField";
import BudgetCard from "src/components/adsPage/DisplayModal/budgetInfo/budgetCard";
import CommonButton from "src/common/button";

import PropTypes from "prop-types";

const BudgetInfoDisplay = ({
	back,
	handleChange,
	handleBlur,
	values,
	errors,
}) => {
	const { TextArea } = Input;

	return (
		<div className="budget_customer">
			<h3>Set A Budget To Get The Results You Want</h3>
			<div className="budget_customer_content">
				<div className="budget_modal">
					<div className="budget_fields">
						<div className="edit_fields">
							<div className="inputField">
								<InputFieldNoCount
									label="Headline"
									placeholder="Yahoo"
									name="headline"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.headline}
									errors={errors}
								/>
							</div>
							<div className="edit">
								<Image
									src="/assets/writeAd/Vector.svg"
									width="24px"
									height="24px"
									alt="card"
								/>
							</div>
						</div>
						<div className="edit_fields">
							<div className="budget_textArea">
								<p
									style={{
										marginBottom: "0.5em",
										marginTop: "10px",
									}}
								>
									Description
								</p>
								<TextArea
									placeholder="Yahoo Yahoo Native - Advertiser Company in India | We Can Optimize Your Website to Rank Higher on Search Engines. Learn More Now. Our Search Engine Optimization Team Can Diagnose and Fix Your Website Ranking Issues."
									rows={5}
									name="description"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.description}
								/>
								{errors?.description && (
									<div>
										<p
											style={{
												color: "red",
												fontSize: "14px",
												marginBottom: "0",
											}}
										>
											{errors?.description}
										</p>
									</div>
								)}
							</div>
							<div className="edit">
								<Image
									src="/assets/writeAd/Vector.svg"
									width="24px"
									height="24px"
									alt="card"
								/>
							</div>
						</div>
						<div className="edit_fields">
							<div className="inputField">
								<TextField mb={5}>Image</TextField>
								<Image
									src="/assets/writeAd/unsplash_6lQDFGOB1iw.svg"
									width="92%"
									height="auto"
									alt="image"
								/>
								<TextField fontSize="16px" mt="5px" mb={10}>
									Abc.png
								</TextField>
							</div>
							<div className="edit">
								<Image
									src="/assets/writeAd/Vector.svg"
									width="24px"
									height="24px"
									alt="card"
								/>
							</div>
						</div>
						<InputFieldNoCount
							label="Button Label"
							placeholder="Button"
							name="buttonLabel"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.buttonLabel}
							errors={errors}
						/>
						<InputFieldNoCount
							label="Your website"
							placeholder="www.yahoo.com"
							name="website"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.website}
							errors={errors}
						/>
						<div className="edit_fields">
							<div className="inputField">
								<InputFieldNoCount
									label="Keyword themes"
									placeholder="yahoo native ads"
									name="keyword"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.keyword}
									errors={errors}
								/>
							</div>
							<div className="edit">
								<Image
									src="/assets/writeAd/Vector.svg"
									width="24px"
									height="24px"
									alt="card"
								/>
							</div>
						</div>
						<InputFieldNoCount
							label="Phone number"
							placeholder="+17203004969"
							name="phone"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.phone}
							errors={errors}
						/>
						<div className="edit_fields">
							<div className="inputField">
								<InputFieldNoCount
									label="Locations"
									placeholder="Central African Republic, China, India, Pakistan, Russia and 3 more"
									name="location"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.location}
									errors={errors}
								/>
							</div>
							<div className="edit">
								<Image
									src="/assets/writeAd/Vector.svg"
									width="24px"
									height="24px"
									alt="card"
								/>
							</div>
						</div>
						<div className="edit_fields">
							<div className="inputField">
								<InputFieldNoCount
									label="Intrests"
									placeholder="Avid Investors, Banks Online, Coffee Shop Regulars, Cooking  (and 4 more)"
									name="intrest"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.intrest}
									errors={errors}
								/>
							</div>
							<div className="edit">
								<Image
									src="/assets/writeAd/Vector.svg"
									width="24px"
									height="24px"
									alt="card"
								/>
							</div>
						</div>
						<div className="edit_fields">
							<div className="inputField">
								<InputFieldNoCount
									label="Budget"
									placeholder="37,509 daily average 228,274 monthly max"
									name="formBudget"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.formBudget}
									errors={errors}
								/>
							</div>
							<div className="edit">
								<Image
									src="/assets/writeAd/Vector.svg"
									width="24px"
									height="24px"
									alt="card"
								/>
							</div>
						</div>
					</div>
					<div className="diplay_form_card">
						<BudgetCard />
					</div>
				</div>
			</div>
			<div className="button_main">
				<CommonButton
					child="Payment debts"
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

BudgetInfoDisplay.propTypes = {
	back: PropTypes.func,
	handleChange: PropTypes.func,
	handleBlur: PropTypes.func,
	values: PropTypes.object,
	errors: PropTypes.func,
};

export default BudgetInfoDisplay;
