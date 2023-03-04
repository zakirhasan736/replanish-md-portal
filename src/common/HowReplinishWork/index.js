import { Col, Row } from "antd";
import React from "react";
import WorkPoints from "src/common/workPoints";
import { PointData } from "./pointData";

const HowWorksSection = () => {
	return (
		<div className="how-works-container">
			<div className="layout-wrapper">
				<h1 className="main-heading">How Replenish works</h1>

				<Row gutter={64}>
					{PointData?.map((point) => (
						<Col xs={24} lg={8} key={point.id}>
							<WorkPoints
								pointNum={`0${point.id}`}
								pointcontent={point.content}
							/>
						</Col>
					))}
				</Row>
			</div>
		</div>
	);
};

export default HowWorksSection;
