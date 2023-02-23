import { Button, Col, Row } from "antd";
import React from "react";
import { useRouter } from "next/router";
import TeamImage from "./teamImage";
import TeamPopup from "./teamPopup";

const TeamExperts = () => {
	const router = useRouter();
	const [isModalVisible, setIsModalVisible] = React.useState(false);

	const btnHanlder = () => {
		router.push("/coming-soon");
	};
	const openModal = () => {
		setIsModalVisible(true);
	};

	return (
		<div className="team-meet-container">
			<div className="layout-wrapper">
				<h1 className="main-heading">Meet Our Experts Team</h1>
				<p className="_content">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
					diam amet libero purus. Dui sapien vitae donec non id. Massa
					lectus eu sit tellus, congue turpis. Sit quis amet, morbi
					est justo. Eu risus, facilisis egestas sit risus. Vitae
					aenean habitant tellus, nisl. Mattis id enim auctor
					dictumst.
					<br />
					Ipsum quam sit tristique massa eget morbi neque pulvinar in.
					Adipiscing dapibus nunc habitant nunc orci libero neque,
					laoreet. Sapien sit posuere convallis convallis interdum
					enim. Lectus lacus auctor malesuada ornare aliquet.
				</p>
				<Button
					size="large"
					type="primary"
					className="more-btn"
					onClick={btnHanlder}
				>
					learn more
				</Button>

				<Row gutter={[32, 32]} style={{ marginTop: "6rem" }}>
					{[1, 2, 3, 4, 5, 6].map((_, index) => (
						<Col
							xs={24}
							sm={12}
							md={8}
							key={index}
							onClick={openModal}
						>
							<div style={{ cursor: "pointer" }}>
								<TeamImage
									image={`/images/team${index + 1}.png`}
								/>
							</div>
						</Col>
					))}
				</Row>
				<TeamPopup
					setIsModalVisible={setIsModalVisible}
					isModalVisible={isModalVisible}
					width={1261}
				/>
			</div>
		</div>
	);
};

export default TeamExperts;
