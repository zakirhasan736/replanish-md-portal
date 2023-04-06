
import { Card, Space } from 'antd';
import { servicesArray } from '../db'
import ServiceItem from './ServiceItem';


const Services = () => {
    return (
        
            <Card className="bg-light services-content-card-box">
            <h3 className='service-head-title text-grey'>Professional Services</h3>
                <Space
                    direction="vertical"
                    size={[0, 12]}
                    className='service-item-box'
                >
                    {servicesArray.map((row) => <ServiceItem icon={row.icon} serviceType={row.serviceType} />)}
                </Space>
            </Card>
     
    );
}

export default Services;