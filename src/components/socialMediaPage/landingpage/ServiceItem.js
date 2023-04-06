
import {Space, } from 'antd';
import IconTile from './IconTile';
const ServiceItem = (props) => {
    return (
        <Space className='professional-service-item'>
            <IconTile textColor="#000" text={props.serviceType} className="bg-light service-intract-item" avatarSize={22} shape="square" textSize={18} icon={props.icon} />
        </Space>
    );
}

export default ServiceItem;