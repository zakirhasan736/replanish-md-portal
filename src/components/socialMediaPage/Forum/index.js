import { Col, Grid, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import AppInfoView from "src/common/AppInfoView";
import TabHeader from "./Tabs";

const Forum = () => {
	const { useBreakpoint } = Grid;

	const { lg } = useBreakpoint();

	return (
		<div>
			<Row>
				<Col lg={23} md={24}>
					<TabHeader tabPosition={lg ? "top" : "bottom"} />
				</Col>
			</Row>
		</div>
	);
};

export default Forum;
