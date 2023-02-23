import React, { useState } from "react";

// eslint-disable-next-line import/no-unresolved
import { Formik } from "formik";

// eslint-disable-next-line import/no-unresolved
import * as Yup from "yup";

import { Progress } from "antd";

import PropTypes from "prop-types";

import VideoAdMedia from "../VideoModal/videoAdMedia";
import SelectVideo from "../VideoModal/videoAdWebsite";
import CustomersLanguage from "../VideoModal/locatedCustomers";
import VideoAge from "../VideoModal/customersGender";
import VideoIntrest from "../VideoModal/videoIntrest";
import ContinousAd from "../VideoModal/continousAd";
import DurationAd from "../VideoModal/durationAd";
import CampainReview from "../VideoModal/reviewForm";
import Payment from "../CommonModalContent/paymentDetails";
import AdSubmitted from "../CommonModalContent/adSubmitted";

const VideoModalContent = ({ setIsModalVisible }) => {
	const [step, setStep] = useState(1);

	const back = () => {
		// eslint-disable-next-line no-unused-expressions
		step === 1 ? "" : setStep(step - 1);
	};
	const initialValues = {
		videoSelect: "",

		landingPage: "",
		buttonLabel: "",
		videoHealine: "",
		device: "mobile",

		gender: "",
		age: "",
		parentalStatus: "",

		intrestOption: "",

		dailyBudget: "",
		adOption: "",

		dailyBudgetSecond: "",
		adOptionEndDate: "",

		campaignName: "",
		adShow: "",
		landingPageBudget: "",
		buttonLabelBudget: "",
		headline: "",
		location: "",
		languages: "",
		demographics: "",
		interest: "",
		dailyBudgetBudget: "",

		payeeName: "",
		cvv: "",
		cardNumber: "",
		expirationDate: "",
	};

	const websiteValidation = [
		Yup.object().shape({
			videoSelect: Yup.string().required("This field is requried"),
		}),
		Yup.object().shape({
			landingPage: Yup.string()
				.matches(
					/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
					"Enter correct url!"
				)
				.required("Please enter website"),
			buttonLabel: Yup.string().required("This field is requried"),
			videoHealine: Yup.string().required("This field is requried"),
		}),
		null,
		null,
		Yup.object().shape({
			intrestOption: Yup.string().required("Select at least one option"),
		}),
		Yup.object().shape({
			dailyBudget: Yup.string().required(
				"Please enter your daily budget"
			),
			adOption: Yup.string().required(
				"Please select at least one option"
			),
		}),
		Yup.object().shape({
			dailyBudgetSecond: Yup.string().required(
				"Please enter your daily budget"
			),
			adOptionEndDate: Yup.string().required(
				"Please select at least one option"
			),
		}),
		Yup.object().shape({
			campaignName: Yup.string().required("This field is requried"),
			adShow: Yup.string().required("This field is requried"),
			landingPageBudget: Yup.string()
				.matches(
					/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
					"Enter correct url!"
				)
				.required("Please enter website"),
			buttonLabelBudget: Yup.string().required("This field is requried"),
			headline: Yup.string().required("This field is requried"),
			location: Yup.string().required("This field is requried"),
			languages: Yup.string().required("This field is requried"),
			demographics: Yup.string().required("This field is requried"),
			interest: Yup.string().required("This field is requried"),
			dailyBudgetBudget: Yup.string().required("This field is requried"),
		}),
		Yup.object().shape({
			payeeName: Yup.string().required("This field is requried"),
			cvv: Yup.string().required("This field is requried"),
			cardNumber: Yup.string().required("This field is requried"),
			expirationDate: Yup.string().required("This field is requried"),
		}),
	];

	const renderComponent = (
		handleSubmit,
		handleChange,
		handleBlur,
		values,
		errors,
		touched,
		isSubmitting
	) => {
		switch (step) {
			case 1:
				return (
					<VideoAdMedia
						back={back}
						handleSubmit={handleSubmit}
						handleChange={handleChange}
						handleBlur={handleBlur}
						values={values}
						errors={errors}
						touched={touched}
						isSubmitting={isSubmitting}
					/>
				);
			case 2:
				return (
					<SelectVideo
						back={back}
						handleSubmit={handleSubmit}
						handleChange={handleChange}
						handleBlur={handleBlur}
						values={values}
						errors={errors}
						touched={touched}
						isSubmitting={isSubmitting}
					/>
				);
			case 3:
				return (
					<CustomersLanguage
						back={back}
						handleSubmit={handleSubmit}
						handleChange={handleChange}
						handleBlur={handleBlur}
						values={values}
						errors={errors}
						touched={touched}
						isSubmitting={isSubmitting}
					/>
				);
			case 4:
				return (
					<VideoAge
						back={back}
						handleSubmit={handleSubmit}
						handleChange={handleChange}
						handleBlur={handleBlur}
						values={values}
						errors={errors}
						touched={touched}
						isSubmitting={isSubmitting}
					/>
				);
			case 5:
				return (
					<VideoIntrest
						back={back}
						handleSubmit={handleSubmit}
						handleChange={handleChange}
						handleBlur={handleBlur}
						values={values}
						errors={errors}
						touched={touched}
						isSubmitting={isSubmitting}
					/>
				);
			case 6:
				return (
					<ContinousAd
						back={back}
						handleSubmit={handleSubmit}
						handleChange={handleChange}
						handleBlur={handleBlur}
						values={values}
						errors={errors}
						touched={touched}
						isSubmitting={isSubmitting}
					/>
				);
			case 7:
				return (
					<DurationAd
						back={back}
						handleSubmit={handleSubmit}
						handleChange={handleChange}
						handleBlur={handleBlur}
						values={values}
						errors={errors}
						touched={touched}
						isSubmitting={isSubmitting}
					/>
				);
			case 8:
				return (
					<CampainReview
						back={back}
						handleSubmit={handleSubmit}
						handleChange={handleChange}
						handleBlur={handleBlur}
						values={values}
						errors={errors}
						touched={touched}
						isSubmitting={isSubmitting}
					/>
				);
			case 9:
				return (
					<Payment
						back={back}
						handleSubmit={handleSubmit}
						handleChange={handleChange}
						handleBlur={handleBlur}
						values={values}
						errors={errors}
						touched={touched}
						isSubmitting={isSubmitting}
					/>
				);
			case 10:
				return <AdSubmitted setIsModalVisible={setIsModalVisible} />;
			default:
				console.log("some thing wrong");
		}
	};

	return (
		<div className="content">
			<Progress
				showInfo={false}
				percent={10 * step}
				style={{
					padding: "0 40px",
					marginTop: "27px",
				}}
			/>
			<Formik
				initialValues={initialValues}
				validationSchema={websiteValidation[step - 1]}
				onSubmit={(values, actions) => {
					console.log("🚀 ~ values", JSON.stringify(values, null, 2));
					actions.setSubmitting(false);
					setStep(step + 1);
				}}
			>
				{({
					handleSubmit,
					handleChange,
					handleBlur,
					values,
					errors,
					touched,
					isSubmitting,
				}) => (
					<form onSubmit={handleSubmit}>
						{renderComponent(
							handleSubmit,
							handleChange,
							handleBlur,
							values,
							errors,
							touched,
							isSubmitting
						)}
					</form>
				)}
			</Formik>
		</div>
	);
};

VideoModalContent.propTypes = {
	setIsModalVisible: PropTypes.func,
};

export default VideoModalContent;
