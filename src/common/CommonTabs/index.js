import { Tabs } from "antd";

const CommonTabs = ({ defaultActiveKey, onTabPress, items, activeKey }) => {
	return (
		<div className="Common-Tabs">
			<Tabs
				defaultActiveKey={defaultActiveKey}
				onChange={onTabPress}
				items={items}
				activeKey={activeKey}
			/>
		</div>
	);
};
export default CommonTabs;
