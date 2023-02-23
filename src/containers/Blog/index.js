import React from "react";
// import PageContentHeader from "src/common/pageContentHeader";
import LayoutWrapper from "src/components/homepage/layoutWrapper";
// import { useRouter } from "next/router";
import { Image } from "antd";
import Testimonials from "src/components/homepage/testimonials";
import BlogsList from "src/components/blogPage/blogsList";

const Blog = () => {
	// const router = useRouter();

	// const btnHanlder = () => {
	// 	router.push("/coming-soon");
	// };
	return (
		<LayoutWrapper>
			{/* <PageContentHeader
				title="Blog"
				content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et fermentum at massa id pretium consequat. Venenatis egestas tincidunt lectus eu aenean. Tristique felis non enim libero, volutpat quis amet proin purus. Enim, id in at eu enim nunc purus nunc augue.`}
				btnText="meet the team"
				onClick={btnHanlder}
			/> */}
			<Image
				src="/images/blog-bg.png"
				alt="blog bg"
				preview={false}
				width="100%"
			/>
			<BlogsList />
			{/* <Testimonials /> */}
		</LayoutWrapper>
	);
};

export default Blog;
