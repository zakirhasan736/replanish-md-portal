import React from "react";
import {
	Space,
	Card,
	Row,
	Col,
	Grid,
	Tabs,
	Badge,
	Button,
	Typography,
	Input,
} from "antd";
import IconTile from "./landingpage/IconTile";
import { DownOutlined } from "@ant-design/icons";
import ImgSmallCircle from "src/common/ImgSmallCircle";
import LandingPage from "./LandingPage";
const { useBreakpoint } = Grid;
const { Title, Text } = Typography;
const { Search } = Input;
const HeaderMenu = [
	{ icon: "/icons/home.svg" },
	{ icon: "/icons/exclusion.svg" },
	{ icon: "/icons/bell.svg" },
	{ icon: "/icons/notes-medical.svg" },
	{ icon: "/icons/question-circle.svg" },
	{ icon: "/icons/chatnew.svg" },
];

const { TabPane } = Tabs;
const TabHeader = (props) => {
	const screens = useBreakpoint();
	return (
		<Row style={{ height: 65, marginTop: screens.sm ? 5 : 30 }}>
			<Col span={24}>
				<Tabs
					className={
						props.tabPosition === "bottom" ? "is-mobile-tab" : ""
					}
					centered={props.tabPosition === "bottom" ? true : false}
					tabPosition={props.tabPosition}
					defaultActiveKey={props.tabKey}
					onChange={props.handleMenuTab}
				>
					{HeaderMenu.map((row, index) => (
						<TabPane
							tab={
								<IconTile
									text=""
									className="bg-none"
									avatarSize={32}
									shape="square"
									icon={row.icon}
								/>
							}
							key={index + 1}
						>
							{index + 1 == 1 && <LandingPage />}
						</TabPane>
					))}
				</Tabs>
			</Col>
		</Row>
	);
};

export default TabHeader;
