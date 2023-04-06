import React from "react";
import axios from "axios";
import dayjs from "dayjs";
import useUser, { CURRENT_USER_LOCAL_STORAGE_KEY } from "src/hooks/useUser";
import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS } from "./actionTypes";
import { APIEndpoint } from "./common";

export const dateHandler1 = (date) => {
	return dayjs(date).format("DD MMM,YYYY,h:mm A");
};

export const axiosRequest = (
	successMessage,
	dispatch,
	method,
	urlPath,
	data
) => {
	// const { messages } = appIntl();

	const userJson = localStorage?.getItem(CURRENT_USER_LOCAL_STORAGE_KEY);
	const user = userJson && JSON?.parse(userJson);

	dispatch({ type: FETCH_START });

	const axiosInstance = axios.create({
		baseURL: APIEndpoint,
		timeout: 50000,

		headers: {
			accept: `application/json`,
			"Content-Type": "multipart/form-data",
			Authorization: user?.token ? `Bearer ${user.token}` : "",
		},
	});

	return axiosInstance({
		method,
		url: urlPath,
		data,
	})
		.then((res) => {
			dispatch({ type: FETCH_SUCCESS });
			if (successMessage) {
				dispatch({
					type: SHOW_MESSAGE,
					payload: successMessage,
				});
			}

			return res.data;
		})
		.catch((err) => {
			dispatch({
				type: FETCH_ERROR,
				payload: "message.somethingWentWrong",
			});
			if (err.response) {
				throw err.response.data;
			} else if (err.request) {
				throw err.request;
			} else {
				throw new Error(`Error: ${err.message}`);
			}
		});
};
