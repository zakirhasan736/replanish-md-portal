import React from 'react';
import { Space, Row, Col, Dropdown, Badge, Typography} from 'antd';
import IconTile from './landingpage/IconTile';
import { DownOutlined } from '@ant-design/icons';
import ImgSmallCircle from 'src/common/ImgSmallCircle';

const { Text } = Typography;

const HeaderMenu = [{ icon: "/icons/home.svg" }, { icon: "/icons/exclusion.svg" }, { icon: "/icons/bell.svg" }, { icon: "/icons/notes-medical.svg" }, { icon: "/icons/question-circle.svg" }, { icon: "/icons/chatnew.svg" }]

const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
};

const items = [
  
];

const Header = () => {
    return (
        <div className='top-main-header-box' style={{ height: 65,marginTop:15 }}>
            <Row align="middle">
                <Col span={6}><img src='/icons/logo.svg' alt='logo' /></Col>
                <Col span={12} style={{ paddingLeft: 30 }}>
                    <Space size={30}>
                        {HeaderMenu.map((row) => <IconTile textColor="#000" text='' backgroundColor="#fff" avatarSize={30} shape="square" textSize={14} icon={row.icon} />)}
                    </Space>
                </Col>
                <Col span={6} style={{ paddingLeft: 20 }}>
                    <Space size={15}>
                        <IconTile textColor="#000" text='' backgroundColor="#fff" avatarSize={30} shape="square" textSize={14} icon="/icons/grp.svg" />
                        <IconTile textColor="#000" text='' backgroundColor="#fff" avatarSize={30} shape="square" textSize={14} icon="/icons/archeive.svg" />
                        <Badge count={3}>
                            <IconTile textColor="#000" text='' backgroundColor="#fff" avatarSize={30} shape="square" textSize={14} icon="/icons/ringbell.svg" />
                        </Badge>

                        <ImgSmallCircle />
                        <Dropdown menu={{ items, onClick }} >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <Text>Allison Mango</Text>
                                    <DownOutlined />
                                </Space> 
                            </a>
                        </Dropdown>
                    </Space>
                </Col>

            </Row>
        </div>


    );
}

export default Header;