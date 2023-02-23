import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIEndpoint } from "../../../utils/common.js";

export const getBlogs = createAsyncThunk(
	"/api_services/blogs",
	async (payload) => {
		const { limit, page } = payload;
		const headers = {
			"Content-Type": "application/json",
			// Authorization: "Bearer *",
		};
		const url = `${APIEndpoint}/api_services/blogs`;

		const response = await axios.get(url, {
			headers: headers,
			params: {
				limit: limit,
				page: page,
			},
		});

		return response.data;
	}
);

export const getBlogById = createAsyncThunk(
	"/api_services/blogs/id",
	async (id) => {
		console.log("getBlogById id", id);
		const headers = {
			"Content-Type": "application/json",
		};
		const url = `${APIEndpoint}/api_services/blogs/${id}`;

		const response = await axios.get(url, {
			headers: headers,
		});

		return response.data;
	}
);
