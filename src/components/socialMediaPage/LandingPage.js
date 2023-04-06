import React from "react";

import { Col, Row } from "antd";
import AddToFeed from "./landingpage/AddToFeed";
import { StoryWidgets } from './db'
import Stories from "src/common/Stories";
import LandingMessage from "./landingpage/LandingMessage";
import { RightOutlined  } from "@ant-design/icons";




const LandingPage = () => {
	return (
		<main className="main-content-wrapper">

			<div className="cta-item-wrapper">
				<Row>
					<Col span={24}>
						<LandingMessage />
					</Col>
				</Row>
			</div>

			<div className='story-widget-wrapper-box'>
				<Row>
					<Col span={24}>
						<div className="story-card-container" >
							{StoryWidgets.map((wid, index) => (
								<div className="story-card-item">
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
			</div>

			<div className="users-feed-box">
				<AddToFeed />
			</div>
		</main>
	);
};

export default LandingPage;
