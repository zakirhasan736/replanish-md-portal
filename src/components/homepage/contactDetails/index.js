import React from "react";
import { Row, Col } from "antd";
import ContactCard from "src/common/contactCard";
import BookNowDropown from "src/common/bookNowDropdown/index.js";
import { ContactListArr } from "./contactData";

const ContactDetails = () => {
	return (
		<div className="contact-detail-wrapper">
			<div className="layout-wrapper">
				<p className="top-heading">
					Ready to scheduled your event or treatment
				</p>
				<Row gutter={[32, 32]}>
					{ContactListArr?.map((arr, key) => (
						<Col sm={12} key={key}>
							<ContactCard
								primaryText={arr.primaryText}
								content={arr.content}
								secondaryText={arr.secondary}
								phoneNumber={arr.phoneNumber}
							/>
						</Col>
					))}
				</Row>
				<br />
				<br />
				<BookNowDropown btnType="primary" />
			</div>
		</div>
	);
};

export default ContactDetails;
