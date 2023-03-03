
import { Card, Avatar, Col, Divider, Row, Space, Input, Typography } from 'antd';
import PropTypes from "prop-types";
const { Title, Text } = Typography;
import IconTile from './IconTile';
const SubSponsored = (props) => {
    return (
        <>
            <Row>
                <Col><Avatar shape="square" size={68} icon={<img src={props.icon} />} /></Col>
                <Col push={1} span={10}><div style={{ marginTop: 5 }}>{props.heading && <Text style={{ color: "#000000", fontSize: 16, lineHeight: "19px" }}>{props.heading}</Text>}</div><div >{props.link && <Text style={{ color: "#7D7D7D", fontSize: 14, lineHeight: "19px" }}>{props.link}</Text>}</div></Col>
            </Row>
            <Divider style={{ margin: "15px 0px" }} />
        </>
    );
}

export default SubSponsored;