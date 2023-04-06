import { Tabs } from "antd";
import PropTypes from "prop-types";

const CommonTabs = ({
	defaultActiveKey,
	onTabPress,
	items,
	activeKey,
	centered,
}) => {
	return (
		<div className="Common-Tabs">
			<Tabs
				defaultActiveKey={defaultActiveKey}
				onChange={onTabPress}
				centered={centered}
				items={items}
				activeKey={activeKey}
			/>
		</div>
	);
};

CommonTabs.propTypes = {
	defaultActiveKey: PropTypes.string,
	onTabPress: PropTypes.func,
	items: PropTypes.array,
	activeKey: PropTypes.string,
	centered: PropTypes.bool,
};

CommonTabs.defaultProps = {
	className: "",
	centered: true,
};

export default CommonTabs;
