import axios from "axios";

// export const getRenewalOrderData = async (id: string): Promise<any> => {
// 	// const webUrl = "http://192.168.0.108:4000/dev"
// 	const webUrl = process.env.BR_WEB_BASE_URL_NEW;

// 	try {
// 		const result = await axios.get(
// 			`${webUrl}/web/get-company-details?id=${encodeURI(id)}`
// 		);
// 		return result["data"].data;
// 	} catch (error) {
// 		console.log("error", error);
// 	}
// };

export const login = async (data) => {
	// const webUrl = process.env.BR_WEB_BASE_URL_NEW;

	const response = await axios({
		method: "post",
		url: `${BASE_URL}/user_services/login`,
		data: data,
	});
	return response;
};
