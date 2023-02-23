import { Button } from "antd";
import React from "react";
import TextField from "src/common/textField";
import { PassIcon } from "src/components/SVGImageIcon/passIcon";
import AuthCard from "../authCard";
import PropTypes from "prop-types";

const propTypes = {
	verifyHandler: PropTypes.func,
	resendHanlder: PropTypes.func,
};

const RecoveryPassword = ({ verifyHandler, resendHanlder }) => {
	return (
		<AuthCard
			heading="Recover Password"
			title="Making sure you are secure -- it's what we do."
		>
			<p className="verification-email">
				We sent an email with a verification code to
				aftaabumer@gmail.com. (Not you?)
			</p>

			<TextField
				placeholder="Verification code"
				prefix={PassIcon}
				type="text"
			/>

			<Button block className="filled-btn" onClick={verifyHandler}>
				Verify
			</Button>
			<Button block className="border-btn" onClick={resendHanlder}>
				Resend code
			</Button>
		</AuthCard>
	);
};

RecoveryPassword.propTypes = propTypes;

export default RecoveryPassword;
