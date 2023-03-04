import { Col, Row } from "antd";
import LocationsList from "./LocationsList";
import Map from "./Map";

const MapSection = () => {
	return (
		<Row className="map-row">
			<Col xs={10} sm={14} md={15} lg={16}>
				<Map />
			</Col>
			<Col xs={14} sm={10} md={9} lg={8}>
				<LocationsList />
			</Col>
		</Row>
	);
};
export default MapSection;
