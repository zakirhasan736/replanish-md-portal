import React from "react";

import { Alert, Image } from "antd";

import InputFieldNoCount from "src/common/inputFieldWithoutCount";
import TextField from "src/common/textField";
import EstimatedCard from "src/components/adsPage/SearchModal/specificIntrest/estimatedCard";
import CommonButton from "src/common/button";

import PropTypes from "prop-types";

const CampainReview = ({ back, handleChange, handleBlur, values, errors }) => {
	const onClose = (e) => {
		console.log(e, "I was closed.");
	};
	return (
		<div className="review_ad">
			<div className="review_ad_main">
				<h3>
					Review Your Campaign To Be Sure It&apos;s How You Want It
				</h3>
			</div>
			<div className="review_ad_content">
				<div className="edit_fields">
					<div className="inputField">
						<InputFieldNoCount
							label="Campaign name"
							placeholder="qanday ishlab ch.."
							name="campaignName"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.campaignName}
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
				<TextField mb={10} fontSize={15} mt={15}>
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
					className="alert"
				/>
				<div className="edit_fields">
					<div className="inputField">
						<InputFieldNoCount
							label="How your ad shows"
							placeholder="Automatically played before, during or after other YouTube videos"
							name="adShow"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.adShow}
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
							label="Landing page"
							placeholder="www.behance.net"
							name="landingPageBudget"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.landingPageBudget}
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
							label="Button label"
							placeholder="Button"
							name="buttonLabelBudget"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.buttonLabelBudget}
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
				<div className="review_fields">
					<div className="withoutEdit">
						<InputFieldNoCount
							label="Headline"
							placeholder="Headline of vid"
							name="headline"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.headline}
							errors={errors}
						/>
					</div>
				</div>
				<div className="review_fields">
					<div className="withoutEdit">
						<InputFieldNoCount
							label="Locations"
							placeholder="United States"
							name="location"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.location}
							errors={errors}
						/>
					</div>
				</div>
				<div className="edit_fields">
					<div className="inputField">
						<InputFieldNoCount
							label="Languages"
							placeholder="English"
							name="languages"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.languages}
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
							label="Demographics"
							placeholder="Any age, Any gender, Any parental status "
							name="demographics"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.demographics}
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
							label="Interests"
							placeholder="Avid Investors, Banks Online, Coffee Shop Regulars, Cooking  (and 4 more)"
							name="interest"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.interest}
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
							label="Daily budget"
							placeholder="*5,000.00 (set to run until Apr 23, 2022)"
							name="dailyBudgetBudget"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.dailyBudgetBudget}
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
			<div className="review_card">
				<EstimatedCard />
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

CampainReview.propTypes = {
	back: PropTypes.func,
	handleChange: PropTypes.func,
	handleBlur: PropTypes.func,
	values: PropTypes.object,
	errors: PropTypes.func,
};

export default CampainReview;
