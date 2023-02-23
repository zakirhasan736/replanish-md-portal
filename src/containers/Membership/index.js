import React from "react";
import PageContentHeader from "src/common/pageContentHeader";
import LayoutWrapper from "src/components/homepage/layoutWrapper";
import { useRouter } from "next/router";
import { Image } from "antd";
import PricePlanSection from "src/components/membershipPage/pricePlanSection";
import HowWorksSection from "src/components/membershipPage/howWorksSection";

const Membership = () => {
	const router = useRouter();

	const btnHanlder = () => {
		router.push("/coming-soon");
	};
	return (
		<LayoutWrapper>
			<PageContentHeader
				title="Membership"
				content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et fermentum at massa id pretium consequat. Venenatis egestas tincidunt lectus eu aenean. Tristique felis non enim libero, volutpat quis amet proin purus. Enim, id in at eu enim nunc purus nunc augue. Risus enim non varius fermentum sed ac fringilla pellentesque vitae. Risus sed lectus dui malesuada lacus, vehicula \n.
Scelerisque cursus est a facilisi libero tellus egestas. Elit auctor dolor, fringilla sed fames. Diam hac ultricies elementum, cursus. Augue ornare.`}
				btnText="Start online visit"
				onClick={btnHanlder}
			/>
			<Image
				src="/images/member-bg.png"
				alt="botox Dermal"
				preview={false}
				width="100%"
			/>
			<PricePlanSection />
			<HowWorksSection />
		</LayoutWrapper>
	);
};

export default Membership;
