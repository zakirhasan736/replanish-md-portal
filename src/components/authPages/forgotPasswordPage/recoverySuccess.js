import React from "react";
import AuthCard from "../authCard";
import { SuccessImage } from "src/components/SVGImageIcon/successImage";
import PropTypes from "prop-types";

const propTypes = {
	successHandler: PropTypes.func,
};

const RecoverySuccess = ({ successHandler }) => {
	React.useEffect(() => {
		const timer = setTimeout(() => {
			successHandler();
		}, 2000);
		return () => clearTimeout(timer);
	}, [successHandler]);

	return (
		<AuthCard heading="" title="">
			<div className="success-container">
				{SuccessImage}

				<h1 className="bold-text">Password Recovered ✔</h1>
				<p className="text-text">
					It&apos;s you! Your email address has been successfully
					verified.
				</p>
			</div>
		</AuthCard>
	);
};

RecoverySuccess.propTypes = propTypes;

export default RecoverySuccess;
