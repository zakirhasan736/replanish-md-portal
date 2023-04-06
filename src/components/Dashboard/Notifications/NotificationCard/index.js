import { Space } from "antd";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import TextField from "src/common/textField/index";

const NotificationCard = ({ notification }) => {
	return (
		<Space className="notification-card" align="start">
			<img src={notification?.["image"]} />
			<Space direction="vertical" size={0}>
				<TextField
					name={notification?.["title"]}
					fontFamily="Proxima-Nova"
					fontSize={15}
					lineHeight={1.2}
				/>
				<TextField
					name={dayjs().fromNow()}
					fontFamily="Proxima-Nova"
					fontSize={12}
					color="#7D7D7D"
					lineHeight={1}
				/>
			</Space>
		</Space>
	);
};

NotificationCard.propTypes = {
	notification: PropTypes.object,
};

export default NotificationCard;
