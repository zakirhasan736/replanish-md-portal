
import { Card, Col, Button, Row, Space, Input, Typography } from 'antd';
import PropTypes from "prop-types";
import CustomTitle from '../../../common/CustomTitle';
import EventIcon from '../../../common/EventIcon';
import { UserOutlined } from '@ant-design/icons';
import ImgSmallCircle from '../../../common/ImgSmallCircle';
import CommentInput from '../../../common/CommentInput';
import CommentComponent from '../../../common/CommentComponent';
import { THEMERADIUS } from 'src/utils/constant';
import SubServies from './SubServies';
const { Title, Text } = Typography;
const customcard = {
    borderRadius: THEMERADIUS,
    padding: 12,
    height:344,
    paddingTop:6
};
const servicesArray = [{ icon: "/icons/chat.svg", serviceType: "Professional Q & A" }, { icon: "/icons/timline.svg", serviceType: "Telemedicine Service" }, { icon: "/icons/stetho.svg", serviceType: "Concierge Services" }]
const Services = (props) => {
    return (
        <Card style={customcard} className="bg-light">
            <Space
                direction="vertical"
                style={{
                    width: '100%',
                }}
                size={[0, 10]}
            >

                <Text className='card-head-title text-grey'>Professional Services</Text>
                {servicesArray.map((row) => <SubServies icon={row.icon} serviceType={row.serviceType} />)}
            </Space>
        </Card>

    );
}

export default Services;