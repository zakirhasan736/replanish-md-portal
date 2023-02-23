import { createSlice } from "@reduxjs/toolkit";
import {
	emailVerification,
	forgotPassword,
	login,
	logout,
	otpVerification,
	register,
	resetPassword,
} from "./services";

export const initialState = {
	data: null,
	errorMessage: null,
	// profileErrorMessage: "",
	isLoading: false,
	isFailure: false,
	user: null,
	// profileData: null,
	isLogged: false,
	// myReservationData: null,
	// refreshData: null,
};

const AuthSlice = createSlice({
	name: "Auth",
	initialState,
	reducers: {
		userLogged: (state) => {
			state.isLogged = true;
		},
		userLogout: (state) => {
			state.isLogged = false;
		},
		errorCheck: (state) => {
			state.errorMessage = "";
		},
		setUser: (state, action) => {
			state.user = action.payload;
		},
	},

	extraReducers: {
		[login.pending.type]: (state) => {
			state.isLoading = true;
			state.isFailure = false;
		},
		[login.fulfilled.type]: (state, action) => {
			return {
				...state,
				isLoading: false,
				isFailure: false,
				data: action.payload,
				errorMessage: "",
			};
		},
		[login.rejected.type]: (state, action) => {
			console.log("state, action", state, action);
			state.isLoading = false;
			state.isFailure = true;
			state.errorMessage = action.message;
		},

		[register.pending.type]: (state) => {
			state.isLoading = true;
			state.isFailure = false;
		},
		[register.fulfilled.type]: (state, action) => {
			console.log("register.fulfilled", state);
			console.log("register.fulfilled", action);
			return {
				...state,
				isLoading: false,
				isFailure: false,
				data: action.payload,
				errorMessage: "",
			};
		},
		[register.rejected.type]: (state, action) => {
			console.log("register.rejected", state);
			console.log("register.rejected", action);
			state.isLoading = false;
			state.isFailure = true;
			state.errorMessage = action.message;
		},

		[emailVerification.pending.type]: (state) => {
			state.isLoading = true;
			state.isFailure = false;
		},
		[emailVerification.fulfilled.type]: (state, action) => {
			return {
				...state,
				isLoading: false,
				isFailure: false,
				data: action.payload,
				errorMessage: "",
			};
		},
		[emailVerification.rejected.type]: (state, action) => {
			console.log("Invalid credentials", state);
			state.isLoading = false;
			state.isFailure = true;
			state.errorMessage = action.message;
		},

		[otpVerification.pending.type]: (state) => {
			state.isLoading = true;
			state.isFailure = false;
		},
		[otpVerification.fulfilled.type]: (state, action) => {
			return {
				...state,
				isLoading: false,
				isFailure: false,
				data: action.payload,
				errorMessage: "",
			};
		},
		[otpVerification.rejected.type]: (state, action) => {
			console.log("Invalid credentials", state);
			state.isLoading = false;
			state.isFailure = true;
			state.errorMessage = action.message;
		},

		[forgotPassword.pending.type]: (state) => {
			state.isLoading = true;
			state.isFailure = false;
		},
		[forgotPassword.fulfilled.type]: (state, action) => {
			return {
				...state,
				isLoading: false,
				isFailure: false,
				data: action.payload,
				errorMessage: "",
			};
		},
		[forgotPassword.rejected.type]: (state, action) => {
			console.log("Invalid credentials", state);
			state.isLoading = false;
			state.isFailure = true;
			state.errorMessage = action.message;
		},

		[resetPassword.pending.type]: (state) => {
			state.isLoading = true;
			state.isFailure = false;
		},
		[resetPassword.fulfilled.type]: (state, action) => {
			return {
				...state,
				isLoading: false,
				isFailure: false,
				data: action.payload,
				errorMessage: "",
			};
		},
		[resetPassword.rejected.type]: (state, action) => {
			console.log("Invalid credentials", state);
			state.isLoading = false;
			state.isFailure = true;
			state.errorMessage = action.message;
		},

		[logout.pending.type]: (state) => {
			state.isLoading = true;
			state.isFailure = false;
		},
		[logout.fulfilled.type]: (state, action) => {
			return {
				...state,
				isLoading: false,
				isFailure: false,
				data: action.payload,
				errorMessage: "",
			};
		},
		[logout.rejected.type]: (state, action) => {
			console.log("Invalid credentials", state);
			state.isLoading = false;
			state.isFailure = true;
			state.errorMessage = action.message;
		},

		// [profileEdit.pending.type]: (state) => {
		// 	state.isLoading = true;
		// },
		// [profileEdit.fulfilled.type]: (state, action) => {
		// 	return {
		// 		...state,
		// 		isLoading: false,
		// 		data: action.payload,
		// 		loginErrorMessage: "",
		// 	};
		// },
		// [profileEdit.rejected.type]: (state, action) => {
		// 	state.isLoading = false;
		// 	state.isFailure = true;
		// 	state.loginErrorMessage = action.error.message;
		// },
		// [profile.pending.type]: (state) => {
		// 	state.isLoading = true;
		// },
		// [profile.fulfilled.type]: (state, action) => {
		// 	state.isLoading = false;
		// 	state.profileData = action.payload.data;
		// 	state.profileErrorMessage = action.payload.message;
		// },
		// [profile.rejected.type]: (state, action) => {
		// 	state.isLoading = false;
		// 	state.isFailure = true;
		// 	state.profileErrorMessage = action.error.message;
		// },

		// [myReservation.pending.type]: (state) => {
		// 	state.isLoading = true;
		// },
		// [myReservation.fulfilled.type]: (state, action) => {
		// 	state.isLoading = false;
		// 	state.myReservationData = action.payload;
		// 	state.profileErrorMessage = action.payload.message;
		// },
		// [myReservation.rejected.type]: (state, action) => {
		// 	state.isLoading = false;
		// 	state.isFailure = true;
		// 	state.profileErrorMessage = action.error.message;
		// },

		// [refresh.pending.type]: (state) => {
		// 	state.isLoading = true;
		// },
		// [refresh.fulfilled.type]: (state, action) => {
		// 	state.isLoading = false;
		// 	state.profileData = action.payload;
		// 	state.loginErrorMessage = "";
		// },
		// [refresh.rejected.type]: (state, action) => {
		// 	state.isLoading = false;
		// 	state.isFailure = true;

		// 	state.loginErrorMessage = action.error.message;
		// },
		// [forgetPassword.pending.type]: (state) => {
		// 	state.isLoading = true;
		// },
		// [forgetPassword.fulfilled.type]: (state, action) => {
		// 	state.isLoading = false;
		// 	state.data = action.payload;
		// 	state.loginErrorMessage = "";
		// },
		// [forgetPassword.rejected.type]: (state, action) => {
		// 	state.isLoading = false;
		// 	state.isFailure = true;
		// 	state.loginErrorMessage = action.error.message;
		// },

		// [isRegister.pending.type]: (state) => {
		// 	state.isLoading = true;
		// },
		// [isRegister.fulfilled.type]: (state, action) => {
		// 	state.isLoading = false;
		// 	state.data = action.payload;
		// 	state.loginErrorMessage = "";
		// },
		// [isRegister.rejected.type]: (state, action) => {
		// 	state.isLoading = false;
		// 	state.isFailure = true;
		// 	state.loginErrorMessage = action.error.message;
		// },
	},
});

// export const {
// 	actions: { userLogged, userLogout, errorCheck },
// 	reducer,
// 	name: sliceKey,
// } = AuthSlice;

export const { userLogged, userLogout, errorCheck, setUser } =
	AuthSlice.actions;
export default AuthSlice.reducer;

// // import axios from "axios";

// import {
// 	// createAsyncThunk,
// 	createSlice,
// } from "@reduxjs/toolkit";
// // import { login } from "./authApi";
// import {
// 	login,
// 	// register1,
// 	// register2,
// 	// register3,
// 	// register4,
// 	// register6,
// } from "./services";
// // import { setUserSession, APIEndpoint } from "../../../utils/common.js";
// // First, create the thunk

// // const initialState = {
// // 	initialState: { entities: [], loading: "idle" },
// // };

// export const authSlice = createSlice({
// 	name: "users",
// 	initialState: {
// 		token: "",
// 		dash_data: [],
// 		start_date: "",
// 		end_date: "",
// 		violations_recent: [],
// 		activityLog: [],
// 		empData: [],
// 		status: "",
// 		isLoading: true,
// 		isFailure: false,
// 		codeVerificationErrorMessage: "",
// 		codeVerificationErrorStatus: "200",
// 		single_employee_data: [],
// 		step2success: false,
// 		step1success: false,
// 		formStep: 0,
// 		step3success: false,
// 		step4success: false,
// 		user_data: [],
// 		type: null,
// 	},
// 	reducers: {
// 		increment: (state) => {
// 			// Redux Toolkit allows us to write "mutating" logic in reducers. It
// 			// doesn't actually mutate the state because it uses the Immer library,
// 			// which detects changes to a "draft state" and produces a brand new
// 			// immutable state based off those changes
// 			state.value += 1;
// 		},
// 		decrement: (state) => {
// 			state.value -= 1;
// 		},
// 		incrementByAmount: (state, action) => {
// 			state.value += action.payload;
// 		},
// 		setFormState: (state, action) => {
// 			state.formStep = action.payload;
// 		},
// 	},
// 	//   extraReducers: (builder) => {
// 	//     // Add reducers for additional action types here, and handle loading state as needed
// 	//     builder.addCase(fetchUserById.fulfilled, (state, action) => {
// 	//       // Add user to the state array
// 	//       console.log('action-payload', action.payload);
// 	//       return {
// 	//           ...state,
// 	//           entities: [action.payload]
// 	//       }

// 	//     })
// 	extraReducers: {
// 		[login.fulfilled.type]: (state, action) => {
// 			debugger;
// 			// Add user to the state array
// 			console.log("action-payload", action.payload);
// 			return {
// 				...state,
// 				token: action.payload.token,
// 			};
// 		},
// 		// [register1.fulfilled.type]: (state, action) => {
// 		// 	// Add user to the state array
// 		// 	console.log("action-payload-token", action.payload);
// 		// 	return {
// 		// 		...state,
// 		// 		token: action.payload.token,
// 		// 		step1success: true,
// 		// 	};
// 		// },
// 		// [register1.rejected.type]: (state, action) => {
// 		// 	// const errorResponse = JSON.parse(action.payload.message);
// 		// 	state.isLoading = false;
// 		// 	state.isFailure = true;
// 		// 	//state.codeVerificationErrorMessage = errorResponse.message;
// 		// 	state.codeVerificationErrorStatus = action.error.message;
// 		// 	if (state.codeVerificationErrorStatus == "401")
// 		// 		state.codeVerificationErrorMessage =
// 		// 			"Session Expired! Login Again";
// 		// 	else if (state.codeVerificationErrorStatus == "500")
// 		// 		state.codeVerificationErrorMessage =
// 		// 			"Internal Server Error! Contact Admin";

// 		// 	console.log("Error: ", action.error);
// 		// },
// 		// [register1.pending.type]: (state) => {
// 		// 	state.isLoading = true;
// 		// 	state.isFailure = false;
// 		// },
// 		// [register2.fulfilled.type]: (state, action) => {
// 		// 	// Add user to the state array
// 		// 	console.log("action-payload-token", action.payload);
// 		// 	return {
// 		// 		...state,
// 		// 		status: action.payload,
// 		// 		step2success: true,
// 		// 	};
// 		// },
// 		// [register2.rejected.type]: (state, action) => {
// 		// 	// const errorResponse = JSON.parse(action.payload.message);
// 		// 	state.isLoading = false;
// 		// 	state.isFailure = true;
// 		// 	//state.codeVerificationErrorMessage = errorResponse.message;
// 		// 	state.codeVerificationErrorStatus = action.error.message;
// 		// 	if (state.codeVerificationErrorStatus == "401")
// 		// 		state.codeVerificationErrorMessage =
// 		// 			"Session Expired! Login Again";
// 		// 	else if (state.codeVerificationErrorStatus == "500")
// 		// 		state.codeVerificationErrorMessage =
// 		// 			"Internal Server Error! Contact Admin";

// 		// 	console.log("Error: ", action.error);
// 		// },
// 		// [register2.pending.type]: (state) => {
// 		// 	state.isLoading = true;
// 		// 	state.isFailure = false;
// 		// },
// 		// [register3.fulfilled.type]: (state, action) => {
// 		// 	// Add user to the state array
// 		// 	console.log("action-payload-token", action.payload);
// 		// 	return {
// 		// 		...state,
// 		// 		status: action.payload,
// 		// 		step3success: action.payload.success ? true : false,
// 		// 		codeVerificationErrorMessage: action.payload.error
// 		// 			? action.payload.error
// 		// 			: "",
// 		// 	};
// 		// },
// 		// [register3.rejected.type]: (state, action) => {
// 		// 	// const errorResponse = JSON.parse(action.payload.message);
// 		// 	state.isLoading = false;
// 		// 	state.isFailure = true;
// 		// 	//state.codeVerificationErrorMessage = errorResponse.message;
// 		// 	state.codeVerificationErrorStatus = action.error.message;
// 		// 	if (state.codeVerificationErrorStatus == "401")
// 		// 		state.codeVerificationErrorMessage =
// 		// 			"Session Expired! Login Again";
// 		// 	else if (state.codeVerificationErrorStatus == "500")
// 		// 		state.codeVerificationErrorMessage =
// 		// 			"Internal Server Error! Contact Admin";

// 		// 	console.log("Error: ", action.error);
// 		// },
// 		// [register3.pending.type]: (state) => {
// 		// 	state.isLoading = true;
// 		// 	state.isFailure = false;
// 		// },
// 		// [register4.fulfilled.type]: (state, action) => {
// 		// 	// Add user to the state array
// 		// 	console.log("action-payload-token", action.payload);
// 		// 	return {
// 		// 		...state,
// 		// 		status: action.payload,
// 		// 		step4success: action.payload.success ? true : false,
// 		// 		codeVerificationErrorMessage: action.payload.error
// 		// 			? action.payload.error
// 		// 			: "",
// 		// 	};
// 		// },
// 		// [register4.rejected.type]: (state, action) => {
// 		// 	// const errorResponse = JSON.parse(action.payload.message);
// 		// 	state.isLoading = false;
// 		// 	state.isFailure = true;
// 		// 	//state.codeVerificationErrorMessage = errorResponse.message;
// 		// 	state.codeVerificationErrorStatus = action.error.message;
// 		// 	if (state.codeVerificationErrorStatus == "401")
// 		// 		state.codeVerificationErrorMessage =
// 		// 			"Session Expired! Login Again";
// 		// 	else if (state.codeVerificationErrorStatus == "500")
// 		// 		state.codeVerificationErrorMessage =
// 		// 			"Internal Server Error! Contact Admin";

// 		// 	console.log("Error: ", action.error);
// 		// },
// 		// [register4.pending.type]: (state) => {
// 		// 	state.isLoading = true;
// 		// 	state.isFailure = false;
// 		// },
// 		// [register6.fulfilled.type]: (state, action) => {
// 		// 	// Add user to the state array
// 		// 	console.log("action-payload-token", action.payload);
// 		// 	return {
// 		// 		...state,
// 		// 		user_data: action.payload,
// 		// 		//step4success: action.payload.success? true : false,
// 		// 		codeVerificationErrorMessage: action.payload.error
// 		// 			? action.payload.error
// 		// 			: "",
// 		// 	};
// 		// },
// 		// [register6.rejected.type]: (state, action) => {
// 		// 	// const errorResponse = JSON.parse(action.payload.message);
// 		// 	state.isLoading = false;
// 		// 	state.isFailure = true;
// 		// 	//state.codeVerificationErrorMessage = errorResponse.message;
// 		// 	state.codeVerificationErrorStatus = action.error.message;
// 		// 	if (state.codeVerificationErrorStatus == "401")
// 		// 		state.codeVerificationErrorMessage =
// 		// 			"Session Expired! Login Again";
// 		// 	else if (state.codeVerificationErrorStatus == "500")
// 		// 		state.codeVerificationErrorMessage =
// 		// 			"Internal Server Error! Contact Admin";

// 		// 	console.log("Error: ", action.error);
// 		// },
// 		// [register6.pending.type]: (state) => {
// 		// 	state.isLoading = true;
// 		// 	state.isFailure = false;
// 		// },
// 	},
// });

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount, setFormState } =
// 	authSlice.actions;

// export default authSlice.reducer;
