import { Image } from "antd";
import React from "react";
import LayoutWrapper from "src/components/homepage/layoutWrapper";
import AboutCollapseSection from "src/components/servicespage/aboutCollapseSection";
import HowWorksSection from "src/components/servicespage/howWorksSection";
import { micronutrientArr } from "src/components/servicespage/questionAnswerLists";
import QuestionSection from "src/components/servicespage/questionSection";
import RadioBtnSection from "src/components/servicespage/radioBtnSection";
import TopInfoSection from "src/components/servicespage/topInfoSection";

const MicronutrientTesting = () => {
	return (
		<LayoutWrapper>
			<TopInfoSection title="Mobile Labs/Micronutrient Testing" />
			<Image
				src="/images/micronutrient-bg.png"
				alt="botox Dermal"
				preview={false}
				width="100%"
			/>
			<QuestionSection
				question="About Mobile Labs/Micronutrient Testing"
				answerText={
					<>
						<p>
							Micronutrients play a crucial role in your health.
							They are essential for growth and development, a
							healthy immune system, energy, and even hormone
							production. You need a variety of vitamins,
							minerals, and antioxidants for your body to stay
							healthy.
						</p>
						<p>
							A mobile lab can make it easier by coming to you and
							drawing blood. Your blood is then analyzed to see if
							you are lacking in any vitamins or minerals.
						</p>
					</>
				}
			>
				<AboutCollapseSection questionAnswerArr={micronutrientArr} />
			</QuestionSection>
			<RadioBtnSection title="Would you like a convenient way to test for any nutrient deficiencies, Stis, diabetes labs, cholesterol, testosterone? We can come to you" />
			<HowWorksSection />
		</LayoutWrapper>
	);
};

export default MicronutrientTesting;
