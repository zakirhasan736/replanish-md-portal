import React from "react";
import { Carousel } from "antd";
import { QouteIcon } from "src/components/SVGImageIcon/qouteIcon";
import { TestimonialArr } from "./testimonialData";

const Testimonials = () => {
	return (
		<div className="testimonial-wrapper">
			<div className="layout-wrapper">
				<h1 className="main-heading">Testimonials</h1>
				{QouteIcon}
				<Carousel
					className="banners"
					effect="fade"
					autoplay
					dots={{ className: "custom-dot" }}
				>
					{TestimonialArr?.map((arr, key) => (
						<div key={key}>
							<p className="_content">{arr?.content}</p>
							<p className="author-name">{arr?.author}</p>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default Testimonials;
