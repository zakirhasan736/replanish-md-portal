import React, { useState } from "react";

import { Col, Row } from "antd";

import CommonModal from "src/common/modal";
import DisplayModalContent from "src/components/adsPage/DisplayModalContent";
import SearchModalContent from "src/components/adsPage/SearchModalContent";
import VideoModalContent from "src/components/adsPage/VideoModalContent";
import Card from "src/components/adsPage/ads/adsTypes/card";

const AdsType = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const openModal = (key) => {
		setIsModalVisible(key ?? false);
	};
	const arry = [
		{ number: "one", name: "Search", key: "searchModal" },
		{ number: "two", name: "Display", key: "displayModal" },
		{ number: "three", name: "Video", key: "videoModal" },
	];

	const rend = (key) => {
		switch (key) {
			case "searchModal":
				console.log("key", key);
				return (
					<SearchModalContent setIsModalVisible={setIsModalVisible} />
				);
			case "displayModal":
				return (
					<DisplayModalContent
						setIsModalVisible={setIsModalVisible}
					/>
				);
			case "videoModal":
				return (
					<VideoModalContent setIsModalVisible={setIsModalVisible} />
				);
			default:
		}
	};

	return (
		<div className="ads_type">
			<h1>Types of Ads</h1>
			<div className="card_main">
				<Row gutter={[30, 30]}>
					{arry.map((data, key) => (
						<Col key={key} sm={12} md={8} lg={8} xl={8}>
							<Card
								child={data.number}
								key={key}
								name={data.name}
								onClick={() => openModal(data.key)}
							/>
						</Col>
					))}
				</Row>
			</div>
			<CommonModal
				width={950}
				setIsModalVisible={setIsModalVisible}
				isModalVisible={isModalVisible}
			>
				{rend(isModalVisible)}
			</CommonModal>
		</div>
	);
};

export default AdsType;
