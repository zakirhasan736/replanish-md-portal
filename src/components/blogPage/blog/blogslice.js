import { createSlice } from "@reduxjs/toolkit";
import { getBlogs, getBlogById } from "./services";

export const initialState = {
	data: null,
	errorMessage: null,
	isLoading: false,
	isFailure: false,
	blog: null,
};

const BlogSlice = createSlice({
	name: "Blog",
	initialState,
	reducers: {
		setBlog: (state, action) => {
			state.blog = action.payload;
		},
	},

	extraReducers: {
		[getBlogs.pending.type]: (state) => {
			state.isLoading = true;
			state.isFailure = false;
		},
		[getBlogs.fulfilled.type]: (state, action) => {
			return {
				...state,
				isLoading: false,
				isFailure: false,
				data: action.payload,
				errorMessage: "",
			};
		},
		[getBlogs.rejected.type]: (state, action) => {
			console.log("state, action", state, action);
			state.isLoading = false;
			state.isFailure = true;
			state.errorMessage = action.message;
		},

		[getBlogById.pending.type]: (state) => {
			state.isLoading = true;
			state.isFailure = false;
		},
		[getBlogById.fulfilled.type]: (state, action) => {
			return {
				...state,
				isLoading: false,
				isFailure: false,
				data: action.payload,
				errorMessage: "",
			};
		},
		[getBlogById.rejected.type]: (state, action) => {
			console.log("state, action", state, action);
			state.isLoading = false;
			state.isFailure = true;
			state.errorMessage = action.message;
		},
	},
});

export const { setBlog } = BlogSlice.actions;
export default BlogSlice.reducer;
