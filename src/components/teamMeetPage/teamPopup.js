import { Col, Image, Row } from "antd";
import React from "react";
import InLineTitleContent from "src/common/inLineTitleContent";
import CommonModal from "src/common/modal";
import PropTypes from "prop-types";

const TeamPopup = ({ isModalVisible, setIsModalVisible, width }) => {
	return (
		<CommonModal
			width={width || 520}
			setIsModalVisible={setIsModalVisible}
			isModalVisible={isModalVisible}
		>
			<Row className="team-popup-container">
				<Col xs={24} md={8}>
					<Image
						src="/images/team-popup-image.png"
						alt="popup image"
						preview={false}
						width="100%"
					/>
				</Col>
				<Col xs={24} md={15}>
					<div className="popup-inline-header">
						<h1>Alex Martinez &nbsp;</h1>
						<p>MBBS, MRCP(UK), CCST(DERM)</p>
					</div>
					<InLineTitleContent
						title="Specialist"
						content="Peptide Therapy"
					/>
					<InLineTitleContent title="Experience" content="20+ Yrs" />
					<h1 className="popup-about-heading">
						About Alex Martinez{" "}
					</h1>
					<p className="popup-content">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Eros netus ultricies amet fusce vel. Tortor orci, massa
						enim nunc ultrices netus integer sed lorem. Interdum id
						bibendum netus sit malesuada at tristique pretium lorem.
						Aenean eget auctor scelerisque amet donec placerat
						montes. Enim consequat volutpat mi aliquam felis cras
						sit ullamcorper vitae. Varius lobortis amet rhoncus enim
						in faucibus. Ultricies turpis malesuada pharetra nam.
						Suspendisse a odio curabitur ullamcorper viverra eu
						laoreet. Tristique purus elit, pulvinar faucibus.
						<br />
						<br />
						Pulvinar enim quis sit commodo elementum magna pharetra
						et. Viverra ultrices vitae, consequat iaculis orci diam
						velit, et. Sit egestas ipsum id lacus in. Varius enim
						mattis hendrerit dui felis tincidunt. Orci, nam ultrices
						malesuada mauris sem in vitae. Diam dolor, malesuada
						pharetra ultrices at sit ipsum. Laoreet.
					</p>
					<InLineTitleContent
						title="Email"
						content="email@yoursite.com"
					/>
					<InLineTitleContent
						title="Phone"
						content="8 800 9854 863"
					/>
				</Col>
			</Row>
		</CommonModal>
	);
};

TeamPopup.propTypes = {
	setIsModalVisible: PropTypes.func,
	isModalVisible: PropTypes.bool,
	width: PropTypes.number,
};

export default TeamPopup;
