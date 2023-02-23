import { Button, Form, notification } from "antd";
import React from "react";
import TextField from "src/common/textField";
import { PassIcon } from "src/components/SVGImageIcon/passIcon";
import AuthCard from "../authCard";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { register } from "../auth/services";
import { useRouter } from "next/router";

const propTypes = {
	createPassHandler: PropTypes.func,
};

const CreatePassword = ({ createPassHandler }) => {
	const dispatch = useDispatch();
	const router = useRouter();

	const [password, setPassword] = useState("");

	const { isLoading, isLogged, errorMessage, isFailure, user } = useSelector(
		({ auth }) => auth
	);

	console.log("isLoading:", isLoading);
	console.log("isLogged:", isLogged);
	console.log("errorMessage:", errorMessage);
	console.log("isFailure:", isFailure);

	const handleChange = (_, allValues) => {
		setPassword(allValues.password);
	};

	const onFinish = async (_) => {
		const payload = {
			email: user?.email,
			username: user?.username,
			password,
		};

		try {
			const response = await dispatch(register(payload)).unwrap();
			console.log("response =>", response);

			if (response) {
				notification.success({
					message: response?.message,
				});
				createPassHandler();
			}
		} catch (error) {
			console.log("error =>", error);
		}
	};

	useEffect(() => {
		if (isFailure) {
			notification.error({
				message: `User or Email Already Exist!`,
			});
			router.push("/sign-up");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isFailure]);
	return (
		<AuthCard
			heading="Create your password"
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
							min: 8,
							message: "Please enter minimum 8 length",
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
					name="confrimPassword"
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
