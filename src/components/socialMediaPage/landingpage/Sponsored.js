import { Col, Tag, Row, Space } from 'antd';
import SponsoredCardItem from './SponsoredCardItem';
import {sponsordArray} from '../db'

const Sponsored = () => {
    return (
        <div className='sponsored-content-wrap' >
             <div className='component-title-box'>
            <Row justify="space-between">
                <Col> <h3 >Sponsord</h3></Col>
                <Col>  <Tag color="#FED15E">AD</Tag></Col>
            </Row>
            </div>
         <div className='sponsored-card-itembox'>
            <Space direction="vertical" className='sponsored-card-item-wrap'
                size={[0, 0]}>
                {sponsordArray.map((row) => <SponsoredCardItem icon={row.icon} heading={row.heading} link={row.link} />)}
            </Space>
            </div>

        </div>

    );
}

export default Sponsored;