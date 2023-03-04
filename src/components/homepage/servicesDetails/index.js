import React from "react";
import { Button, Col, Row } from "antd";
import { useRouter } from "next/router";
import ServicesImgText from "src/common/servicesImgText";

const ServicesDetails = () => {
	const router = useRouter();

	const btnHanlder = () => {
		router.push("/coming-soon");
	};

	const servicesArr = [
		{
			serviceImg: "/images/service3.png",
			serviceTitle: "Facials",
		},
		{
			serviceImg: "/images/service2.png",
			serviceTitle: "Fillers",
		},
		{
			serviceImg: "/images/service1.png",
			serviceTitle: "Botox & Dysport",
		},
	];

	return (
		<div className="service-detail-wrapper">
			<div className="layout-wrapper">
				<h1 className="main-heading">Services</h1>
				<p className="_content">
					ReplenishMD’s specializations are cosmetic treatments that
					slow the signs of aging, preserve your beauty, and bring
					back your youthful glow. In each individual session, we
					provide the highest quality treatment for each of our
					clients.
					<br />
					<br />
					We are passionate about creating natural and effective
					results for our clients so they can achieve the goals they
					desire. Our staff routinely stay up to date on their
					knowledge and skills in aesthetic medicine by looking for
					training opportunities that increase their knowledge of the
					latest and most advanced treatments that give our clients
					the best results every time.
				</p>
				<Button
					size="large"
					type="primary"
					className="more-btn"
					onClick={btnHanlder}
				>
					learn more
				</Button>
				<Row gutter={[16, 16]}>
					{servicesArr?.map((arr, key) => (
						<Col xs={24} sm={12} md={8} key={key}>
							<ServicesImgText
								serviceImg={arr?.serviceImg}
								serviceText={arr?.serviceTitle}
							/>
						</Col>
					))}
				</Row>
			</div>
		</div>
	);
};

export default ServicesDetails;
