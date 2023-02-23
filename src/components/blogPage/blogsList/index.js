/* eslint-disable array-callback-return */
import { Col, Pagination, Row, Skeleton } from "antd";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../blog/services";
import BlogCard from "../blogCard";

const BlogsList = () => {
	const dispatch = useDispatch();
	const [current, setCurrent] = useState(1);
	const blogsLimit = 9;

	const { isLoading, data } = useSelector(({ blog }) => blog);

	useEffect(() => {
		const payload = {
			limit: blogsLimit,
			page: current,
		};
		const getBlogsList = async () => {
			try {
				const response = await dispatch(getBlogs(payload)).unwrap();
				console.log("response =>", response);
			} catch (error) {
				console.log("error =>", error);
			}
		};
		getBlogsList();
	}, [current, dispatch]);

	const handleChange = (page) => {
		setCurrent(page);
	};

	return (
		<div className="blogs-list-container">
			<div className="layout-wrapper">
				<h1 className="main-heading">All Blogs</h1>
				<Row gutter={[32, 32]} style={{ marginTop: "6rem" }}>
					{isLoading && !data?.data
						? [...Array(9)]?.map((_, index) => (
								<Col xs={24} sm={12} md={8} key={index}>
									<Skeleton.Image active size="large" />
									<Skeleton
										active
										block
										style={{ marginTop: "2rem" }}
									/>
								</Col>
						  ))
						: data &&
						  data["data"]?.map((blog) => (
								<Col xs={24} sm={12} md={8} key={blog?.id}>
									<BlogCard
										id={blog?.id}
										image={blog?.blog_image}
										date={dayjs(blog?.created_at).format(
											"MMM D, YYYY"
										)}
										heading={blog?.blog_title}
										content={blog?.blog_description?.replace(
											/(<([^>]+)>)/gi,
											""
										)}
									/>
								</Col>
						  ))}
				</Row>

				<div className="pagination-conatiner">
					<Pagination
						current={current}
						defaultCurrent={current}
						total={data?.count}
						className="pagination-sec"
						showSizeChanger={false}
						onChange={handleChange}
					/>
				</div>
			</div>
		</div>
	);
};

export default BlogsList;
