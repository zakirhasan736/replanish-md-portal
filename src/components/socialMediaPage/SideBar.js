import React from "react";
import { Space, Card, Row, Col, Button, Grid, Typography, Input } from "antd";
import IconTile from "./landingpage/IconTile";
import ImgSmallCircle from "src/common/ImgSmallCircle";

import Icon, { SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
const { Title, Text } = Typography;
const { Search } = Input;
const { useBreakpoint } = Grid;
const SideBar = (props) => {
	const social = [
		{ icon: "/icons/support.svg", menuName: "Supporters", route: "support" },
		{ icon: "/icons/videogreen.svg", menuName: "Forum", route: "forum" },
		{ icon: "/icons/groups.svg", menuName: "Groups", route: "groups" },
		{ icon: "/icons/page.svg", menuName: "Pages", route: "pages" },
		{ icon: "/icons/plus-shield.svg", menuName: "Emotional health", route: "emotional-health" },
		{ icon: "/icons/green-heart.svg", menuName: "Favorites", route: "favorites" },
	];
	const medical = [
		{
			icon: "/icons/support.svg",
			menuName: "Explore Treatments",
			route: "explore-treatments",
		},
		{
			icon: "/icons/videogreen.svg",
			menuName: "Consultations",
			route: "consultations",
		},
		{
			icon: "/icons/groups.svg",
			menuName: "Medication History",
			route: "medication-history",
		},
		{
			icon: "/icons/page.svg",
			menuName: "Labs ",
			route: "labs",
		},
		{
			icon: "/icons/plus-shield.svg",
			menuName: "Notifications",
			route: "notifications",
		},
		{
			icon: "/icons/green-heart.svg",
			menuName: "Account",
			route: "account",
		},
	];
	const screens = useBreakpoint();
	const { query, push } = useRouter();
	return (
		<Row>
			<Col span={24}>
				{screens.sm && (
					<Row>
						<Col span={22}>
							<Space
								direction="vertical"
								style={{
									paddingLeft: "calc(100vw - 99vw)",
								}}
								size={[0, 16]}
								align="center"
							>
								<Space
									size="large"
									align="center"
									style={{ marginTop: 35 }}
								>
									<img src="/icons/logo.svg" alt="logo" />
								</Space>
								<Input
									placeholder="input search text"
									allowClear
									suffix={
										<img
											src="/icons/search.svg"
											style={{
												fontSize: "20px",
												color: "#000",
											}}
										/>
									}
									className="searchInput"
								/>
								{/* <Search placeholder="input search text" allowClear /> */}
							</Space>
						</Col>
					</Row>
				)}
				<br />
				<Row>
					<Col span={22}>
						<Card
							className="bg-light"
							style={{
								borderRadius: "0px 10px 10px 0px",
								width: "100%",
								paddingTop: 9,
								height: 164,
							}}
						>
							<Row>
								<Col span={21} push={3}>
									<Space
										direction="vertical"
										style={{ width: "95%" }}
										size={[0, 12]}
									>
										<Button
											onClick={() =>
												push("/dashboard/social")
											}
											block
											className={`btn-default ${query?.type === "social" &&
												"active"
												}`}
											style={{
												height: 44,
												textAlign: "left",
												borderRadius: 7,
											}}
										>
											<Space>
												<IconTile
													className="bg-light"
													avatarSize={28}
													shape="square"
													icon="/icons/home.svg"
												/>
												<Text
													style={{
														fontSize: 18,
														lineHeight: "21.92px",
														width: 150,
													}}
												>
													Replenish MD
												</Text>
											</Space>
										</Button>
										<Button
											onClick={() =>
												push("/dashboard/medical")
											}
											block
											className={`btn-default ${query?.type === "medical" &&
												"active"
												}`}
											style={{
												border: "1px solid white",
												borderRadius: 7,
												height: 64,
												textAlign: "left",
											}}
										>
											<Space>
												<IconTile
													className="bg-light"
													avatarSize={28}
													shape="square"
													icon="/icons/healthcare.svg"
												/>
												<Text
													style={{
														fontSize: 18,
														lineHeight: "21.92px",
														width: 150,
													}}
												>
													Aesthetics & <br />
													Wellness
												</Text>
											</Space>
										</Button>
									</Space>
								</Col>
							</Row>
						</Card>
					</Col>
				</Row>
				<br />
				<Row>
					<Col span={22} push={4}>
						<Space direction="vertical" size={[0, 31]}>
							{query?.type === "social" && (
								<Space>
									<ImgSmallCircle />
									<Text style={{ fontSize: 18 }}>
										Allison Mango
									</Text>
								</Space>
							)}
							{(query?.type === "medical" ? medical : social).map(
								(row) => (
									<IconTile
										text={row.menuName}
										className="bg-light"
										avatarSize={30}
										shape="square"
										textSize={18}
										icon={row.icon}
										route={row.route}
									/>
								)
							)}
						</Space>
					</Col>
				</Row>
				<br />
				<br />
				{/* <Row>
					<Col span={22} push={3}>
						<Space direction="vertical" size={[0, 30]}>
							<Text
								style={{
									fontSize: 18,
									lineHeight: "21.92px",
									width: 150,
								}}
							>
								Professional Services
							</Text>
							<Text
								style={{
									fontSize: 18,
									lineHeight: "21.92px",
									width: 150,
								}}
							>
								Sponsored
							</Text>
						</Space>
					</Col>
				</Row>
				<br />
				<br /> */}
			</Col>
		</Row>
	);
};

export default SideBar;
