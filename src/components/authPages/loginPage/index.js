import { Col, Form, notification, Row } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AuthCard from "../authCard";
import AuthSideContent from "../authSideContent";
import TextField from "src/common/textField";
import { PassIcon } from "src/components/SVGImageIcon/passIcon";
import { Button, Divider } from "antd";
import Link from "next/link";
import { AuthDataArr } from "../authData";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../auth/services";
import { ProfileIcon } from "src/components/SVGImageIcon/profileIcon";
import useUser from "src/hooks/useUser";

const LoginPage = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { user, updateUser } = useUser();

	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const { isLoading, isLogged, errorMessage, isFailure } = useSelector(
		({ auth }) => auth
	);

	console.log("isLoading:", isLoading);
	console.log("isLogged:", isLogged);
	console.log("errorMessage:", errorMessage);
	console.log("isFailure:", isFailure);

	const handleChange = (_, allValues) => {
		setUserName(allValues.userName);
		setPassword(allValues.password);
	};

	const onFinish = async (_) => {
		const payload = {
			username: userName,
			password,
		};

		try {
			const response = await dispatch(login(payload)).unwrap();
			console.log("response =>", response);

			if (response) {
				if (!user) {
					updateUser(response?.data);
				}
				notification.success({
					message: response?.message,
				});
				router.push("/");
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

	// useEffect(() => {
	// 	if (isLogged) {
	// 		router.push("/");
	// 	}
	// }, [isLogged]);

	// const loginHanlder = async () => {
	// 	const payload = {
	// 		email: "user@test.com",
	// 		password: "12345678",
	// 	};

	// 	await dispatch(login(payload)).unwrap();
	// 	// router.push("/");
	// };

	return (
		<Row gutter={[0, 0]} align="middle">
			<Col xs={24} md={11} lg={12}>
				<AuthSideContent
					heading="Welcome Back Mate!"
					contentArr={AuthDataArr}
				/>
			</Col>
			<Col xs={24} md={13} lg={12}>
				<AuthCard
					heading="Login To Your Account."
					title="Please fill your information below"
				>
					<Form
						name="login form"
						initialValues={{
							remember: true,
						}}
						onFinish={onFinish}
						onValuesChange={handleChange}
					>
						<Form.Item
							name="userName"
							rules={[
								// {
								// 	type: "email",
								// 	message: `Please enter correct E-mail!`,
								// },
								{
									required: true,
									message: `Please input your username`,
								},
							]}
						>
							<TextField
								placeholder="User Name"
								prefix={ProfileIcon}
								type="text"
							/>
						</Form.Item>
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
								placeholder="Password"
								prefix={PassIcon}
								type="password"
							/>
						</Form.Item>
						<Link href="/forgot-password">
							<a className="forgot-text">Forgot Password?</a>
						</Link>

						<Button
							block
							className="filled-btn"
							// onClick={loginHanlder}
							loading={isLoading}
							htmlType="submit"
						>
							Login
						</Button>
						<Divider>
							<p className="or-text">Or</p>
						</Divider>
						<p className="account-text">
							Dont have a account yet? &nbsp;
							<Link href="/sign-up">
								<a className="create-account-text">
									Create a new Account
								</a>
							</Link>
						</p>
					</Form>
				</AuthCard>
			</Col>
		</Row>
	);
};

export default LoginPage;
