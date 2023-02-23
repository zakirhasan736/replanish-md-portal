import React from "react";

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Scanning = () => {
	const antIcon = <LoadingOutlined style={{ fontSize: 75 }} spin />;
	return (
		<div className="spinner">
			<div className="spin_content">
				<Spin indicator={antIcon} />
				<h3>Scanning Your Website</h3>
			</div>
		</div>
	);
};

export default Scanning;
