import React from "react";
import { Input, Image } from "antd";

import InputFieldNoCount from "src/common/inputFieldWithoutCount";
import CommonButton from "src/common/button";

import PropTypes from "prop-types";

const BudgetInfoSearch = ({
	back,
	handleChange,
	handleBlur,
	values,
	errors,
}) => {
	const { TextArea } = Input;

	return (
		<div className="budgetInfo_main">
			<div className="budgetInfo_content">
				<h3>Set A Budget To Get The Results You Want</h3>
				<div className="budgetInfo_main">
					<div className="budgetInfo_main_left">
						<div className="fieldAndEdit">
							<div className="field">
								<InputFieldNoCount
									label="Campaign name"
									placeholder="Yahoo"
									name="campaignName"
									value={values.campaignName}
									onBlur={handleBlur}
									onChange={handleChange}
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
						<div className="withoutEdit">
							<InputFieldNoCount
								label="Campaign goal"
								placeholder="Website traffic"
								name="campaignGoal"
								value={values.campaignGoal}
								onBlur={handleBlur}
								onChange={handleChange}
								errors={errors}
							/>
							<InputFieldNoCount
								label="Your website"
								placeholder="www.yhoo.com"
								name="websiteName"
								value={values.websiteName}
								onBlur={handleBlur}
								onChange={handleChange}
								errors={errors}
							/>
							<InputFieldNoCount
								label="Business name"
								placeholder="Maks Branding"
								name="businessName"
								value={values.businessName}
								onBlur={handleBlur}
								onChange={handleChange}
								errors={errors}
							/>
						</div>
						<div className="fieldAndEdit">
							<div className="fieldAndEdit_textArea">
								<div className="field">
									<div
										style={{
											marginTop: "15px",
											marginBottom: "15px",
										}}
									>
										<p style={{ marginBottom: "5px" }}>
											Description
										</p>
										<div className="info_textArea">
											<TextArea
												placeholder="Yahoo Yahoo Native - Advertiser Company in India | We Can Optimize Your Website to Rank Higher on Search Engines. Learn More Now. Our Search Engine Optimization Team Can Diagnose and Fix Your Website Ranking Issues."
												rows={4}
												name="description"
												value={values.description}
												onBlur={handleBlur}
												onChange={handleChange}
											/>
										</div>
										{errors?.description && (
											<div>
												<p
													style={{
														color: "red",
														fontSize: "13px",
														marginBottom: "0",
													}}
												>
													{errors?.description}
												</p>
											</div>
										)}
									</div>
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
						<div className="withoutEdit">
							<InputFieldNoCount
								label="Phone Number"
								placeholder="+17203004969"
								type="number"
								name="phoneNumberInfo"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.phoneNumberInfo}
								errors={errors}
							/>
						</div>
						<div className="fieldAndEdit">
							<div className="field">
								<InputFieldNoCount
									label="Location"
									placeholder="Central African Republic, China, India, Pakistan, Russia and 3 more"
									name="location"
									value={values.location}
									onBlur={handleBlur}
									onChange={handleChange}
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
						<div className="fieldAndEdit">
							<div className="field">
								<InputFieldNoCount
									label="Keyword themes"
									placeholder="yahoo native ads"
									name="keywordTheme"
									value={values.keywordTheme}
									onBlur={handleBlur}
									onChange={handleChange}
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
						<div className="fieldAndEdit">
							<div className="field">
								<InputFieldNoCount
									label="Intrests"
									placeholder="Avid Investors, Banks Online, Coffee Shop Regulars, Cooking  (and 4 more)"
									name="interest"
									value={values.interest}
									onBlur={handleBlur}
									onChange={handleChange}
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
						<div className="fieldAndEdit">
							<div className="field">
								<InputFieldNoCount
									label="Budget"
									placeholder="37,509 daily average
                        228,274 monthly max"
									name="budgetInfo"
									value={values.budgetInfo}
									onBlur={handleBlur}
									onChange={handleChange}
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
					<div className="budgetInfo_Card">
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
		</div>
	);
};

BudgetInfoSearch.propTypes = {
	back: PropTypes.func,
	handleChange: PropTypes.func,
	handleBlur: PropTypes.func,
	values: PropTypes.object,
	errors: PropTypes.func,
};

export default BudgetInfoSearch;
