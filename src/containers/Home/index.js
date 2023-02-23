import React from "react";
import ContactDetails from "src/components/homepage/contactDetails";
import LandingBanner from "src/components/homepage/landingBanner";
import LayoutWrapper from "src/components/homepage/layoutWrapper";
import ProductDetails from "src/components/homepage/productDetails";
import ServicesDetails from "src/components/homepage/servicesDetails";
import Testimonials from "src/components/homepage/testimonials";

const Home = () => {
	return (
		<LayoutWrapper>
			<LandingBanner />
			<ProductDetails />
			<ServicesDetails />
			<ContactDetails />
			<Testimonials />
		</LayoutWrapper>
	);
};

export default Home;
