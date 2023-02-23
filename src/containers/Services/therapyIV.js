import { Image } from "antd";
import React from "react";
import LayoutWrapper from "src/components/homepage/layoutWrapper";
import AboutCollapseSection from "src/components/servicespage/aboutCollapseSection";
import HowWorksSection from "src/components/servicespage/howWorksSection";
import QuestionSection from "src/components/servicespage/questionSection";
import RadioBtnSection from "src/components/servicespage/radioBtnSection";
import TopInfoSection from "src/components/servicespage/topInfoSection";
import TherapyListSection from "src/components/servicespage/therapyListSection";
import { ivTherapyArr } from "src/components/servicespage/questionAnswerLists";

const TherapyIV = () => {
	return (
		<LayoutWrapper>
			<TopInfoSection title="IV Therapy" />
			<Image
				src="/images/therapy-iv.png"
				alt="botox Dermal"
				preview={false}
				width="100%"
			/>
			<QuestionSection
				question="About IV Therapy"
				answerText={
					<>
						<p>
							IV or intravenous therapy is the process of
							administering fluids through the veins that contain
							vitamins, minerals, or medicine.
						</p>
						<p>
							IV therapy can be done either in the office or at
							home. An IV is inserted into your vein and fluid is
							pumped into the bloodstream through a manual or
							electric pump.
						</p>
					</>
				}
			>
				<AboutCollapseSection questionAnswerArr={ivTherapyArr} />
			</QuestionSection>
			<RadioBtnSection title="Are you low on energy or feel dehydrated?" />
			<TherapyListSection />
			<HowWorksSection />
		</LayoutWrapper>
	);
};

export default TherapyIV;
