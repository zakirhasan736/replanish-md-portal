import React from "react";

import { Tag, Image } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import TextField from "src/common/textField";
import CommonButton from "src/common/button";

import PropTypes from "prop-types";

const LocatedCustomers = ({ back }) => {
	function log(e) {
		console.log(e);
	}
	return (
		<div className="location_customer">
			<div className="location_customer_main">
				<h3>
					Next, Choose The Locations And Languages Of Your Customers
				</h3>
			</div>
			<div className="location_customer_content">
				<TextField
					fontSize="16px"
					fontWeight="600"
					letterSpacing="0.3px"
					fontFamily="Lato, sans-serif"
				>
					Where are your customers located?
				</TextField>
				<div className="located_customers">
					<Tag
						closable
						onClose={log()}
						color="#8DD9C2"
						name="locatedCustomer"
					>
						USA - country
					</Tag>
					<Tag icon={<PlusOutlined />}>
						<span style={{ color: "#2c99cb" }}>Add location</span>
					</Tag>
				</div>
				<div className="location_map">
					<Image
						src="/assets/locationMap/Frame44.svg"
						alt="map"
						width="100%"
					/>
				</div>
				<div className="customers_language">
					<TextField
						fontSize="16px"
						fontWeight="600"
						letterSpacing="0.3px"
						fontFamily="Lato, sans-serif"
					>
						What languages do your customers speak?
					</TextField>
				</div>
				<div className="located_customers">
					<Tag
						closable
						onClose={log()}
						color="#8DD9C2"
						name="customerLanguage"
					>
						English
					</Tag>
					<Tag icon={<PlusOutlined />}>
						<span style={{ color: "#2c99cb" }}>Add language</span>
					</Tag>
				</div>
				<div className="bottomText">
					<TextField
						mt="76px"
						textAlign="center"
						fontSize="16px"
						fontFamily="Lato, sans-serif"
					>
						Your ads can show to people in or who share interest in
						your locations, and to people who speak the languages
						you select.{" "}
						<span style={{ color: "#2c99cb" }}>Learn more</span>
					</TextField>
				</div>
			</div>
			<div className="button_main">
				<CommonButton
					child="Next"
					classname="next"
					topClass="nextTop"
					width="128px"
					height="48px"
					background="var(--secondary)"
					borderRadius="24px 0px 0px 24px"
					color="#ffffff"
					htmlType="submit"
				/>
				<CommonButton
					child="Back"
					background="var(--primary)"
					classname="back"
					width="128px"
					height="48px"
					borderRadius="0px 24px 24px 0px"
					color="#ffffff"
					onClick={back}
				/>
			</div>
		</div>
	);
};

LocatedCustomers.propTypes = {
	back: PropTypes.func,
};

export default LocatedCustomers;
