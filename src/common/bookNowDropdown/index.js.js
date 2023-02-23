import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import PropTypes from "prop-types";
import { MenuList } from "./menuList";

const propTypes = {
	btnType: PropTypes.string.isRequired,
};
const defaultProps = {
	btnType: "default",
};

const BookNowDropown = ({ btnType }) => {
	return (
		<Dropdown
			overlay={MenuList}
			className="btn-dropdown-wrapper"
			overlayClassName="overlay-custom-class"
			trigger={["hover", "click"]}
		>
			<span className="btn-wrapper">
				<Button
					type={btnType || "default"}
					size="large"
					className="book-btn"
				>
					<Space size="large">
						Book Now
						<DownOutlined />
					</Space>
				</Button>
			</span>
		</Dropdown>
	);
};

BookNowDropown.propTypes = propTypes;
BookNowDropown.defaultProps = defaultProps;

export default BookNowDropown;
