import React from "react";
import {
	Space,
	Badge,
	Dropdown,
	Grid,
	Row,
	Col,
	Button,
	Typography,
	Input,
} from "antd";
import IconTile from "./landingpage/IconTile";
import ImgSmallCircle from "src/common/ImgSmallCircle";
import { DownOutlined } from "@ant-design/icons";
import Services from "./landingpage/Services";
import Sponsored from "./landingpage/Sponsored";
const menuArray = [
	{ icon: "/icons/support.svg", menuName: "Supporters" },
	{ icon: "/icons/videogreen.svg", menuName: "Forum" },
	{ icon: "/icons/groups.svg", menuName: "Groups" },
	{ icon: "/icons/page.svg", menuName: "Pages" },
	{ icon: "/icons/plus-shield.svg", menuName: "Emotional health" },
	{ icon: "/icons/green-heart.svg", menuName: "Favorites" },
];

const { Title, Text } = Typography;
const { Search } = Input;
const items = [];
const onClick = ({ key }) => {
	message.info(`Click on item ${key}`);
};
const { useBreakpoint } = Grid;
const RightSideBarHeader = (props) => {
	const screens = useBreakpoint();
	return (
		<Row>
			<Col span={24}>
				<Row>
					<Space
						direction="vertical"
						style={{
							width: "100%",
						}}
						size={[0, 30]}
						align={screens.sm ? "center" : "start"}
					>
						<Row style={{ marginTop: screens.sm ? 24 : 10 }}>
							<Col>
								<Space size={35}>
									<IconTile
										text=""
										className="bg-none"
										avatarSize={32}
										shape="square"
										icon="/icons/grp.svg"
									/>
									<IconTile
										text=""
										className="bg-none"
										avatarSize={30}
										shape="square"
										icon="/icons/archeive.svg"
									/>
									<Badge count={3} size="small">
										<IconTile
											text=""
											className="bg-none"
											avatarSize={30}
											shape="square"
											icon="/icons/ringbell.svg"
										/>
									</Badge>
									{screens.sm && (
										<div>
											<Space>
												<ImgSmallCircle />
												<Dropdown
													menu={{ items, onClick }}
												>
													<a
														onClick={(e) =>
															e.preventDefault()
														}
													>
														<Space>
															<Text>
																Allison Mango
															</Text>
															<DownOutlined />
														</Space>
													</a>
												</Dropdown>
											</Space>
										</div>
									)}
								</Space>
							</Col>
						</Row>
					</Space>
				</Row>
			</Col>
		</Row>
	);
};

export default RightSideBarHeader;
