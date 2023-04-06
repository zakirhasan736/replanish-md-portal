import { Breadcrumb, Col, Grid, Row, Space, Tabs } from "antd";
import { useRouter } from "next/router";
import { array } from "prop-types";
import React, { useEffect, useState } from "react";
import IconTile from "../../landingpage/IconTile";
import AskQuestion from "../AskQuestion";
import Community from "../Community";
import TopicDetail from "../TopicDetail";
import Topics from "../Topics";
import CommonButton from "src/common/button";
import useUser from "src/hooks/useUser";

const { TabPane } = Tabs;
const { useBreakpoint } = Grid;

const TabHeader = ({ tabPosition }) => {
	const screens = useBreakpoint();
	const { query, push } = useRouter();
	const { type, name, card, topic, question, tab } = query;
	const { user } = useUser();
	const token = user?.token;

	const bread = [
		{
			title: "Home",
			visible: card || topic || question,
		},
		{
			title: "Ask question",
			visible: !!question,
		},
		{
			title: card ? JSON.parse(card)?.title : "",
			visible: !!card,
		},
		{
			title: topic ? JSON.parse(topic)?.title : "",
			visible: !!topic,
		},
	].filter((i) => i?.visible);

	const renderContent = () => {
		if (topic || tab == 3) return <TopicDetail />;
		else if (card || tab == 2) return <Topics />;
		else if (question) return <AskQuestion />;
		else return <Community />;
	};

	const onChange = (e) => {
		if (e == 1)
			return push({
				query: { q: "forum", type, name, tab: e },
			});
		else
			return push({
				query: { type, name, tab: e },
			});
	};

	const handleLinkClick = (e) => {
		if (e === 1) delete query["topic"];
		else if (e === 0) {
			delete query["topic"];
			delete query["card"];
			delete query["question"];
		} else return;

		push({
			query,
		});
	};

	const tabsLabel = ["Category", "Explore", "My Questions"];

	return (
		<div>
			<div className="forum-tabs">
				<Row style={{ marginTop: screens.lg ? 27 : 30 }}>
					<Col span={24}>
						{!token && (
							<Space
								justifyContent="end"
								style={{ width: "100%", justifyContent: "end" }}
							>
								<CommonButton
									background="#DECFB3"
									color="#000000"
									child={"LOGIN"}
									width="109px"
									onClick={() => push("/login")}
								/>
								<CommonButton
									child={"SIGN UP"}
									background="#448666"
									width="109px"
									onClick={() => push("/sign-up")}
								/>
							</Space>
						)}
						<Tabs
							className={
								tabPosition === "bottom" ? "is-mobile-tab" : ""
							}
							centered={tabPosition === "bottom" ? true : false}
							tabPosition={tabPosition}
							activeKey={tab}
							onChange={onChange}
						>
							{tabsLabel.map((row, index) => (
								<TabPane tab={row} key={index + 1}>
									<Breadcrumb
										separator=">"
										style={{
											marginBottom: "25px",
											cursor: "pointer",
										}}
									>
										{bread.map((t, i) => {
											return (
												<Breadcrumb.Item
													onClick={() =>
														handleLinkClick(i)
													}
												>
													{t.title}
												</Breadcrumb.Item>
											);
										})}
									</Breadcrumb>
									{renderContent()}
								</TabPane>
							))}
						</Tabs>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default TabHeader;
