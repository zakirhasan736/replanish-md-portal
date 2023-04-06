import { Button, Divider } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const ForumCard = () => {
	const router = useRouter();

	const handleLinkClick = (e) => {
		e.preventDefault();
		const { query } = router;
		query["card"] = JSON.stringify({
			id: "1",
			title: "Botox/Dermal Fillers",
		});
		router.push({
			query,
		});
	};

	return (
		<div className="community-card" onClick={handleLinkClick}>
			<img
				src="/images/forum/card.png"
				layouts="responsive"
				alt="banner"
				width={330}
				height={194}
			/>
			<div className="card-content">
				<div className="review-section">
					<p className="green">50 topic</p>
				</div>
				<h2>Botox/Dermal Fillers </h2>
				<Divider className="divider" />
				<p className="community-content">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					cursus.{" "}
				</p>
				<Button>LEARN MORE</Button>
			</div>
		</div>
	);
};

export default ForumCard;
