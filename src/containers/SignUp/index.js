import React from "react";
import AuthLayoutWrapper from "src/components/authPages/authLayoutWrapper";
import SignUpPage from "src/components/authPages/signupPage";

const SignUp = () => {
	return (
		<AuthLayoutWrapper>
			<SignUpPage />
		</AuthLayoutWrapper>
	);
};

export default SignUp;
