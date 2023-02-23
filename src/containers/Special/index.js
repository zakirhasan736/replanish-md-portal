import React from "react";
import PageContentHeader from "src/common/pageContentHeader";
import LayoutWrapper from "src/components/homepage/layoutWrapper";
import { useRouter } from "next/router";
import { Image } from "antd";
import Testimonials from "src/components/homepage/testimonials";
import SpecialList from "src/components/specialPage/specialList";

const Special = () => {
	const router = useRouter();

	const btnHanlder = () => {
		router.push("/coming-soon");
	};
	return (
		<LayoutWrapper>
			<PageContentHeader
				title="Specials"
				content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et fermentum at massa id pretium consequat. Venenatis egestas tincidunt lectus eu aenean. Tristique felis non enim libero, volutpat quis amet proin purus. Enim, id in at eu enim nunc purus nunc augue.`}
				btnText="Read More"
				onClick={btnHanlder}
			/>
			<Image
				src="/images/special-bg.png"
				alt="special-bg.png"
				preview={false}
				width="100%"
			/>
			<SpecialList />
			<Testimonials />
		</LayoutWrapper>
	);
};

export default Special;
