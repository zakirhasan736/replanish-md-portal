import { Image } from "antd";
import React from "react";
import LayoutWrapper from "src/components/homepage/layoutWrapper";
import AboutCollapseSection from "src/components/servicespage/aboutCollapseSection";
import HowWorksSection from "src/components/servicespage/howWorksSection";
import QuestionSection from "src/components/servicespage/questionSection";
import RadioBtnSection from "src/components/servicespage/radioBtnSection";
import TopInfoSection from "src/components/servicespage/topInfoSection";
import { weightLossArr } from "src/components/servicespage/questionAnswerLists";

const MedicalWeightLoss = () => {
	return (
		<LayoutWrapper>
			<TopInfoSection title="Medical Weight Loss" />
			<Image
				src="/images/weight-loss.png"
				alt="weight loss"
				preview={false}
				width="100%"
			/>
			<QuestionSection
				question="About Medical Weight Loss"
				answerText={
					<>
						<p>
							Metabolic health is complex and often intersects
							with other areas of concern - from emotional health
							to sleep issues - and we each have our unique
							challenges that deserve personalized solutions. Our
							doctors understand that.
						</p>
						<p>
							We listen to our members to understand their history
							and what has or hasn't worked to create a
							comprehensive plan that drives real results.
						</p>
					</>
				}
			>
				<AboutCollapseSection questionAnswerArr={weightLossArr} />
			</QuestionSection>
			<RadioBtnSection title="Do you have problems losing weight?" />
			<HowWorksSection />
		</LayoutWrapper>
	);
};

export default MedicalWeightLoss;
