import React from "react";

import { useSelector } from "react-redux";
// import AppMessageView from "@crema/core/AppMessageView";
// import AppLoader from "@crema/core/AppLoader";
import Loading from "src/components/Loading";

const AppInfoView = () => {
	const { error, loading, message } = useSelector(({ common }) => common);

	console.log(loading, "loading");

	// const showMessage = () => {
	// 	return (
	// 		<AppMessageView variant="success" message={message.toString()} />
	// 	);
	// };

	// const showError = () => {
	// 	return <AppMessageView variant="error" message={error.toString()} />;
	// };

	return (
		<>
			{loading && <Load />}

			{/* {message && showMessage()}
			{error && showError()} */}
		</>
	);
};

export default AppInfoView;

const Load = () => {
	return (
		<>
			<p>loadingdasdas</p>
		</>
	);
};
