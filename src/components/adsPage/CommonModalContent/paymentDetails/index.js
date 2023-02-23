import React from "react";

import TextField from "src/common/textField";
import CommonButton from "src/common/button";
import InputField from "src/common/inputField";

import PropTypes from "prop-types";

const Payment = ({ back, handleChange, handleBlur, values, errors }) => {
	return (
		<div className="payment_main">
			<div className="payment_content">
				<h3>Payment Details</h3>
				<div className="payment_details_above">
					<div style={{ width: "48%" }}>
						<InputField
							label="Payee Name"
							placeholder="Mak"
							className="payment_fields"
							name="payeeName"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.payeeName}
							errors={errors}
						/>
					</div>
					<div style={{ width: "48%" }}>
						<InputField
							label="CVV"
							placeholder="**2"
							className="payment_fields"
							name="cvv"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.cvv}
							errors={errors}
						/>
					</div>
				</div>
				<div className="payment_details_lower">
					<div style={{ width: "48%" }}>
						<InputField
							label="Card Number"
							placeholder="4564 564 4548 2245"
							className="payment_fields"
							name="cardNumber"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.cardNumber}
							errors={errors}
						/>
					</div>
					<div style={{ width: "48%" }}>
						<InputField
							label="Expiration (MM/YYYY)"
							placeholder="MM/YYYY"
							className="payment_fields"
							name="expirationDate"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.expirationDate}
							errors={errors}
						/>
					</div>
				</div>
				<TextField
					textAlign="center"
					fontSize="17px"
					fontWeight="600"
					mt="20px"
				>
					You will get charged more, depending upon your targeted
					audience.
				</TextField>
			</div>
			<div className="button_main">
				<CommonButton
					child="Submit"
					classname="next"
					topClass="nextTop"
					width="128px"
					height="48px"
					background="var(--secondary)"
					borderRadius="24px 0px 0px 24px"
					color="#ffffff"
					htmlType="submit"
				/>
				<CommonButton
					child="Back"
					background="var(--primary)"
					classname="back"
					width="128px"
					height="48px"
					borderRadius="0px 24px 24px 0px"
					color="#ffffff"
					onClick={back}
				/>
			</div>
		</div>
	);
};

Payment.propTypes = {
	back: PropTypes.func,
	handleChange: PropTypes.func,
	handleBlur: PropTypes.func,
	values: PropTypes.object,
	errors: PropTypes.func,
};

export default Payment;
