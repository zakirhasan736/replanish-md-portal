import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
	error: "",
	loading: true,
	isAppDrawerOpen: false,
	updatingContent: false,
	message: "",
};

const commonSlice = createSlice({
	name: "common",
	initialState,
	reducers: {
		FETCH_START: (state) => {
			return { ...state, error: "", message: "", loading: true };
		},
		UPDATING_CONTENT: (state) => {
			return { ...state, error: "", message: "", updatingContent: true };
		},
		FETCH_SUCCESS: (state) => {
			return {
				...state,
				error: "",
				message: "",
				loading: false,
				updatingContent: false,
			};
		},
		SHOW_MESSAGE: (state) => {
			return {
				...state,
				error: "",
				message: action.payload,
				loading: false,
				updatingContent: false,
			};
		},
		FETCH_ERROR: (state) => {
			return {
				...state,
				loading: false,
				error: action.payload,
				message: "",
				updatingContent: false,
			};
		},
		HIDE_MESSAGE: (state) => {
			return {
				...state,
				loading: false,
				error: "",
				message: "",
				updatingContent: false,
			};
		},
	},
});

export const {
	FETCH_START,
	UPDATING_CONTENT,
	FETCH_SUCCESS,
	SHOW_MESSAGE,
	FETCH_ERROR,
	HIDE_MESSAGE,
} = commonSlice.actions;

export default commonSlice.reducer;
