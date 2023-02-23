import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Progress } from "antd";
import PropTypes from "prop-types";
import AdDescription from "../DisplayModal/displayAdDescription";
import AdMedia from "../DisplayModal/displayAdMedia";
import AdWebsite from "../DisplayModal/displayAdWebsite";
import LocatedCustomers from "../DisplayModal/locatedCustomers";
import Keyword from "../CommonModalContent/keyword";
import Gender from "../CommonModalContent/gender";
import Budget from "../CommonModalContent/definedBudget";
import CustomBudget from "../CommonModalContent/customBudget";
import BudgetInfoDisplay from "../DisplayModal/budgetInfo";
import Payment from "../CommonModalContent/paymentDetails";
import AdSubmitted from "../CommonModalContent/adSubmitted";

const DisplayModalContent = ({ setIsModalVisible }) => {
	const [step, setStep] = useState(1);

	const back = () => {
		if (step === 1) {
			return "";
		}
		return setStep(step - 1);
	};

	// Formik Form Values

	const initialValues = {
		displayHeadline: "",
		displayDescription: "",

		file: "",

		buttonSelect: "",
		buttonText: "",
		websiteLink: "",

		locatedCustomer: "",
		customerLanguage: "",

		selectedKeyword: [],
		advertise: "",

		gender: "",
		age: "",
		parentalStatus: "",

		definedBudget: "",
		budget: null,

		customBudget: "",

		headline: "",
		description: "",
		buttonLabel: "",
		website: "",
		keyword: "",
		phone: "",
		location: "",
		intrest: "",
		formBudget: "",
	};

	const websiteValidation = [
		Yup.object().shape({
			displayHeadline: Yup.string().required("Please fill this field"),
			displayDescription: Yup.string().required("Please fill this field"),
		}),
		null,
		Yup.object().shape({
			buttonSelect: Yup.string()
				.required("Please select at least one option!")
				.nullable(),
			buttonText: Yup.string().required("Please enter this field"),
			websiteLink: Yup.string()
				.matches(
					/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
					"Enter correct url!"
				)
				.required("Please enter website"),
		}),
		null,
		Yup.object().shape({
			selectedKeyword: Yup.array().min(
				1,
				"Please at least select 1 Keyword!"
			),
			advertise: Yup.string()
				.required("Please select language to Advertise In!")
				.nullable(),
		}),
		null,
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
			headline: Yup.string().required("Please enter headline"),
			description: Yup.string().required("Please enter your description"),
			buttonLabel: Yup.string().required("Please enter this field"),
			website: Yup.string().required("Please enter your website"),
			keyword: Yup.string().required("Please enter your keyword"),
			phone: Yup.string().required("Please enter your phone number"),
			location: Yup.string().required("Please select your location"),
			intrest: Yup.string().required("Please enter your interest"),
			formBudget: Yup.string().required("Please enter your budget"),
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
					<AdDescription
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
					<AdMedia
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
					<AdWebsite
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
					<LocatedCustomers
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
			case 8:
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
			case 9:
				return (
					<BudgetInfoDisplay
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
			case 11:
				return <AdSubmitted setIsModalVisible={setIsModalVisible} />;
			default:
				console.log("some thing wrong");
		}
	};

	return (
		<div className="content">
			<Progress
				showInfo={false}
				percent={9.1 * step}
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

DisplayModalContent.propTypes = {
	setIsModalVisible: PropTypes.bool,
};

export default DisplayModalContent;
