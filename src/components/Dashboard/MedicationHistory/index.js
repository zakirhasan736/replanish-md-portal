import SeacrhField from "src/common/SearchField";
import TextField from "src/common/textField/index";
import { Col, Row } from "antd";
import MedicationHistoryCard from "./MedicationHistoryCard";

const MedicationHistory = () => {
	const medications = [
		{
			image: "/assets/icons/medicationIcons/medication-1.svg",
			title: "Econochlor",
			subTitle: "Botox/Dermal Fillers",
			provider: "Alex Martinez",
			dose: "1/2,1",
			time: "After Eating",
			date: new Date(),
		},
		{
			image: "/assets/icons/medicationIcons/medication-1.svg",
			title: "Econochlor",
			subTitle: "Botox/Dermal Fillers",
			provider: "Alex Martinez",
			dose: "1/2,1",
			time: "After Eating",
			date: new Date(),
		},
		{
			image: "/assets/icons/medicationIcons/medication-2.svg",
			title: "Econochlor",
			subTitle: "Botox/Dermal Fillers",
			provider: "Alex Martinez",
			dose: "1/2,1",
			time: "After Eating",
			date: new Date(),
		},
		{
			image: "/assets/icons/medicationIcons/medication-3.svg",
			title: "Econochlor",
			subTitle: "Botox/Dermal Fillers",
			provider: "Alex Martinez",
			dose: "1/2,1",
			time: "After Eating",
			date: new Date(),
		},
		{
			image: "/assets/icons/medicationIcons/medication-1.svg",
			title: "Econochlor",
			subTitle: "Botox/Dermal Fillers",
			provider: "Alex Martinez",
			dose: "1/2,1",
			time: "After Eating",
			date: new Date(),
		},
		{
			image: "/assets/icons/medicationIcons/medication-2.svg",
			title: "Econochlor",
			subTitle: "Botox/Dermal Fillers",
			provider: "Alex Martinez",
			dose: "1/2,1",
			time: "After Eating",
			date: new Date(),
		},
		{
			image: "/assets/icons/medicationIcons/medication-3.svg",
			title: "Econochlor",
			subTitle: "Botox/Dermal Fillers",
			provider: "Alex Martinez",
			dose: "1/2,1",
			time: "After Eating",
			date: new Date(),
		},
		{
			image: "/assets/icons/medicationIcons/medication-1.svg",
			title: "Econochlor",
			subTitle: "Botox/Dermal Fillers",
			provider: "Alex Martinez",
			dose: "1/2,1",
			time: "After Eating",
			date: new Date(),
		},
	];
	return (
		<div className="Medication-History">
			<TextField
				fontSize={18}
				fontWeight="400"
				fontFamily="Proxima-Nova"
				mb={15}
			>
				Medication History
			</TextField>

			<SeacrhField placeholder="Search Here" onSearch={(e) => {}} />

			<Row gutter={[24, 24]}>
				{medications.map((medication) => (
					<Col lg={12} sm={22} xs={20}>
						<MedicationHistoryCard medication={medication} />
					</Col>
				))}
			</Row>
		</div>
	);
};

export default MedicationHistory;
