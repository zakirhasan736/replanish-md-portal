import { Image } from "antd";
import React from "react";
import LayoutWrapper from "src/components/homepage/layoutWrapper";
import AboutCollapseSection from "src/components/servicespage/aboutCollapseSection";
import HowWorksSection from "src/components/servicespage/howWorksSection";
import { bioidenticalArr } from "src/components/servicespage/questionAnswerLists";
import QuestionSection from "src/components/servicespage/questionSection";
import RadioBtnSection from "src/components/servicespage/radioBtnSection";
import TopInfoSection from "src/components/servicespage/topInfoSection";

const BioidenticalHarmonTherapy = () => {
	return (
		<LayoutWrapper>
			<TopInfoSection title="Bioidentical Hormone Replacement Therapy" />
			<Image
				src="/images/bioidentical-therapy-bg.png"
				alt="botox Dermal"
				preview={false}
				width="100%"
			/>
			<QuestionSection
				question="About Bioidentical Hormone Replacement Therapy"
				answer="Bioidentical Hormone Replacement Therapy (BHRT) is the replacement of hormones that your body may not efficiently anymore due to age or other factors"
			>
				<AboutCollapseSection questionAnswerArr={bioidenticalArr} />
			</QuestionSection>
			<RadioBtnSection
				title="Do you have a problem with fatigue, brain fog, difficulty losing weight?"
				extraOption="YES, ID” LIKE TO KNOW MORE"
			/>
			<HowWorksSection />
		</LayoutWrapper>
	);
};

export default BioidenticalHarmonTherapy;
