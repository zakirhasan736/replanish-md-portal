import React, { useState } from "react";

// eslint-disable-next-line import/no-unresolved
import { Formik } from "formik";

// eslint-disable-next-line import/no-unresolved
import * as Yup from "yup";

import { Progress } from "antd";

import PropTypes from "prop-types";

import Website from "../SearchModal/websiteTraffic";
import Scanning from "../SearchModal/scanning";
import MobileWeb from "../SearchModal/mobileWeb";
import WriteAD from "../SearchModal/writeAD";
import Keyword from "../CommonModalContent/keyword";
import Gender from "../CommonModalContent/gender";
import Places from "../SearchModal/adMap";
import Intrest from "../SearchModal/specificIntrest";
import Budget from "../CommonModalContent/definedBudget";
import CustomBudget from "../CommonModalContent/customBudget";
import BudgetInfoSearch from "../SearchModal/budgetInfo";
import Payment from "../CommonModalContent/paymentDetails";
import AdSubmitted from "../CommonModalContent/adSubmitted";

const SearchModalContent = ({ setIsModalVisible }) => {
	const [step, setStep] = useState(1);
	const [showComponent, setShowComponent] = useState(true);

	const back = () => {
		// eslint-disable-next-line no-unused-expressions
		step === 1 ? "" : setStep(step - 1);
	};

	if (step === 2) {
		setTimeout(() => {
			setShowComponent(!showComponent);
			setStep(3);
		}, 1000);
	}

	// Formik Form Values

	const initialValues = {
		websiteLandingModal: "",

		device: "mobile",

		headline1: "",
		headline2: "",
		headline3: "",
		description1: "",
		description2: "",
		adButton: false,
		phoneNumber: null,

		selectedKeyword: [],
		advertise: "",

		gender: "",
		age: "",
		parentalStatus: "",

		adArea: "",
		cityName: "",

		intrestOption: "",

		definedBudget: "",
		budget: null,

		customBudget: "",

		campaignName: "",
		campaignGoal: "",
		websiteName: "",
		businessName: "",
		description: "",
		phoneNumberInfo: null,
		location: "",
		keywordTheme: "",
		interest: "",
		budgetInfo: "",

		payeeName: "",
		cvv: "",
		cardNumber: "",
		expirationDate: "",
	};

	const websiteValidation = [
		Yup.object().shape({
			websiteLandingModal: Yup.string()
				.matches(
					/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
					"Enter correct url!"
				)
				.required("Please enter website"),
		}),
		null,
		null,
		Yup.object().shape({
			headline1: Yup.string()
				.min(10, "Must be more than 10 characters")
				.required("This field is requried"),
			headline2: Yup.string()
				.min(10, "Must be more than 10 characters")
				.required("This field is requried"),
			headline3: Yup.string()
				.min(10, "Must be more than 10 characters")
				.required("This field is requried"),
			description1: Yup.string()
				.min(20, "Must be more than 20 characters")
				.required("This field is requried"),
			description2: Yup.string()
				.min(20, "Must be more than 20 characters")
				.required("This field is requried"),
			phoneNumber: Yup.number()
				.typeError("That doesn't look like a phone number")
				.positive("A phone number can't start with a minus")
				.integer("A phone number can't include a decimal point")
				.min(7)
				.required("A phone number is required"),
		}),
		Yup.object().shape({
			selectedKeyword: Yup.array().min(
				1,
				"Please at least select 1 Keyword!"
			),
			advertise: Yup.string()
				.required("Please select language to Advertise In!")
				.nullable(),
		}),
		// Yup.object().shape({
		//   genderCheckbox: Yup.boolean().oneOf(
		//     [true],
		//     "You must accept the terms and conditions"
		//   ),
		// }),
		null,
		Yup.object().shape({
			adArea: Yup.string().required("Please select area to show your Ad"),
			cityName: Yup.string()
				.min(5, "Must be more than 10 characters")
				.required("This field is requried"),
		}),
		Yup.object().shape({
			intrestOption: Yup.string().required("Select at least one option"),
		}),
		Yup.object().shape({
			definedBudget: Yup.string().required("Please select budget option"),
			budget: Yup.object()
				.required("Please select your budget")
				.nullable(),
		}),
		Yup.object().shape({
			customBudget: Yup.string().required("Please select your Budget"),
		}),
		Yup.object().shape({
			campaignName: Yup.string().required(
				"Please enter your Campaingn Name"
			),
			campaignGoal: Yup.string().required(
				"Please enter your Campaingn Goal"
			),
			websiteName: Yup.string()
				.matches(
					/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
					"Enter correct url!"
				)
				.required("Please enter website"),
			businessName: Yup.string().required(
				"Please enter your Business Name"
			),
			description: Yup.string().required("Please enter Description"),
			phoneNumberInfo: Yup.number()
				.typeError("That doesn't look like a phone number")
				.positive("A phone number can't start with a minus")
				.integer("A phone number can't include a decimal point")
				.min(7)
				.required("A phone number is required"),
			location: Yup.string().required("Please enter your location"),
			keywordTheme: Yup.string().required(
				"Please enter your Selected Keywords"
			),
			interest: Yup.string().required("Please enter your interest"),
			budgetInfo: Yup.string().required("Please enter your budget"),
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
					<Website
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
				return <Scanning />;
			case 3:
				return (
					<MobileWeb
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
					<WriteAD
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
					<Keyword
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
					<Gender
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
					<Places
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
					<Intrest
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
					<Budget
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
				return (
					<CustomBudget
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
			case 11:
				return (
					<BudgetInfoSearch
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
			case 12:
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
			case 13:
				return <AdSubmitted setIsModalVisible={setIsModalVisible} />;
			default:
				console.log("some thing wrong");
		}
	};

	return (
		<div className="content">
			<Progress
				showInfo={false}
				percent={8 * step}
				style={{
					padding: "0 40px",
					marginTop: "27px",
				}}
			/>
			<Formik
				initialValues={initialValues}
				validationSchema={websiteValidation[step - 1]}
				onSubmit={(values, actions) => {
					if (step === 2) {
						console.log("values", values);
					} else {
						console.log("values", values);
						actions.setSubmitting(false);
						setStep(step + 1);
					}
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

SearchModalContent.propTypes = {
	setIsModalVisible: PropTypes.func,
};

export default SearchModalContent;
