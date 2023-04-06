import { Button, Divider, Space } from "antd";
import Image from "next/image";
import React from "react";
const TopicBanner = () => {
	return (
		<div className="topic-banner">
			<Image
				layout="responsive"
				width="100%"
				height="40%"
				objectFit="cover"
				src="/images/forum/topicBanner.png"
			/>
			<div className="banner-content">
				<div className="reviews">
					<Space align="center" size={4}>
						<Image
							width="16"
							height="15"
							src="/icons/forum/star.svg"
						/>
						<p>4.8(57)reviews</p>
					</Space>
					<Button>50 Topics</Button>
				</div>
				<Divider />
				<h2>Botox/Dermal Fillers </h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Velit, tortor orci odio at nulla ac. Ac, pulvinar cursus
					orci sit condimentum est. Nam dignissim tempus nunc viverra
					tempor ultrices.{" "}
				</p>
			</div>
		</div>
	);
};

export default TopicBanner;
