import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIEndpoint } from "../../../utils/common.js";

export const login = createAsyncThunk("user_services/login", async (body) => {
	const headers = {
		"Content-Type": "application/json",
		// Authorization: "Bearer *",
	};
	const url = `${APIEndpoint}/user_services/login`;

	const response = await axios.post(url, body, {
		headers: headers,
	});

	console.log("resonse", response.data.token);
	return response.data;
});

export const register = createAsyncThunk(
	"user_services/register",
	async (body) => {
		const headers = {
			"Content-Type": "application/json",
			// Authorization: "Bearer *",
		};
		const url = `${APIEndpoint}user_services/register`;
		const response = await axios.post(url, body, {
			headers: headers,
		});
		console.log("resonse", response);
		return response.data;
	}
);

export const emailVerification = createAsyncThunk(
	"user_services/email-verification",
	async (body) => {
		const headers = {
			"Content-Type": "application/json",
			// Authorization: `Bearer ${sessionStorage.getItem("token")}`,
		};
		const url = `${APIEndpoint}/user_services/email-verification`;

		const response = await axios.post(url, body, {
			headers: headers,
		});
		return response.data;
	}
);

export const otpVerification = createAsyncThunk(
	"user_services/otp-verification",
	async (body) => {
		const headers = {
			"Content-Type": "application/json",
			// Authorization: `Bearer ${sessionStorage.getItem("token")}`,
		};
		const url = `${APIEndpoint}/user_services/otp-verification`;

		const response = await axios.post(url, body, {
			headers: headers,
		});
		console.log("resonse", response);
		return response.data;
	}
);

export const logout = createAsyncThunk("user_services/logout", async (body) => {
	// const token = getToken();

	const token = body?.token;

	const headers = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${token}`,
	};
	const url = `${APIEndpoint}/user_services/logout`;

	const response = await axios.post(url, body, {
		headers: headers,
	});
	console.log("resonse", response);
	return response.data;
});

export const forgotPassword = createAsyncThunk(
	"user_services/forgot-password",
	async (body) => {
		const headers = {
			"Content-Type": "application/json",
			// Authorization: `Bearer ${sessionStorage.getItem("token")}`,
		};
		const url = `${APIEndpoint}/user_services/forgot-password`;

		const response = await axios.post(url, body, {
			headers: headers,
		});
		console.log("resonse", response);
		return response.data;
	}
);

export const resetPassword = createAsyncThunk(
	"user_services/reset-password",
	async (body) => {
		const headers = {
			"Content-Type": "application/json",
			// Authorization: `Bearer ${sessionStorage.getItem("token")}`,
		};
		const url = `${APIEndpoint}/user_services/reset-password`;

		const response = await axios.post(url, body, {
			headers: headers,
		});
		console.log("resonse", response);
		return response.data;
	}
);

// export const changePassword = createAsyncThunk(
// 	"user_services/change-password",
// 	async (body) => {
// 		const headers = {
// 			"Content-Type": "application/json",
// 			// Authorization: `Bearer ${sessionStorage.getItem("token")}`,
// 		};
// 		const url = `${APIEndpoint}/user_services/change-passwo	rd`;

// 		try {
// 			const response = await axios.post(url, body, {
// 				headers: headers,
// 			});
// 			// setUserSession(response.data.token, response.data);
// 			console.log("resonse", response);
// 			return response.data;
// 		} catch (error) {
// 			console.log("error =>", error.response.status, error);
// 			throw new Error(error.response.status);
// 		}
// 	}
// );

// export const profile = createAsyncThunk(
// 	"users/fetch-profile",
// 	async (body, thunkAPI) => {
// 		var url = `${APIEndpoint}profile`;
// 		var headers = {
// 			"Content-Type": "application/json",
// 			Authorization: `Bearer ${sessionStorage.getItem("token")}`,
// 		};
// 		const response = await axios.get(url, {
// 			headers: headers,
// 		});
// 		//setUserSession(re, ' ')
// 		sessionStorage.setItem("user", JSON.stringify(response.data[1]));
// 		console.log("resonse", response.data[1]);

// 		return response.data;
// 	}
// );

// export const register1 = createAsyncThunk(
// 	"users/signup",
// 	async (body, thunkAPI) => {
// 		const headers = {
// 			"Content-Type": "application/json",
// 			Authorization: "Bearer *",
// 		};
// 		var url = `${APIEndpoint}signup`;
// 		const response = await axios.post(url, body, {
// 			headers: headers,
// 		});
// 		//setUserSession(response.data.token, ' ')
// 		sessionStorage.setItem("token", response.token);
// 		console.log("resonse", response.token);

// 		return response.data;
// 	}
// );

// export const register2 = createAsyncThunk(
// 	"users/signup-2",
// 	async (body, thunkAPI) => {
// 		const headers = {
// 			"Content-Type": "application/json",
// 			Authorization: `Bearer ${sessionStorage.getItem("token")}`,
// 		};
// 		var url = `${APIEndpoint}signup/step-2`;
// 		const response = await axios.post(url, body, {
// 			headers: headers,
// 		});
// 		//setUserSession(response.data.token, ' ')
// 		//  sessionStorage.setItem('token',token )
// 		//console.log('resonse',response.token);

// 		return response.data;
// 	}
// );

// export const register3 = createAsyncThunk(
// 	"users/signup-3",
// 	async (body, thunkAPI) => {
// 		const headers = {
// 			"Content-Type": "application/json",
// 			Authorization: `Bearer ${sessionStorage.getItem("token")}`,
// 		};
// 		var url = `${APIEndpoint}signup/step-3`;
// 		const response = await axios.post(url, body, {
// 			headers: headers,
// 		});
// 		//setUserSession(response.data.token, ' ')
// 		//sessionStorage.setItem('token', response.token)
// 		//console.log('resonse',response.token);

// 		return response.data;
// 	}
// );

// export const register4 = createAsyncThunk(
// 	"users/signup-4",
// 	async (body, thunkAPI) => {
// 		const headers = {
// 			"Content-Type": "application/json",
// 			Authorization: `Bearer ${sessionStorage.getItem("token")}`,
// 		};
// 		var url = `${APIEndpoint}signup/step-4`;
// 		const response = await axios.post(url, body, {
// 			headers: headers,
// 		});
// 		//setUserSession(response.data.token, ' ')
// 		//sessionStorage.setItem('token', response.token)
// 		//console.log('resonse',response.token);

// 		return response.data;
// 	}
// );

// export const register6 = createAsyncThunk(
// 	"users/signup-4",
// 	async (body, thunkAPI) => {
// 		const headers = {
// 			"Content-Type": "application/json",
// 			Authorization: `Bearer *`,
// 		};
// 		var url = `${APIEndpoint}signup/step-6`;
// 		const response = await axios.post(url, body, {
// 			headers: headers,
// 		});
// 		//setUserSession(response.data.token, ' ')
// 		//sessionStorage.setItem('token', response.token)
// 		//console.log('resonse',response.token);

// 		return response.data;
// 	}
// );
