import { Space } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const TopicCard = () => {
	const router = useRouter();

	const handleLinkClick = (e) => {
		e.preventDefault();
		const { query } = router;

		query["topic"] = JSON.stringify({
			id: "1",
			title: "Botox/Dermal Fillers 1",
		});
		router.push({
			query,
		});
	};
	return (
		<div className="topic-card" onClick={handleLinkClick}>
			<div className="topic-image">
				<Image
					width="200"
					height="300"
					src="/images/forum/topicCard.png"
					alt="cardImage"
					objectFit="cover"
				/>
			</div>
			<div className="topic-content">
				<h2>Botox/Dermal Fillers 1</h2>
				<p className="green">Posted by jonh deo 8 hours ago</p>
				<p>
					Subject :{" "}
					<span className="green"> Botox/Dermal Fillers </span>
				</p>
				<p className="bold">Details</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Ornare aliquam quam massa libero morbi. Nulla at a vel, sed
					vulputate viverra. Scelerisque sed diam aliquam erat
					suscipit in est cras tellus. Tincidunt mi proin commodo
					pellentesque. Dui a tortor, pellentesque sed amet, lectus
				</p>
			</div>
		</div>
	);
};

export default TopicCard;
