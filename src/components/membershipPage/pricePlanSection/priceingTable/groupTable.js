import { Button, Col, Row } from "antd";
import React from "react";
import { CheckBgIcon } from "src/components/SVGImageIcon/checkBgIcon";
import { CheckIcon } from "src/components/SVGImageIcon/checkIcon";

const GroupTable = () => {
	return (
		<Row gutter={[0, 0]} className="table-container">
			<Col xs={24} sm={12} lg={6}>
				<h1 className="table-heading l-br">Key Features</h1>
				<p className="table-content">Premium IV</p>
				<p className="table-content">Lipo shot</p>
				<p className="table-content">Up to members</p>
				<p className="table-content">Concierge fee waived</p>
			</Col>
			<Col xs={24} sm={12} lg={6}>
				<h1 className="table-heading">Premium</h1>
				<p className="table-content">1</p>
				<p className="table-content light-bg">1</p>
				<p className="table-content">5</p>
				<p className="table-content light-bg">{CheckBgIcon}</p>
				<Button className="dark-btn">$999/month</Button>
			</Col>
			<Col xs={24} sm={12} lg={6}>
				<h1 className="table-heading">Luxe</h1>
				<p className="table-content">1</p>
				<p className="table-content primary-bg">1</p>
				<p className="table-content">10</p>
				<p className="table-content primary-bg">{CheckIcon}</p>
				<Button className="dark-btn">$1899/month</Button>
			</Col>
			<Col xs={24} sm={12} lg={6} className="dark-bg">
				<h1 className="table-heading r-br">MedGym</h1>
				<p className="table-content">1</p>
				<p className="table-content">1</p>
				<p className="table-content">20</p>
				<p className="table-content">{CheckBgIcon}</p>
				<Button className="light-btn">$3799/month</Button>
			</Col>
		</Row>
	);
};

export default GroupTable;
