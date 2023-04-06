import { Col, Row, Space } from "antd";
import { Formik } from "formik";
import CommonButton from "src/common/button";
import PasswordField from "src/common/PasswordField";
import TextField from "src/common/textField/index";
import changePasswordValidationSchema from "./validation";

const SecurityTab = () => {
	const fields = [
		{
			label: "Old Password",
			placeholder: "Old Password",
			name: "oldPassword",
		},
		{
			label: "New Password",
			placeholder: "New Password",
			name: "newPassword",
		},
		{
			label: "Confirm New Password",
			placeholder: "Confirm New Password",
			name: "confirmPassword",
		},
	];
	return (
		<div className="Security-Tab">
			<TextField
				name="Change Password"
				fontSize={18}
				fontFamily="Proxima-Nova"
			/>
			<Formik
				initialValues={{
					oldPassword: "",
					newPassword: "",
					confirmPassword: "",
				}}
				validationSchema={changePasswordValidationSchema}
				onSubmit={(value) => {
					console.log("🚀 ~ SecurityTab ~ value", value);
				}}
			>
				{({ values, errors, handleChange, handleSubmit }) => (
					<Row gutter={[24, 24]}>
						{fields.map(({ name, label, placeholder }, key) => (
							<Col md={12} sm={24} xs={24} key={key}>
								<PasswordField
									label={label}
									placeholder={placeholder}
									name={name}
									value={values[name]}
									onChange={handleChange}
									errors={errors}
								/>
							</Col>
						))}
						<Col span={24}>
							<Space className="buttons-style">
								<CommonButton
									child={"Cancel"}
									background="#fff"
									color="black"
									border="1px solid #438465"
									borderRadius={50}
								/>
								<CommonButton
									child={"Change Password"}
									borderRadius={50}
									background="#438465"
									onClick={handleSubmit}
								/>
							</Space>
						</Col>
					</Row>
				)}
			</Formik>
		</div>
	);
};

export default SecurityTab;
