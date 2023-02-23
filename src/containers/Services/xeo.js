import { Image } from "antd";
import React from "react";
import LayoutWrapper from "src/components/homepage/layoutWrapper";
import AboutCollapseSection from "src/components/servicespage/aboutCollapseSection";
import HowWorksSection from "src/components/servicespage/howWorksSection";
import QuestionSection from "src/components/servicespage/questionSection";
import RadioBtnSection from "src/components/servicespage/radioBtnSection";
import TopInfoSection from "src/components/servicespage/topInfoSection";
import { xeoArr } from "src/components/servicespage/questionAnswerLists";

const XEO = () => {
	return (
		<LayoutWrapper>
			<TopInfoSection title="XEO" />
			<Image
				src="/images/xeo-bg.png"
				alt="XEO"
				preview={false}
				width="100%"
			/>
			<QuestionSection
				question="About XEO"
				answerText={
					<p>
						Applications include acne scars, age spots, angiomas,
						compromised skin, deep dermal heating, freckles,
						inflammatory active acne, hair removal, lentigines,
						photodamage, poikiloderma, rosacea, scar reduction,
						facial veins, leg veins, periorbital veins, venous
						lakes, warts, and wrinkles.
					</p>
				}
			>
				<AboutCollapseSection questionAnswerArr={xeoArr} />
			</QuestionSection>
			<RadioBtnSection title="Do you have unwanted hair? Do you want better looking skin?" />
			<HowWorksSection />
		</LayoutWrapper>
	);
};

export default XEO;
