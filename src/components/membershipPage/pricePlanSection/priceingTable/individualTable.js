import { Button, Col, Row } from "antd";
import React from "react";
import { CheckBgCrossIcon } from "src/components/SVGImageIcon/checkBgCrossIcon";
import { CheckBgIcon } from "src/components/SVGImageIcon/checkBgIcon";
import { CheckCrossIcon } from "src/components/SVGImageIcon/checkCrossIcon";

const IndividualTable = () => {
	return (
		<Row gutter={[0, 0]} className="table-container">
			<Col xs={24} sm={12} lg={6}>
				<h1 className="table-heading l-br">Key Features</h1>
				<p className="table-content">Premium IV</p>
				<p className="table-content">Lipo shot</p>
				<p className="table-content">Complimentary Birthday IV</p>
				<p className="table-content">
					Concierge treatment with no concierge fee
				</p>
			</Col>
			<Col xs={24} sm={12} lg={6}>
				<h1 className="table-heading">Premium</h1>
				<p className="table-content">1</p>
				<p className="table-content light-bg">1</p>
				<p className="table-content">{CheckBgIcon}</p>
				<p className="table-content light-bg">{CheckBgCrossIcon}</p>
				<Button className="dark-btn">$199/month</Button>
			</Col>
			<Col xs={24} sm={12} lg={6}>
				<h1 className="table-heading">Luxe</h1>
				<p className="table-content">2</p>
				<p className="table-content primary-bg">2</p>
				<p className="table-content">{CheckBgIcon}</p>
				<p className="table-content primary-bg">{CheckCrossIcon}</p>
				<Button className="dark-btn">$299/month</Button>
			</Col>
			<Col xs={24} sm={12} lg={6} className="dark-bg">
				<h1 className="table-heading r-br">MedGym</h1>
				<p className="table-content">3</p>
				<p className="table-content">3</p>
				<p className="table-content">{CheckBgIcon}</p>
				<p className="table-content">1</p>
				<Button className="light-btn">$399/month</Button>
			</Col>
		</Row>
	);
};

export default IndividualTable;
