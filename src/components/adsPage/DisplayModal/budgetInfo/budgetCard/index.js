import React from "react";
import { Card, Avatar, Button, Image } from "antd";

const BudgetCard = () => {
	return (
		<div style={{ marginTop: "25px" }}>
			<Card
				style={{
					width: "100%",
					borderRadius: "21px 21px 0 0",
					border: "6px solid #EEEEEE",
				}}
			>
				<div className="card_header">
					<Avatar
						size={64}
						icon={
							<Image
								src="/assets/icon/Ellipse 60.svg"
								width="64px"
								height="64px"
								alt="avatar"
							/>
						}
					/>
					<div className="user_name">
						<p className="maks_branding">Maks Branding</p>
						<p className="sponsered">Sponsered</p>
					</div>
					<div />
				</div>
				<div style={{ marginTop: "19px" }}>
					<Image
						src="/assets/writeAd/unsplash_6lQDFGOB1iw.svg"
						width="100%"
						alt="image"
					/>
				</div>
				<div
					style={{
						marginTop: "11px",
						fontSize: "13px",
						fontWeight: "500",
						fontFamily: "Lato, sans-serif",
					}}
				>
					<p>
						Yahoo Yahoo Native - Advertiser Company in India | We
						Can Optimize Your Website to Rank Higher on Search
						Engines. Learn More Now. Our Search Engine Optimization
						Team Can Diagnose and Fix Your Website Ranking Issues.
					</p>
				</div>
				<div>
					<Button
						style={{
							background: "#2C99CB",
							color: "white",
							borderRadius: "8px",
							height: "38px",
						}}
					>
						Download
					</Button>
				</div>
			</Card>
		</div>
	);
};

export default BudgetCard;
