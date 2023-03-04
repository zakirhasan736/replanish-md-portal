import React from 'react';
import { Space, Badge, Dropdown, Row, Col, Button, Typography, Input } from 'antd';
import IconTile from './landingpage/IconTile';
import ImgSmallCircle from 'src/common/ImgSmallCircle';
import { DownOutlined } from '@ant-design/icons';
import Services from './landingpage/Services';
import Sponsored from './landingpage/Sponsored';
import RightSideBarHeader from './RightSideBarHeader';

const RightSideBar = (props) => {
    return (<>
        <RightSideBarHeader />
        <br />
        <Row style={{ marginTop: 4 }}>
            <Col span={24}>
                <Services />
            </Col>
        </Row>
        <br />
        <Row style={{ marginTop: 20 }}>
            <Col span={24}>
                <Sponsored />
            </Col>
        </Row>
    </>
    );
}

export default RightSideBar;