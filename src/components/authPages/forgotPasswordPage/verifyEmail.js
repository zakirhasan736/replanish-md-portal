import { Button, Divider, Form, notification } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import TextField from "src/common/textField";
import { EmailIcon } from "src/components/SVGImageIcon/emailIcon";
import AuthCard from "../authCard";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../auth/services";
import { useEffect } from "react";
import { setUser } from "../auth/authslice";

const propTypes = {
	verifyEmailHanlder: PropTypes.func,
};

const VerifyEmail = ({ verifyEmailHanlder }) => {
	const dispatch = useDispatch();

	const [email, setEmail] = useState("");

	const { isLoading, isLogged, errorMessage, isFailure } = useSelector(
		({ auth }) => auth
	);

	console.log("isLoading:", isLoading);
	console.log("isLogged:", isLogged);
	console.log("errorMessage:", errorMessage);
	console.log("isFailure:", isFailure);

	const handleChange = (_, allValues) => {
		setEmail(allValues.email);
	};

	const onFinish = async (_) => {
		const payload = {
			email,
		};
		dispatch(setUser(payload));

		try {
			const response = await dispatch(forgotPassword(payload)).unwrap();
			console.log("response =>", response);

			if (response) {
				notification.success({
					message: response?.message,
				});
				verifyEmailHanlder();
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
			heading="Recover Password"
			title="Making sure you are secure -- it's what we do."
		>
			<Form
				name="forgot form"
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
							type: "email",
							message: `Please enter correct E-mail!`,
						},
						{
							required: true,
							message: `Please input your E-mail!`,
						},
					]}
				>
					<TextField
						placeholder="E-mail"
						prefix={EmailIcon}
						type="email"
					/>
				</Form.Item>
				<Button
					block
					className="filled-btn"
					// onClick={verifyEmailHanlder}
					loading={isLoading}
					htmlType="submit"
				>
					Verify your email address
				</Button>
				<Divider>
					<p className="or-text">Or</p>
				</Divider>
				<p className="account-text">
					Already have an account? &nbsp;
					<Link href="/login">
						<a className="create-account-text">Let’s Sign in</a>
					</Link>
				</p>
			</Form>
		</AuthCard>
	);
};

VerifyEmail.propTypes = propTypes;

export default VerifyEmail;
