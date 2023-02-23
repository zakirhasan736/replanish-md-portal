import { Col, Row } from "antd";
import { useRouter } from "next/router";
import React from "react";
import { SignupComponents } from "src/utils/constant";
import { AuthDataArr } from "../authData";
import AuthSideContent from "../authSideContent";
import AccountSuccess from "./accountSuccess";
import ConfirmCode from "./confirmCode";
import CreateAccount from "./createAccount";
import CreatePassword from "./createPassword";

const SignUpPage = () => {
	const router = useRouter();
	const [componentType, setComponentType] = React.useState(0);

	const verifyEmailHanlder = () => {
		setComponentType(1);
	};
	const verifyHandler = () => {
		setComponentType(2);
	};
	const resendHandler = () => {
		// message.success("Code Successfully Resend!");
		setComponentType(0);
	};
	const createPassHandler = () => {
		router.push("/login");
	};

	const rendingComponent = (key) => {
		switch (key) {
			case "create_account":
				return (
					<CreateAccount verifyEmailHanlder={verifyEmailHanlder} />
				);
			case "confirm_code":
				return (
					<ConfirmCode
						verifyHandler={verifyHandler}
						resendHandler={resendHandler}
					/>
				);
			case "account_success":
				return <AccountSuccess successHandler={setComponentType} />;
			case "create_password":
				return <CreatePassword createPassHandler={createPassHandler} />;

			default:
				break;
		}
	};

	return (
		<Row gutter={[0, 0]} align="middle">
			<Col xs={24} md={11} lg={12}>
				<AuthSideContent
					heading="Create Your Account."
					contentArr={AuthDataArr}
				/>
			</Col>

			<Col xs={24} md={13} lg={12}>
				{rendingComponent(SignupComponents[componentType])}
			</Col>
		</Row>
	);
};

export default SignUpPage;
