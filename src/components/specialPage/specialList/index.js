import { Col, Row } from "antd";
import React from "react";
import ImageCard from "./imageCard";

const SpecialList = () => {
	return (
		<div className="Special-list-container">
			<div className="layout-wrapper">
				<h1 className="main-heading">All Specials</h1>
				<p className="_content">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Porttitor laoreet felis nibh fusce. Sed mattis nam lorem
					scelerisque. Imperdiet nec ligula eget accumsan proin mauris
					semper. Turpis semper elementum, ornare viverra eu tellus,
					faucibus viverra congue. Enim, lobortis at elementum fames
					proin.
				</p>

				<Row gutter={[32, 32]} style={{ marginTop: "6rem" }}>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
						<Col xs={24} sm={12} md={8} key={index}>
							<ImageCard
								image={index + 1}
								// title="Mineral Salt Scrub"
								// content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi at ultricies felis viverra semper aenean. Netus ac vitae mauris, mollis. Faucibus ut leo nibh imperdiet. Nisl laoreet egestas sed in porttitor aliquam."
							/>
						</Col>
					))}
				</Row>
			</div>
		</div>
	);
};

export default SpecialList;
