import { Button } from "antd";
import React, { useState } from "react";
import GroupTable from "./groupTable";
import IndividualTable from "./individualTable";

const PriceingTable = () => {
	const [activeTab, setActiveTab] = useState("individual");

	const tabHandler = (activeKey) => {
		setActiveTab(activeKey);
	};

	const tableRender = (activeKey) => {
		if (activeKey === "individual") {
			return <IndividualTable />;
		}
		if (activeKey === "group") {
			return <GroupTable />;
		}
	};

	return (
		<div className="pricing-table-container">
			<div className="price-btn-section">
				<Button
					type="primary"
					className={
						activeTab === "individual"
							? "active-btn"
							: "nonActive-btn"
					}
					onClick={() => tabHandler("individual")}
				>
					individual
				</Button>
				<Button
					type="primary"
					className={
						activeTab === "group" ? "active-btn" : "nonActive-btn"
					}
					onClick={() => tabHandler("group")}
				>
					Group
				</Button>
			</div>
			{tableRender(activeTab)}
		</div>
	);
};

export default PriceingTable;
