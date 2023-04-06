import React from "react";
import { Space, Card, Row, Col, Button, Grid, Typography, Input } from "antd";
import IconTile from "./landingpage/IconTile";
import ImgSmallCircle from "src/common/ImgSmallCircle";
import useUser from "src/hooks/useUser";
import { useRouter } from "next/router";
import { medicalNav, socialNav } from "./db";
const { Text } = Typography;
const { Search } = Input;
const { useBreakpoint } = Grid;
const SideBar = () => {
	const { user } = useUser();
	const token = user?.token;

	const screens = useBreakpoint();
	const { query, push } = useRouter();
	return (
		<>
			<div className="socials-left-SideBar">
				<div className="socials-left-SideBar-scroll">
					<div className="sidebar-top-box">
						{screens.lg && (
							<Space
								direction="vertical"
								size={[0, 13]}
								align="center"
							>
								<Space size="large" align="center">
									<img src="/icons/logo.svg" alt="logo" />
								</Space>

								<Input
									placeholder="input search text"
									allowClear
									type="search"
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
							</Space>
						)}
					</div>

					{token ? (
						<div className="after-login-view-box">
							<div className="sidebar-main-tabbox">
								<Card className="bg-light sidebar-card-box">
									<Space direction="vertical" size={[0, 12]}>
										<Button
											onClick={() =>
												push("/dashboard/social")
											}
											block
											className={`btn-default tabs-switch-button ${
												query?.type === "social" &&
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
											className={`btn-default tabs-switch-button ${
												query?.type === "medical" &&
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
								</Card>
							</div>

							<div className="sidebar-nav-item-box">
								<Space
									direction="vertical"
									size={[0, 20]}
									style={{ width: "100%" }}
								>
									{query?.type === "social" && (
										<Space className="user-log-name">
											<ImgSmallCircle />
											<Text style={{ fontSize: 18 }}>
												Allison Mango
											</Text>
										</Space>
									)}
									{(query?.type === "medical"
										? medicalNav
										: socialNav
									).map((row) => (
										<IconTile
											text={row.menuName}
											className="bg-light icon-items"
											avatarSize={30}
											shape="square"
											textSize={18}
											icon={row.icon}
											route={row.route}
											query={row.query}
										/>
									))}
								</Space>
							</div>
						</div>
					) : (
						<div className="before-login-view-box">
							<div className="sidebar-main-tabbox">
								<Card className="bg-light sidebar-card-box">
									<Space direction="vertical" size={[0, 12]}>
										<Button
											onClick={() =>
												push({
													pathname: `/dashboard/${query?.type}/forum`,
													query: { q: "forum" },
												})
											}
											block
											className={`btn-default tabs-switch-button ${
												query?.name === "forum" &&
												"active"
											}`}
											style={{
												height: 44,
												textAlign: "left",
												borderRadius: 7,
												marginBottom: 15,
											}}
										>
											<Space>
												<IconTile
													className="bg-light"
													avatarSize={28}
													shape="square"
													icon="/icons/forum/form-user.svg"
												/>
												<Text
													style={{
														fontSize: 18,
														lineHeight: "21.92px",
														width: 150,
													}}
												>
													Forum
												</Text>
											</Space>
										</Button>

										<Button
											onClick={() => push("/login")}
											block
											className={`btn-default tabs-switch-button ${
												query?.type === "login" &&
												"active"
											}`}
											style={{
												height: 44,
												textAlign: "left",
												borderRadius: 7,
												marginBottom: 15,
											}}
										>
											<Space>
												<IconTile
													className="bg-light"
													avatarSize={28}
													shape="square"
													icon="/icons/forum/loging-icon.svg"
												/>
												<Text
													style={{
														fontSize: 18,
														lineHeight: "21.92px",
														width: 150,
													}}
												>
													Login
												</Text>
											</Space>
										</Button>
										<Button
											onClick={() => push("/sign-up")}
											block
											className={`btn-default tabs-switch-button ${
												query?.type === "sign-up" &&
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
													icon="/icons/forum/user.svg"
												/>
												<Text
													style={{
														fontSize: 18,
														lineHeight: "21.92px",
														width: 150,
													}}
												>
													Registration
												</Text>
											</Space>
										</Button>
									</Space>
								</Card>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default SideBar;
