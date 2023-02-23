import React from "react";
import LayoutWrapper from "src/components/homepage/layoutWrapper";
import Testimonials from "src/components/homepage/testimonials";
import BlogDetails from "src/components/blogPage/blogDetails";

const BlogDetailById = () => {
	return (
		<LayoutWrapper>
			<BlogDetails />
			<Testimonials />
		</LayoutWrapper>
	);
};

export default BlogDetailById;
