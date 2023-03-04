import { Grid } from "antd";
import React from "react";
import TabHeader from "../TabHeader";

const Main = () => {
	const { useBreakpoint } = Grid;
	const [tabKey, setTabKey] = React.useState(1);

	const handleMenuTab = (e) => {
		setTabKey(e);
	};
	const screens = useBreakpoint();

	return (
		<div>
			{screens.md ? (
				<TabHeader
					tabPosition="top"
					handleMenuTab={handleMenuTab}
					tabKey={tabKey}
				/>
			) : (
				<TabHeader
					tabPosition="bottom"
					handleMenuTab={handleMenuTab}
					tabKey={tabKey}
				/>
			)}
		</div>
	);
};

export default Main;
