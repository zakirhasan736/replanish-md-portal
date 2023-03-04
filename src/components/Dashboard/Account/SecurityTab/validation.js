import * as Yup from "yup";

const changePasswordValidationSchema = Yup.object({
	oldPassword: Yup.string().required("Old password is required*"),
	newPassword: Yup.string().required("New password is required*"),
	confirmPassword: Yup.string()
		.required("Conirm password is required*")
		.oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
});

export default changePasswordValidationSchema;
