import React, { useEffect, useState } from "react";
import Answer from "./Answer";
import Question from "./Question";
import TextField from "src/common/textField";
import AuthCard from "src/components/authPages/authCard";
import { PassIcon } from "src/components/SVGImageIcon/passIcon";
import { ProfileIcon } from "src/components/SVGImageIcon/profileIcon";
import CommonModal from "src/common/modal";
import useUser from "src/hooks/useUser";
import Link from "next/link";
import { Button, Divider, Form, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { login } from "src/components/authPages/auth/services";

const TopicDetail = () => {
	const array = [1, 2, 3, 4];
	const { asPath, push, reload } = useRouter();
	const dispatch = useDispatch();
	const { updateUser } = useUser();
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	// const token = user?.token;

	const { isLoading, isFailure } = useSelector(({ auth }) => auth);

	const userJson = localStorage?.getItem("user");
	const user = userJson && JSON?.parse(userJson);

	window.addEventListener("scroll", () => {
		user?.token ? "" : setIsModalVisible(true);
	});

	useEffect(() => {
		setTimeout(() => {
			user?.token ? "" : setIsModalVisible(true);
		}, 3000);
	}, []);

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
				reload();
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
		<div>
			<Question />
			<div className="card-container">
				{array.map(() => (
					<Answer />
				))}
			</div>
			<CommonModal
				setIsModalVisible={setIsModalVisible}
				isModalVisible={isModalVisible}
			>
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
								// {
								// 	min: 8,
								// 	message: "Please enter minimum 8 length",
								// },
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
			</CommonModal>
		</div>
	);
};

export default TopicDetail;
