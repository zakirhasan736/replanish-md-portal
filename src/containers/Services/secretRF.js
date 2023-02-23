import { Image } from "antd";
import React from "react";
import LayoutWrapper from "src/components/homepage/layoutWrapper";
import AboutCollapseSection from "src/components/servicespage/aboutCollapseSection";
import HowWorksSection from "src/components/servicespage/howWorksSection";
import QuestionSection from "src/components/servicespage/questionSection";
import RadioBtnSection from "src/components/servicespage/radioBtnSection";
import TopInfoSection from "src/components/servicespage/topInfoSection";
import { secretRFArr } from "src/components/servicespage/questionAnswerLists";

const SecretRF = () => {
	return (
		<LayoutWrapper>
			<TopInfoSection title="SecretRf" />
			<Image
				src="/images/secret-rf-bg.png"
				alt="secret rf"
				preview={false}
				width="100%"
			/>
			<QuestionSection
				question="About SecretRf"
				answerText={
					<>
						<p>
							Secret RF is an innovative fractional radio
							frequency (RF) microneedling system for tissue
							coagulation and hemostasis designed to stimulate and
							remodel collagen from the inside out.
						</p>
						<p>
							Secret RF delivers precise, controlled energy at
							various depths to target patients’ most common skin
							concerns on the face and body with little to no
							downtime.
						</p>
					</>
				}
			>
				<AboutCollapseSection questionAnswerArr={secretRFArr} />
			</QuestionSection>
			<RadioBtnSection title="Tired of your  acne scars, wrinkles, or brown or red spots?" />
			<HowWorksSection />
		</LayoutWrapper>
	);
};

export default SecretRF;
