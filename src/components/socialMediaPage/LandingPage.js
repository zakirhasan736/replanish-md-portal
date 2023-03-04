import React from "react";

import { Col, Row, Space, Layout } from "antd";
import LandingMessage from "./landingpage/LandingMessage";
import Widget from "../../common/Widget";
import AddToFeed from "./landingpage/AddToFeed";
import Services from "./landingpage/Services";
import Stories from "src/common/Stories";

const style = {
	background: "#0092ff",
	padding: "8px 0",
};

const Widgets = [
	{
		background: "/images/story.jpeg",
		titleColor: "#fff",
		icon: "/icons/heart.svg",
		titleLevel: 4,
		title: "Health Tracker",
	},
	{
		background: "/images/story.jpeg",
		titleColor: "#fff",
		icon: "/icons/todo.svg",
		titleLevel: 4,
		title: "My Schedule",
	},
	{
		background: "/images/story.jpeg",
		titleColor: "#fff",
		icon: "/icons/star.svg",
		titleLevel: 4,
		title: "My Favorites",
	},
	{
		background: "/images/story.jpeg",
		titleColor: "#fff",
		icon: "/icons/heart.svg",
		titleLevel: 4,
		title: "Health Tracker",
	},
	{
		background: "/images/story.jpeg",
		titleColor: "#fff",
		icon: "/icons/todo.svg",
		titleLevel: 4,
		title: "My Schedule",
	},
	{
		background: "/images/story.jpeg",
		titleColor: "#fff",
		icon: "/icons/star.svg",
		titleLevel: 4,
		title: "My Favorites",
	},
	{
		background: "/images/story.jpeg",
		titleColor: "#fff",
		icon: "/icons/heart.svg",
		titleLevel: 4,
		title: "Health Tracker",
	},
	{
		background: "/images/story.jpeg",
		titleColor: "#fff",
		icon: "/icons/todo.svg",
		titleLevel: 4,
		title: "My Schedule",
	},
	{
		background: "/images/story.jpeg",
		titleColor: "#fff",
		icon: "/icons/star.svg",
		titleLevel: 4,
		title: "My Favorites",
	},
];

const LandingPage = () => {
	return (
		<Row>
			<Col span={24}>
				<Space
					direction="vertical"
					style={{
						width: "100%",
					}}
					size={[0, 28]}
				>
					<Row>
						<Col span={24}>
							<LandingMessage />
						</Col>
					</Row>
					<Row>
						<Col span={24}>
							<div
								style={{ overflow: "scroll", display: "flex" }}
								className="story-card-container"
							>
								{Widgets.map((wid, index) => (
									<div>
										<Stories
											indexNumber={index}
											background={wid.background}
											titleColor={wid.titleColor}
											icon={wid.icon}
											level={wid.titleLevel}
											title={wid.title}
										/>
									</div>
								))}
							</div>
						</Col>
					</Row>
					<Row>
						<Col span={24} style={{ marginTop: 10 }}>
							<AddToFeed />
						</Col>
					</Row>
				</Space>
			</Col>
		</Row>
	);
};

export default LandingPage;
