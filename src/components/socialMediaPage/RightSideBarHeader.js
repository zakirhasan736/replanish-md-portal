import React from "react";
import {
	Space,
	Badge,
	Dropdown,
	Grid,
	Row,
	Col,
	Typography,
} from "antd";
import IconTile from "./landingpage/IconTile";
import ImgSmallCircle from "src/common/ImgSmallCircle";
import { DownOutlined } from "@ant-design/icons";


const { Text } = Typography;

const items = [];
const onClick = ({ key }) => {
	message.info(`Click on item ${key}`);
};
const { useBreakpoint } = Grid;

const RightSideBarHeader = () => {
	const screens = useBreakpoint();
	return (

          

				<Row>
					<Space
						direction="vertical"
						style={{
							width: "100%",
						}}
						size={[0, 30]}
						align={screens.lg ? "end" : "start"}
					>
						<Row >
							<Col>
								<Space size={35}>

									<IconTile
										text=""
										className="bg-none top-header-link-item"
										avatarSize={21}
										shape="square"
										icon="/icons/grp.svg"
									/>

									<IconTile
										text=""
										className="bg-none top-header-link-item"
										avatarSize={19}
										shape="square"
										icon="/icons/archeive.svg"
									/>

									<Badge count={3} size="small">
										<IconTile
											text=""
											className="bg-none top-header-link-item"
											avatarSize={24}
											shape="square"
											icon="/icons/ringbell.svg"
										/>
									</Badge>

									{screens.lg && (
										<div className="log-user-profile">
											<Space>
												<ImgSmallCircle imgHeight='25px' imgWidth='25px' />
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
		
	);
};

export default RightSideBarHeader;
