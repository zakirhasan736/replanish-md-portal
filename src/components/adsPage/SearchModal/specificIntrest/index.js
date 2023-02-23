import React from "react";

import { Radio, Divider, Collapse, Checkbox } from "antd";

import EstimatedCard from "src/components/adsPage/SearchModal/specificIntrest/estimatedCard";
import CommonButton from "src/common/button";

import PropTypes from "prop-types";

const Intrest = ({ back, handleChange, handleBlur, values, errors }) => {
	const { Panel } = Collapse;

	return (
		<div className="intrest_main">
			<div className="intrest_content">
				<h3>
					Now, Tell Us If You Want To Reach People With Specific
					Interests
				</h3>
				<div className="intrest_main">
					<div className="left_dropDown">
						<div className="intrest_radio">
							<Radio.Group
								name="intrestOption"
								onChange={(e) => {
									handleChange({
										target: {
											name: "intrestOption",
											value: e.target.value,
										},
									});
								}}
								onBlur={handleBlur}
								value={values.intrestOption}
							>
								<Radio value="broadIntrest">
									Keep interests as broad as possible
								</Radio>
								<br />
								<Radio value="weeklyperformance">
									Estimated weekly performance
								</Radio>
							</Radio.Group>
						</div>
						{errors?.intrestOption && (
							<div style={{ padding: "10px" }}>
								<p
									style={{
										color: "red",
										fontSize: "13px",
										marginBottom: "0",
									}}
								>
									{errors?.intrestOption}
								</p>
							</div>
						)}
						<Divider style={{ margin: 0 }} />
						<div>
							<Collapse
								accordion
								expandIconPosition="right"
								defaultActiveKey={["1"]}
								ghost
							>
								<Panel header="Banking & Finance" key="1">
									<div className="intrest_checkbox">
										<Checkbox>Avid Investors</Checkbox>
										<Checkbox>Banks Online</Checkbox>
									</div>
								</Panel>
								<Divider />
								<Panel header="Beauty & Wellness" key="2">
									<div className="intrest_checkbox">
										<Checkbox>Avid Investors</Checkbox>
										<Checkbox>Banks Online</Checkbox>
									</div>
								</Panel>
								<Divider />
								<Panel header="Food & Dining" key="3">
									<div className="intrest_checkbox">
										<Checkbox>Avid Investors</Checkbox>
										<Checkbox>Banks Online</Checkbox>
									</div>
								</Panel>
								<Divider />
								<Panel header="Home & Garden" key="4">
									<div className="intrest_checkbox">
										<Checkbox>Avid Investors</Checkbox>
										<Checkbox>Banks Online</Checkbox>
									</div>
								</Panel>
								<Divider />
								<Panel header="Lifestyles & Hobbies" key="5">
									<div className="intrest_checkbox">
										<Checkbox>Avid Investors</Checkbox>
										<Checkbox>Banks Online</Checkbox>
									</div>
								</Panel>
								<Divider />
								<Panel header="Media & Entertainment" key="6">
									<div className="intrest_checkbox">
										<Checkbox>Avid Investors</Checkbox>
										<Checkbox>Banks Online</Checkbox>
									</div>
								</Panel>
								<Divider />
								<Panel header="News & Politics" key="7">
									<div className="intrest_checkbox">
										<Checkbox>Avid Investors</Checkbox>
										<Checkbox>Banks Online</Checkbox>
									</div>
								</Panel>
								<Divider />
								<Panel header="Shoppers" key="8">
									<div className="intrest_checkbox">
										<Checkbox>Avid Investors</Checkbox>
										<Checkbox>Banks Online</Checkbox>
									</div>
								</Panel>
								<Divider />
								<Panel header="Sports & Fitness" key="9">
									<div className="intrest_checkbox">
										<Checkbox>Avid Investors</Checkbox>
										<Checkbox>Banks Online</Checkbox>
									</div>
								</Panel>
								<Divider />
								<Panel header="Technology" key="10">
									<div className="intrest_checkbox">
										<Checkbox>Avid Investors</Checkbox>
										<Checkbox>Banks Online</Checkbox>
									</div>
								</Panel>
								<Divider />
								<Panel header="Travel" key="11">
									<div className="intrest_checkbox">
										<Checkbox>Avid Investors</Checkbox>
										<Checkbox>Banks Online</Checkbox>
									</div>
								</Panel>
								<Divider />
								<Panel
									header="Vehicles & Transportation"
									key="12"
								>
									<div className="intrest_checkbox">
										<Checkbox>Avid Investors</Checkbox>
										<Checkbox>Banks Online</Checkbox>
									</div>
								</Panel>
							</Collapse>
						</div>
					</div>
					<div className="intrestCard">
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
			</div>
		</div>
	);
};

Intrest.propTypes = {
	back: PropTypes.func,
	handleChange: PropTypes.func,
	handleBlur: PropTypes.func,
	values: PropTypes.object,
	errors: PropTypes.func,
};

export default Intrest;
