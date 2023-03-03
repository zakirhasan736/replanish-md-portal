import React from "react";
import { Row, Col, Button } from "antd";
import ContactCard from "src/common/contactCard";
import BookNowDropown from "src/common/bookNowDropdown/index.js";
import { ContactListArr } from "./contactData";
import { useRouter } from "next/router";

const ContactDetails = () => {
	const router = useRouter();

	const btnHanlder = () => {
		router.push("/location");
	};
	return (
		<div className="contact-detail-wrapper">
			<div className="layout-wrapper">
				<p className="top-heading">
					Ready to schedule your treatment or Dysport/ Filler Party?
				</p>

				<Row gutter={[32, 32]}>
					{ContactListArr?.map((arr, key) => (
						<Col sm={12} key={key}>
							<ContactCard
								primaryText={arr.primaryText}
								content={arr.content}
								contactDetail={arr.contactDetail}
								secondaryText={arr.secondary}
								phoneNumber={arr.phoneNumber}
							/>
						</Col>
					))}
				</Row>
				<br />
				<br />
				<br />
				<BookNowDropown btnType="primary" />
				{/* <Button
					size="large"
					type="primary"
					className="more-btn"
					onClick={btnHanlder}
				>
					View more location
				</Button> */}
			</div>
		</div>
	);
};

export default ContactDetails;
