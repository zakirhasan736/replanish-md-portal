import { Button, Col, Row } from "antd";
import React from "react";
import IconText from "src/common/iconText";
import Link from "next/link";
import PropTypes from "prop-types";
import { InfoData } from "./infoData";

const propTypes = {
	title: PropTypes.string,
	btnText: PropTypes.string,
};

const defaultProps = {
	// btnText: "Start online visit",
	btnText: "Book Now",
};

const TopInfoSection = ({ title, btnText }) => {
	return (
		<div className="topinfo-container">
			<div className="layout-wrapper">
				<h1 className="main-heading">
					Experience {title} With{" "}
					<span className="highlight-text">Replenish</span>
				</h1>
				<Row gutter={[16, 32]}>
					{InfoData?.map((info, key) => (
						<Col xs={24} md={8} key={key}>
							<IconText icon={info?.icon} title={info?.text} />
						</Col>
					))}
				</Row>
				<Button size="large" type="primary" className="online-btn">
					<Link href="https://replenishmd.janeapp.com/">
						<a target="_blank">{btnText}</a>
					</Link>
				</Button>
			</div>
		</div>
	);
};

TopInfoSection.propTypes = propTypes;
TopInfoSection.defaultProps = defaultProps;

export default TopInfoSection;
