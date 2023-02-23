import { Image } from "antd";
import React from "react";
import LayoutWrapper from "src/components/homepage/layoutWrapper";
import AboutCollapseSection from "src/components/servicespage/aboutCollapseSection";
import HowWorksSection from "src/components/servicespage/howWorksSection";
import { testosteroneArr } from "src/components/servicespage/questionAnswerLists";
import QuestionSection from "src/components/servicespage/questionSection";
import RadioBtnSection from "src/components/servicespage/radioBtnSection";
import TopInfoSection from "src/components/servicespage/topInfoSection";

const TestosteroneTherapy = () => {
	return (
		<LayoutWrapper>
			<TopInfoSection title="Testosterone Therapy" />
			<Image
				src="/images/testosterone-therapy-bg.png"
				alt="botox Dermal"
				preview={false}
				width="100%"
			/>
			<QuestionSection
				question="About Testosterone Therapy"
				answerText={
					<>
						<p>
							Testosterone is a male hormone that is produced
							mostly in the testicles. Just as women have reduced
							production of estrogen and progesterone as they age,
							the production of testosterone also declines in men.
							It is also known as Low-T.
						</p>
						<p>
							Testosterone replacement therapy is used to treat
							low testosterone levels due to age or other factors.
							Low-T replacement therapy helps increase the amount
							of testosterone in a man’s body.
						</p>
					</>
				}
			>
				<AboutCollapseSection questionAnswerArr={testosteroneArr} />
			</QuestionSection>
			<RadioBtnSection
				title="Do you have a problem with fatigue, brain fog, difficulty losing weight or erectile dysfunction?"
				extraOption="Yes, I'd like to know about your Full Replenished Feel"
			/>
			<HowWorksSection />
		</LayoutWrapper>
	);
};

export default TestosteroneTherapy;
