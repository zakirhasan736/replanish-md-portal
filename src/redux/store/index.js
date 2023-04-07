import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../components/authPages/auth/authslice";
import blogReducer from "../../components/blogPage/blog/blogslice";
import commonSlice from "../reducers/common";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		blog: blogReducer,
		common: commonSlice,
	},
});