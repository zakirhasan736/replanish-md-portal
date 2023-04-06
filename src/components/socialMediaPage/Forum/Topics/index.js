import React from "react";
import SearchBar from "../Common/SearchBar";
import TopicBanner from "./TopicBanner";
import TopicCard from "./TopicCard";

const Topics = () => {
	const array = [1, 2, 3, 4];

	return (
		<div className="topic-banner">
			<TopicBanner />
			<SearchBar />
			<div className="card-container">
				{array.map(() => (
					<TopicCard />
				))}
			</div>
		</div>
	);
};

export default Topics;
