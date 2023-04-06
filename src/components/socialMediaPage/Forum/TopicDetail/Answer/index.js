import { Button, Input, Space } from "antd";
import Image from "next/image";
import RateIcon from "public/icons/forum/rateIcon";
import React from "react";

const Answer = () => {
	const array = [1, 2, 3, 4, 5];

	return (
		<div className="topic-answer">
			<div className="topic-container">
				<div className="topic-profile">
					<Space className="profile">
						<Space direction="vertical" size={0} align="center">
							<Image
								width="10"
								height="9"
								src="/icons/forum/up.svg"
							/>
							<p className="number">4</p>
							<Image
								width="10"
								height="9"
								src="/icons/forum/down.svg"
							/>
						</Space>
						<Space>
							<Image
								width="32"
								height="32"
								src="/icons/forum/profile-image.svg"
							/>
							<Space direction="vertical" size={0}>
								<p className="user-name">Carter Geidt</p>
								<p className="green">4 years ago</p>
								<div>
									{array.map((t) => (
										<RateIcon color={t == 5 && "none"} />
									))}
								</div>
							</Space>
						</Space>
					</Space>
					<div>
						<Image
							width="20"
							height="20"
							src="/icons/forum/rate-star.svg"
						/>
					</div>
				</div>
				<div className="topic-content">
					<div className="message-content">
						<p>
							Lorem ipsum dolor sit amet consectetur. Tempor
							libero vivamus est facilisis egestas dolor eget
							ultrices nunc. Duis accumsan elementum quam sit in
							egestas. Nibh vulputate venenatis nec velit pharetra
							vel tortor lacinia sit. Neque suspendisse molestie
							sagittis auctor nulla cursus nisi justo adipiscing.
							Amet vitae vestibulum ac aliquet nunc. Vulputate
							placerat a felis diam purus.{" "}
						</p>
					</div>
					<p className="reply">Reply</p>
				</div>
			</div>
			<div>
				<Input
					placeholder="Your Comment here...."
					suffix={<Button>Post Comment</Button>}
				/>
			</div>
		</div>
	);
};

export default Answer;
