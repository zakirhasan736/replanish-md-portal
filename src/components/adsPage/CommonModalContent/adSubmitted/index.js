import React from "react";
import { Button, Image } from "antd";
import PropTypes from "prop-types";

const propTypes = {
	setIsModalVisible: PropTypes.func,
};

const AdSubmitted = ({ setIsModalVisible }) => {
	return (
		<div className="submitted">
			<div className="submitted_content">
				<Image
					src="/assets/adSubmitted/Group 87.svg"
					alt="submitted"
					width="310.48"
					height="192.92px"
				/>

				<h3>
					Ad Submited For Verification,
					<br />
					We Will Notify You Once Your Ad Is Live
				</h3>
				<div className="closeButton">
					<Button onClick={() => setIsModalVisible(false)}>
						Close
					</Button>
				</div>
			</div>
		</div>
	);
};

AdSubmitted.propTypes = propTypes;

export default AdSubmitted;
