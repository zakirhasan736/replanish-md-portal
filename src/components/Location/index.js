import CommonButton from "src/common/button";
import TextField from "src/common/textField/index";
import LayoutWrapper from "src/components/homepage/layoutWrapper";
import MapSection from "./MapSection";
import RadioBtnSection from "src/common/RadioBtnSection";
import HowWorksSection from "src/common/HowReplinishWork";

const Location = () => {
	return (
		<LayoutWrapper>
			<div className="location-wrapper">
				<div className="location-header">
					<div>
						<TextField name="Our Location" fontSize={64} />
						<CommonButton child={"SHOW NEAR ME"} />
					</div>
				</div>
				<MapSection />
				<RadioBtnSection
					title="Do you have a problem with Forehead Wrinkles, Crows Feet, Lips?"
					extraOption="Yes, I'd like to know about your Full Replenished Look"
				/>
				<HowWorksSection />
			</div>
		</LayoutWrapper>
	);
};

export default Location;
