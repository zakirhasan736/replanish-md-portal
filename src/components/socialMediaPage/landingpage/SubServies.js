
import { Card, Avatar, Button, Row, Space, Input, Typography } from 'antd';
import PropTypes from "prop-types";
const { Title, Text } = Typography;
import IconTile from './IconTile';
const SubServies = (props) => {
    return (
        <Space style={{ height: 73, background: "#fff", padding: 30, borderRadius: 14, width: "100%" }}>
            <IconTile textColor="#000" text={props.serviceType} className="bg-light" avatarSize={28} shape="square" textSize={18} icon={props.icon} />
        </Space>
    );
}

export default SubServies;