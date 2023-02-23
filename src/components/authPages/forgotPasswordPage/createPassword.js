import { Button, Form, notification } from "antd";
import React from "react";
import TextField from "src/common/textField";
import { PassIcon } from "src/components/SVGImageIcon/passIcon";
import AuthCard from "../authCard";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { resetPassword } from "../auth/services";
import { useEffect } from "react";

const propTypes = {
	changePassHandler: PropTypes.func,
};

const CreatePassword = ({ changePassHandler }) => {
	const dispatch = useDispatch();

	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const { isLoading, isLogged, errorMessage, isFailure, user } = useSelector(
		({ auth }) => auth
	);

	console.log("isLoading:", isLoading);
	console.log("isLogged:", isLogged);
	console.log("errorMessage:", errorMessage);
	console.log("isFailure:", isFailure);

	const handleChange = (_, allValues) => {
		setPassword(allValues.password);
		setConfirmPassword(allValues.confirmPassword);
	};

	const onFinish = async (_) => {
		const payload = {
			email: user?.email,
			password,
			confirm_password: confirmPassword,
		};

		try {
			const response = await dispatch(resetPassword(payload)).unwrap();
			console.log("response =>", response);

			if (response) {
				notification.success({
					message: response?.message,
				});
				changePassHandler();
			}
		} catch (error) {
			console.log("error =>", error);
		}
	};

	useEffect(() => {
		if (isFailure) {
			notification.error({
				message: `Invalid credentials`,
			});
		}
	}, [isFailure]);
	return (
		<AuthCard
			heading="Create New password"
			title="Your password provides you with sign in access to CVRKortet, so it's important we get it right."
		>
			<Form
				name="password form"
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				onValuesChange={handleChange}
			>
				<Form.Item
					name="password"
					rules={[
						{
							required: true,
							message: "Please input your Password!",
						},
						{
							pattern:
								/(?=[A-Za-z0-9$@#%]+$)^(?=.*[A-Z])(?=.*[a-z])(?=.*[$@#%])(?=.{8,}).*$/,
							min: 8,
							message:
								"Password must have least 1 uppercase, 1 lowercase letter, 1 $@#% and minimum 8 length",
						},
					]}
				>
					<TextField
						placeholder="Create Password"
						prefix={PassIcon}
						type="password"
					/>
				</Form.Item>
				<Form.Item
					name="confirmPassword"
					rules={[
						{
							required: true,
							message: "Please confirm your password!",
						},

						({ getFieldValue }) => ({
							validator(_, value) {
								if (
									!value ||
									getFieldValue("password") === value
								) {
									return Promise.resolve();
								}
								return Promise.reject(
									new Error(
										"The two passwords that you entered do not match!"
									)
								);
							},
						}),
					]}
				>
					<TextField
						placeholder="Confirm Password"
						prefix={PassIcon}
						type="password"
					/>
				</Form.Item>

				<Button
					block
					className="filled-btn"
					// onClick={createPassHandler}
					loading={isLoading}
					htmlType="submit"
				>
					Create Password
				</Button>
			</Form>
		</AuthCard>
	);
};

CreatePassword.propTypes = propTypes;

export default CreatePassword;
