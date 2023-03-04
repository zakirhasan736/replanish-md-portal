
import { Card, Col, Tag, Row, Space, Input, Typography } from 'antd';
import PropTypes from "prop-types";
import CustomTitle from '../../../common/CustomTitle';
import EventIcon from '../../../common/EventIcon';
import { UserOutlined } from '@ant-design/icons';
import ImgSmallCircle from '../../../common/ImgSmallCircle';
import CommentInput from '../../../common/CommentInput';
import CommentComponent from '../../../common/CommentComponent';
import { THEMERADIUS } from 'src/utils/constant';
import SubSponsored from './SubSponsored';
const { Title, Text } = Typography;
const customcard = {
    backgroundColor: "#438465",
    borderRadius: THEMERADIUS,
    padding: 12,
    height: 344,
    paddingTop: 6
};
const sponsordArray = [{ icon: "/images/sponsord/sponserimg.png", heading: "Diet Plan according to your BMI", link: "eathealthy.com" }, { icon: "/images/sponsord/sponserimg (1).png", heading: "Diet Plan according to your BMI", link: "eathealthy.com" }, { icon: "/images/sponsord/sponserimg (2).png", heading: "Diet Plan according to your BMI", link: "eathealthy.com" }, { icon: "/images/sponsord/sponserimg (3).png", heading: "Diet Plan according to your BMI", link: "eathealthy.com" }, { icon: "/images/sponsord/sponserimg (4).png", heading: "Diet Plan according to your BMI", link: "eathealthy.com" }]
const Sponsored = (props) => {
    return (
        <div >

            <Row justify="space-between">
                <Col push={1}> <Text style={{ fontWeight: 400, fontSize: 18, color: "#000" }}>Sponsord</Text></Col>
                <Col pull={1}>  <Tag color="#FED15E">AD</Tag></Col>
            </Row>
            <Space direction="vertical"
                size={[0, 0]} style={{ height: 73, background: "#fff", paddingTop: 19, borderRadius: 14, width: "100%" }}>
                {sponsordArray.map((row) => <SubSponsored icon={row.icon} heading={row.heading} link={row.link} />)}
            </Space>

        </div>

    );
}

export default Sponsored;