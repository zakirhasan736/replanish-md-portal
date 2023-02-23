import React from "react";
import AuthLayoutWrapper from "src/components/authPages/authLayoutWrapper";
import ForgotPasswordPage from "src/components/authPages/forgotPasswordPage";

const ForgotPassword = () => {
	return (
		<AuthLayoutWrapper>
			<ForgotPasswordPage />
		</AuthLayoutWrapper>
	);
};

export default ForgotPassword;
