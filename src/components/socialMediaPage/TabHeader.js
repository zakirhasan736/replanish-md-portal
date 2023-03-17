import React from "react";
import {
	Row,
	Col,
	Grid,
	Tabs,
} from "antd";
import IconTile from "./landingpage/IconTile";
import LandingPage from "./LandingPage";
const { useBreakpoint } = Grid;
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
	return (<>
		<div className='socials-main-cont-wrapper'>
		<Row style={{ marginTop: screens.lg ? 27 : 30 }}>
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
		</div>
		</>
	);
};

export default TabHeader;
