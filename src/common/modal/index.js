import React from "react";

import { Modal } from "antd";

import PropTypes from "prop-types";

const CommonModal = ({
	setIsModalVisible,
	isModalVisible,
	children,
	width,
}) => {
	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};
	return (
		<div>
			<Modal
				width={width}
				title="Basic Modal"
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				{children}
			</Modal>
		</div>
	);
};

CommonModal.propTypes = {
	setIsModalVisible: PropTypes.func,
	isModalVisible: PropTypes.bool,
	children: PropTypes.func,
	width: PropTypes.number,
};

export default CommonModal;
