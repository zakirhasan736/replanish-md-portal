import { Space } from "antd";
import TextField from "src/common/textField/index";
import PropTypes from "prop-types";

const LocationCard = (props) => {
	const { location, active, onSelect } = props;
	const { name, serial, contact, img } = location;
	return (
		<Space
			className={`location-card ${active ? "location-card-active" : ""}`}
			align="start"
			onClick={onSelect}
		>
			<Space direction="vertical">
				<Space size={0} direction="vertical">
					<TextField
						name={serial}
						fontSize={14}
						color={active ? "#DECFB3" : "#B16339"}
						fontFamily="Tenor"
					/>
					<TextField
						name={name}
						fontSize={18}
						color={active ? "#fff" : "#2D2D2B"}
						font={"Tenor"}
						lineHeight={1.2}
					/>
				</Space>
				<Space direction="vertical" size={2}>
					<TextField
						name="CONTACT DETAILS"
						fontSize={14}
						color={active ? "#DECFB3" : "#B16339"}
						fontFamily="Tenor"
					/>
					<TextField
						name={contact}
						fontSize={18}
						color={active ? "#fff" : "#2D2D2B"}
						font={"Tenor"}
						lineHeight={1}
					/>
					<TextField
						name="CALL / TEXT FOR A CONSULTATION"
						fontSize={13}
						fontFamily="Montserrat"
						color={active ? "#fff" : "#2D2D2B"}
					/>
				</Space>
			</Space>
			<img src={img} />
		</Space>
	);
};

LocationCard.prototypes = {
	location: PropTypes.object,
	active: PropTypes.bool,
	onSelect: PropTypes.func,
};

export default LocationCard;
