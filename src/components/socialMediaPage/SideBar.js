import React from "react";
import { Space, Card, Button, Grid, Typography, Input } from "antd";
import IconTile from "./landingpage/IconTile";
import ImgSmallCircle from "src/common/ImgSmallCircle";
import { medicalNav, socialNav } from './db'

import { useRouter } from "next/router";
const { Text } = Typography;
const { useBreakpoint } = Grid;
const SideBar = () => {
	const screens = useBreakpoint();
	const { query, push } = useRouter();
	return (
		<>
			<div className='socials-left-SideBar'>

				<div className="sidebar-top-box">
					{screens.lg && (
						<Space
							direction="vertical"
							size={[0, 13]}
							align="center" >

							<Space
								size="large"
								align="center" >
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

				<div className="sidebar-main-tabbox">

					<Card className="bg-light sidebar-card-box" >
						<Space direction="vertical" size={[0, 12]} >
							<Button
								onClick={() =>
									push("/dashboard/social")
								}
								block
								className={`btn-default tabs-switch-button ${query?.type === "social" &&
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
								className={`btn-default tabs-switch-button ${query?.type === "medical" &&
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
					<Space direction="vertical" size={[0, 20]}>
						{query?.type === "social" && (
							<Space className='user-log-name'>
								<ImgSmallCircle />
								<Text style={{ fontSize: 18 }}>
									Allison Mango
								</Text>
							</Space>
						)}
						{(query?.type === "medical" ? medicalNav : socialNav).map(
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
				</div>

			</div>

		</>
	);
};

export default SideBar;
