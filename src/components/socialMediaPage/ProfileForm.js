import React from 'react';

import { AutoComplete, Cascader, Checkbox, Col, Row, DatePicker, Layout, Tabs, Form, Input, InputNumber, Select, Button } from 'antd';
import LandingMessage from './landingpage/LandingMessage';
import Widget from '../../common/Widget';
import AddToFeed from './landingpage/AddToFeed';
import Services from './landingpage/Services';
import SideBar from './SideBar';
import TabHeader from './TabHeader';
const { TabPane } = Tabs;
const { Option } = Select;
const layout = {
    labelCol: {
        span: 7,
    },
    wrapperCol: {
        span: 24,
    },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */
const config = {
    rules: [{ type: 'object', required: true, message: 'Please select time!' }],
};
const residences = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 24,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
const ProfileForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const onChange = (key) => {
        console.log(key);
    };




    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    const suffixSelector = (
        <Form.Item name="suffix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="USD">$</Option>
                <Option value="CNY">¥</Option>
            </Select>
        </Form.Item>
    );

    const [autoCompleteResult, setAutoCompleteResult] = React.useState([]);

    const onWebsiteChange = (value) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
        }
    };
    const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website,
    }));

    return (

        <div className="social-media" style={{ background: "#fff !important" }} >
            <TabHeader />
            <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                    <SideBar />
                </Col>
                <Col className="gutter-row" span={12}>
                    <Tabs centered defaultActiveKey="1" onChange={onChange}>
                        <TabPane tab="Edit Profile" key="1">
                            <Form

                                form={form}
                                name="register"
                                onFinish={onFinish}
                                layout="vertical"
                                initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
                                style={{ maxWidth: 600 }}
                                scrollToFirstError
                            >
                                <Row justify="space-between">
                                    <Col xs={11} sm={11}>
                                        <Form.Item
                                            name="name"
                                            label="Name"
                                            rules={[
                                                {
                                                    type: 'name',
                                                    message: 'The input is not valid name!',
                                                },
                                                {
                                                    required: true,
                                                    message: 'Please input your name!',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={11} sm={11}>
                                        <Form.Item
                                            name="username"
                                            label="Username"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your Username',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Row justify="space-between">
                                    <Col xs={11} sm={11}>
                                        <Form.Item name="date-picker" label="Birthdate" {...config}>
                                            <DatePicker />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={11} sm={11}>
                                        <Form.Item
                                            name={['user', 'email']}
                                            label="Email"
                                            rules={[
                                                {
                                                    type: 'email',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row justify="space-between">
                                    <Col xs={24} sm={24}>

                                        <Form.Item
                                            name={['aboutme']}
                                            label="About Me"
                                            rules={[
                                                {
                                                    type: 'email',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>

                                    </Col>
                                </Row>
                                <Row justify="space-between">
                                    <Col xs={24} sm={24}>

                                        <Form.Item
                                            name={['address']}
                                            label="Address"
                                            rules={[
                                                {
                                                    type: 'address',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>

                                    </Col>
                                </Row>

                                <Row justify="space-between">
                                    <Col xs={11} sm={11}>

                                        <Form.Item
                                            name={['city']}
                                            label="city"
                                            rules={[
                                                {
                                                    type: 'city',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>

                                    </Col>
                                    <Col xs={11} sm={11}>

                                        <Form.Item
                                            name={['state']}
                                            label="state"
                                            rules={[
                                                {
                                                    type: 'state',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>

                                    </Col>

                                    <Col xs={11} sm={11}>

                                        <Form.Item
                                            name="country"
                                            label="Select"
                                            hasFeedback
                                            rules={[{ required: true, message: 'Please select your country!' }]}
                                        >
                                            <Select placeholder="Please select a country">
                                                <Option value="china">China</Option>
                                                <Option value="usa">U.S.A</Option>
                                            </Select>
                                        </Form.Item>


                                    </Col>
                                    <Col xs={11} sm={11}>

                                        <Form.Item
                                            name="phone"
                                            label="Phone Number"
                                            rules={[{ required: true, message: 'Please input your phone number!' }]}
                                        >
                                            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                                        </Form.Item>


                                    </Col>
                                </Row>



                            </Form>
                        </TabPane>
                        <TabPane tab="Feed" key="2">

                        </TabPane>
                    </Tabs>

                </Col>
                <Col className="gutter-row" span={6}>
                    <Services />
                </Col>
            </Row>
        </div>

    );
}

export default ProfileForm;