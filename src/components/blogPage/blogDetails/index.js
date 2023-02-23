import { Image } from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogById } from "../blog/services";
import BlogContent from "./blogContent";

const BlogDetails = () => {
	const { query } = useRouter();
	const { id } = query;

	const dispatch = useDispatch();

	const { isLoading, data } = useSelector(({ blog }) => blog);

	useEffect(() => {
		const getBlogsList = async (id) => {
			try {
				const response = await dispatch(getBlogById(id)).unwrap();
				console.log("response =>", response);
			} catch (error) {
				console.log("error =>", error);
			}
		};
		if (id) {
			getBlogsList(id);
		}
	}, [dispatch, id]);

	console.log("isLoading", isLoading);

	return (
		<>
			<div className="details-image-wrapper">
				<Image
					src={data?.blog_image}
					alt="blog bg"
					preview={false}
					width="100%"
					className="blog-banner"
				/>
				<div className="inner-content">
					<h1 className="image-heading">{data?.blog_title}</h1>
					<p className="image-text">
						BY {data?.created_by} &nbsp; &nbsp;{" "}
						{dayjs(data?.created_at).format("MMM D, YYYY")}
					</p>
				</div>
			</div>
			<BlogContent description={data?.blog_description} />
		</>
	);
};

export default BlogDetails;
