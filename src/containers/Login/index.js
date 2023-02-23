import React from "react";
import AuthLayoutWrapper from "src/components/authPages/authLayoutWrapper";
import LoginPage from "src/components/authPages/loginPage";

const Login = () => {
	return (
		<AuthLayoutWrapper>
			<LoginPage />
		</AuthLayoutWrapper>
	);
};

export default Login;
