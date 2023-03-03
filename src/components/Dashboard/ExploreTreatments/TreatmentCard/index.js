import { Card } from "antd";
import TextField from "src/common/textField/index";

const TreatmentCard = ({ treatment }) => {
	return (
		<Card className="treatment-card">
			<img src={treatment["image"]} />
			<TextField
				fontSize={14}
				fontWeight="400"
				fontFamily="Lato, sans-serif"
				name={treatment["title"]}
			/>
			<TextField
				fontSize={10}
				fontWeight="400"
				fontFamily="Lato, sans-serif"
				name={treatment["subTitle"]}
				color="#4F5665"
			/>
		</Card>
	);
};
export default TreatmentCard;
