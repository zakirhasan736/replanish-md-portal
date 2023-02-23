import { Image } from "antd";
import React from "react";
import LayoutWrapper from "src/components/homepage/layoutWrapper";
import AboutCollapseSection from "src/components/servicespage/aboutCollapseSection";
import HowWorksSection from "src/components/servicespage/howWorksSection";
import { peptideArr } from "src/components/servicespage/questionAnswerLists";
import QuestionSection from "src/components/servicespage/questionSection";
import RadioBtnSection from "src/components/servicespage/radioBtnSection";
import TopInfoSection from "src/components/servicespage/topInfoSection";

const PeptideTherapy = () => {
	return (
		<LayoutWrapper>
			<TopInfoSection title="Peptide Therapy (Sermorelin/ Ipamorelin)" />
			<Image
				src="/images/peptide-therapy-bg.png"
				alt="botox Dermal"
				preview={false}
				width="100%"
			/>
			<QuestionSection
				question="About Peptide Therapy (Sermorelin/ Ipamorelin)"
				answerText={
					<>
						<p>
							Our body naturally produces peptides which are
							short-chain amino acids. Peptide production is
							different for each individual and typically as we
							age, the production of peptides is reduced.
						</p>
						<p>
							Peptide therapy has a wide range of benefits. Two
							peptide formulations, Sermorelin and Ipamorelin help
							increase the production of growth hormones and are
							usually given to men.
						</p>
					</>
				}
			>
				<AboutCollapseSection questionAnswerArr={peptideArr} />
			</QuestionSection>
			<RadioBtnSection title="Do you want to know more about peptides and anti-aging/ longevity? We can help." />
			<HowWorksSection />
		</LayoutWrapper>
	);
};

export default PeptideTherapy;
