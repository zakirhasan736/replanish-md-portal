import { Image } from "antd";
import React from "react";
import LayoutWrapper from "src/components/homepage/layoutWrapper";
import AboutCollapseSection from "src/components/servicespage/aboutCollapseSection";
import HowWorksSection from "src/components/servicespage/howWorksSection";
import { botoxPartiesArr } from "src/components/servicespage/questionAnswerLists";
import QuestionSection from "src/components/servicespage/questionSection";
import RadioBtnSection from "src/components/servicespage/radioBtnSection";
import TopInfoSection from "src/components/servicespage/topInfoSection";

const BotoxDermalFillerParties = () => {
	return (
		<LayoutWrapper>
			<TopInfoSection
				title="Botox / Dermal Filler Parties"
				btnText="Book your party"
			/>
			<Image
				src="/images/botox-parties-bg.png"
				alt="botox Dermal"
				preview={false}
				width="100%"
			/>
			<QuestionSection
				question="About Botox / Dermal Filler Parties"
				answerText={
					<>
						<p>
							A botox and filler party is a social gathering where
							a certified health professional administers botox
							and dermal filler shots to the guests.
						</p>
						<p>
							Botox is used to eliminate lines and wrinkles on the
							face and dermal fillers are used to plump or smooth
							out areas on your body such as plumping lips and
							smoothing scars.
						</p>
					</>
				}
			>
				<AboutCollapseSection questionAnswerArr={botoxPartiesArr} />
			</QuestionSection>
			<RadioBtnSection title="Do you have a problem with Forehead Wrinkles, Crows Feet, Lips?" />
			<HowWorksSection />
		</LayoutWrapper>
	);
};

export default BotoxDermalFillerParties;
