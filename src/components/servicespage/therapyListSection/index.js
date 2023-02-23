import { Col, Row } from "antd";
import React from "react";
import { TherapyData } from "./therapyData";

const TherapyListSection = () => {
	return (
		<div className="therapy-list-container">
			<div className="layout-wrapper">
				<h1 className="main-heading">IV Therapy</h1>

				<Row gutter={64}>
					{TherapyData?.map((item, key) => (
						<Col key={key} xs={24} sm={12} md={8} lg={6}>
							<p className="therapy-item">{item}</p>
						</Col>
					))}
				</Row>
			</div>
		</div>
	);
};

export default TherapyListSection;
