import { Button, Form, notification } from "antd";
import React from "react";
import TextField from "src/common/textField";
import { PassIcon } from "src/components/SVGImageIcon/passIcon";
import AuthCard from "../authCard";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { otpVerification } from "../auth/services";
import { useState } from "react";
import { useEffect } from "react";

const propTypes = {
	verifyHandler: PropTypes.func,
	resendHanlder: PropTypes.func,
};

const ConfirmCode = ({ verifyHandler, resendHanlder }) => {
	const dispatch = useDispatch();

	const [otpCode, setOtpCode] = useState("");

	const { isLoading, errorMessage, isFailure, data, user } = useSelector(
		({ auth }) => auth
	);
	console.log("user:", user);

	console.log("data:", data);
	console.log("isLoading:", isLoading);
	console.log("errorMessage:", errorMessage);
	console.log("isFailure:", isFailure);

	const handleChange = (_, allValues) => {
		setOtpCode(allValues.email);
	};

	const onFinish = async (_) => {
		const payload = {
			otp: otpCode,
			email: user?.email,
		};

		try {
			const response = await dispatch(otpVerification(payload)).unwrap();
			console.log("response =>", response);

			if (response) {
				notification.success({
					message: response?.message,
				});
				verifyHandler();
			}
		} catch (error) {
			console.log("error =>", error);
		}

		// await dispatch(otpVerification(payload)).unwrap();
		// // dispatch(userLogged());
		// verifyHandler();
	};

	useEffect(() => {
		if (isFailure) {
			notification.error({
				message: `OTP was expired. Please check your inbox`,
			});
		}
	}, [isFailure]);

	return (
		<AuthCard
			heading="Confirm you are you"
			title="Making sure you are secure -- it's what we do."
		>
			<p className="verification-email">
				We sent an email with a verification code to
				<br />
				<b>{user?.email}</b>. (Not you?)
			</p>
			<Form
				name="otp form"
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				onValuesChange={handleChange}
			>
				<Form.Item
					name="email"
					rules={[
						{
							required: true,
							message: `Please input your OTP code!`,
						},
						{
							min: 5,
							max: 5,
							message: "Please enter 5 digit code",
						},
					]}
				>
					<TextField
						placeholder="Verification code"
						prefix={PassIcon}
						type="text"
					/>
				</Form.Item>

				<Button
					block
					className="filled-btn"
					// onClick={verifyHandler}
					loading={isLoading}
					htmlType="submit"
				>
					Verify
				</Button>
				<Button block className="border-btn" onClick={resendHanlder}>
					Resend code
				</Button>
			</Form>
		</AuthCard>
	);
};

ConfirmCode.propTypes = propTypes;

export default ConfirmCode;
