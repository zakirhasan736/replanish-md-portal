import React from "react";

import { Col, Row } from "antd";
// import AddToFeed from "./landingpage/AddToFeed";
// import {StoryWidgets} from './db'
// import Stories from "src/common/Stories";
// import LandingMessage from "./landingpage/LandingMessage";

const style = {
	background: "#0092ff",
	padding: "8px 0",
};



const LandingPage = () => {
	return (
		<main className="main-content-wrapper">

					<div className="cta-item-wrapper">
					<Row>
						<Col span={24}>
					
						</Col>
					</Row>
					</div>
			
					<div className='story-widget-wrapper-box'>
					<Row>
						<Col span={24}>
							<div className="story-card-container" >
								
							</div>
						</Col>
					</Row>
					</div>
					
					<div className="users-feed-box">
						<Row>
							<Col span={24} style={{ marginTop: 10 }}>
								add to feed post comment
							</Col>
						</Row>
					</div>
		</main>
	);
};

export default LandingPage;
