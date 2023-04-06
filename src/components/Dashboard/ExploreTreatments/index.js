import SeacrhField from "src/common/SearchField";
import TextField from "src/common/textField/index";
import { Col, Row } from "antd";
import TreatmentCard from "./TreatmentCard";

const ExploreTreatments = () => {
	const treatments = [
		{
			image: "/assets/icons/treatmentIcons/dermalIcon.svg",
			title: "Botox/Dermal Fillers",
			subTitle: "Lorem Ipsum is simply dummy text of the printing",
		},
		{
			image: "/assets/icons/treatmentIcons/replacementTherapy.svg",
			title: "Bioidentical Hormone Replacement Therapy",
			subTitle: "Lorem Ipsum is simply dummy text of the printing",
		},
		{
			image: "/assets/icons/treatmentIcons/peptideTherapy.svg",
			title: "Peptide Therapy (Sermorelin/ Ipamorelin)",
			subTitle: "Lorem Ipsum is simply dummy text of the printing",
		},
		{
			image: "/assets/icons/treatmentIcons/dermalFilterParties.svg",
			title: "Botox / Dermal Filler Parties",
			subTitle: "Lorem Ipsum is simply dummy text of the printing",
		},
		{
			image: "/assets/icons/treatmentIcons/tesosteroneTherapy.svg",
			title: "Tesosterone therapy",
			subTitle: "Lorem Ipsum is simply dummy text of the printing",
		},
		{
			image: "/assets/icons/treatmentIcons/micronutrientTesting.svg",
			title: "Mobile Labs / Micronutrient Testing",
			subTitle: "Lorem Ipsum is simply dummy text of the printing",
		},
		{
			image: "/assets/icons/treatmentIcons/IVTherapy.svg",
			title: "IV therapy",
			subTitle: "Lorem Ipsum is simply dummy text of the printing",
		},
		{
			image: "/assets/icons/treatmentIcons/medicalWeightLoss.svg",
			title: "Medical Weight Loss",
			subTitle: "Lorem Ipsum is simply dummy text of the printing",
		},
		{
			image: "/assets/icons/treatmentIcons/secretRF.svg",
			title: "SecretRf",
			subTitle: "Lorem Ipsum is simply dummy text of the printing",
		},
		{
			image: "/assets/icons/treatmentIcons/xeo.svg",
			title: "XEO",
			subTitle: "Lorem Ipsum is simply dummy text of the printing",
		},
	];
	return (
		<div className="Explore-Treatment">
			<TextField
				fontSize={18}
				fontWeight="400"
				fontFamily="Proxima-Nova"
				mb={15}
			>
				Explore Treatments
			</TextField>
			<SeacrhField placeholder="Search Here" onSearch={(e) => {}} />

			<Row gutter={[24, 24]}>
				{treatments.map((treatment) => (
					<Col lg={8} md={12} sm={24}>
						<TreatmentCard treatment={treatment} />
					</Col>
				))}
			</Row>
		</div>
	);
};

export default ExploreTreatments;
