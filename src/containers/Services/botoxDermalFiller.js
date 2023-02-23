import { Image } from "antd";
import React from "react";
import LayoutWrapper from "src/components/homepage/layoutWrapper";
import AboutCollapseSection from "src/components/servicespage/aboutCollapseSection";
import HowWorksSection from "src/components/servicespage/howWorksSection";
import { botoxArr } from "src/components/servicespage/questionAnswerLists";
import QuestionSection from "src/components/servicespage/questionSection";
import RadioBtnSection from "src/components/servicespage/radioBtnSection";
import TopInfoSection from "src/components/servicespage/topInfoSection";

const BotoxDermalFiller = () => {
	return (
		<LayoutWrapper>
			<TopInfoSection title="Botox/Dermal Fillers" />
			<Image
				src="/images/botox-dermal.png"
				alt="botox Dermal"
				preview={false}
				width="100%"
			/>
			<QuestionSection
				question="About Botox/ Dermal Fillers "
				answer="Botox and dermal fillers are cosmetic procedures that help reduce or fill in fine lines and wrinkles to help you look younger. Both botox and dermal fillers are given through injection."
			>
				<AboutCollapseSection questionAnswerArr={botoxArr} />
			</QuestionSection>
			<RadioBtnSection title="Do you have a problem with Forehead Wrinkles, Crows Feet, Lips?" />
			<HowWorksSection />
		</LayoutWrapper>
	);
};

export default BotoxDermalFiller;
