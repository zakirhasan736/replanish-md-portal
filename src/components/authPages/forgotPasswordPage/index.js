import { Col, Row } from "antd";
import { useRouter } from "next/router";
import React from "react";
import { ForgotPasswordComponents } from "src/utils/constant";
import { AuthDataArr } from "../authData";
import AuthSideContent from "../authSideContent";
import ConfirmCode from "../signupPage/confirmCode";
import CreatePassword from "./createPassword";
// import RecoveryPassword from "./recoveryPassword";
import RecoverySuccess from "./recoverySuccess";
import VerifyEmail from "./verifyEmail";

const ForgotPasswordPage = () => {
	const router = useRouter();
	const [componentType, setComponentType] = React.useState(0);

	const verifyEmailHanlder = () => {
		setComponentType(1);
	};
	const verifyCodeHandler = () => {
		setComponentType(2);
	};
	const resendHandler = () => {
		// message.success("Code Successfully Resend!");
		setComponentType(0);
	};
	const changePassHandler = () => {
		setComponentType(3);
	};
	const successHandler = () => {
		router.push("/login");
	};

	const rendingComponent = (key) => {
		switch (key) {
			case "email_verify":
				return <VerifyEmail verifyEmailHanlder={verifyEmailHanlder} />;
			case "confirm_code":
				return (
					<ConfirmCode
						verifyHandler={verifyCodeHandler}
						resendHandler={resendHandler}
					/>
				);
			case "create_password":
				return <CreatePassword changePassHandler={changePassHandler} />;
			case "success_password":
				return <RecoverySuccess successHandler={successHandler} />;
			default:
				break;
		}
	};

	return (
		<Row gutter={[0, 0]} align="middle">
			<Col xs={24} md={11} lg={12}>
				<AuthSideContent
					heading="Welcome Back Mate!"
					contentArr={AuthDataArr}
				/>
			</Col>
			<Col xs={24} md={13} lg={12}>
				{rendingComponent(ForgotPasswordComponents[componentType])}
			</Col>
		</Row>
	);
};

export default ForgotPasswordPage;
