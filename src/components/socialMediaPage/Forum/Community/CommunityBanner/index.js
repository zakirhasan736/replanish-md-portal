import { Button, Space } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import CommonButton from "src/common/button";

const ForumBanner = () => {
	const router = useRouter();

	const handleLinkClick = (e) => {
		e.preventDefault();
		const { href, query } = router;
		query["question"] = true;
		router.push({
			href,
			query,
		});
	};
	return (
		<div className="community-banner">
			<Image
				src="/images/forum/forum.png"
				layouts="responsive"
				alt="banner"
				width={432}
				height={287}
			/>
			<Space className="banner-content">
				<div>
					<h2 style={{ fontWeight: "800" }}>Community</h2>
					<CommonButton
						child={"Ask Question"}
						onClick={handleLinkClick}
					/>
				</div>

				<p style={{ color: "#000000" }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
					fermentum at massa id pretium consequat.
				</p>
			</Space>
		</div>
	);
};

export default ForumBanner;
