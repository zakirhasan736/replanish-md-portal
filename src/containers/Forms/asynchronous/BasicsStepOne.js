import React from 'react'
import SectionTitle from 'src/common/Forms/sectionTitle'
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import {
    Col, Row, Button, Radio,
    Form,
    Input,
    InputNumber, Select,
} from 'antd';
import InputField from 'src/common/inputField';


const { Option } = Select;

const BasicsStepsOne = ({ handleStep, currval }) => {
    const handleSubmit = () => {
        //handle user input value in a state or database then update the step value
        handleStep(8);
    }
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select>
                <Option value="86">+91</Option> 
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    return (

        <LayoutWrapper SiteLogo={false} NextPage={true} handleStep={handleStep} currval={currval} BackToPrev={true} SiteTitle='The Basics'>
            <div className='steps-section-wrapper'>
                <Row gutter={[0, 16]}>
                    <Col xxl={{ span: 11, offset: 6 }} xl={{ span: 16, offset: 4 }} lg={{ span: 18, offset: 3 }}>
                        <div className='steps-progress-section-wrapper'>

                            <ul className='steps-progress-bars'>
                                <li className='steps-progress-bars-item active'></li>
                                <li className='steps-progress-bars-item'></li>
                                <li className='steps-progress-bars-item'></li>
                                <li className='steps-progress-bars-item'></li>
                            </ul>

                            <div className='step-progress-steps-titlebox'>
                                <Row justify="start" gutter={[0, 16]}>
                                    <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                                        <div className='section-top-wrapperbox text-left'>
                                            <SectionTitle title='The Basics' subtitle='START WITH' />
                                            <p className='desc'>This information helps your doctor determine if you’re eligible for treatment.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className='basic-info-input-data-box'>


                                <form action="post" className='async-user-input-form'>

                                    <Row>
                                        <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                                            <div className='gender-select-box'>
                                                <h4 className='subtitle'>Sex Assigned at Birth</h4>
                                                <div className='gender-select-itembox'>
                                                    <Radio.Group defaultValue="1" buttonStyle="solid">
                                                        <Radio.Button value="1">Male</Radio.Button>
                                                        <Radio.Button value="2">feMale</Radio.Button>
                                                    </Radio.Group>
                                                </div>

                                            </div>

                                        </Col>
                                    </Row>

                                    <div className='async-input-fild-group'>
                                        <Row>
                                            <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                                                <InputField
                                                    placeholder='Birthdate'
                                                    name='text'
                                                    className=' signup-info-fild'
                                                    type='text'
                                                    errors='pleas fill the required email'
                                                />
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className='async-input-fild-group'>
                                        <Row>
                                            <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                                                <InputField
                                                    placeholder='Zipcode'
                                                    name='text'
                                                    className='signup-info-fild'
                                                    type='text'
                                                    errors='pleas fill the required password'
                                                />
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className='async-input-fild-group basic-info-input-fill'>
                                        <Row gutter={[11, 0]}>
                                           
                                            <Col xxl={{ span: 24, offset: 0 }}>
                                                <Form.Item
                                                    name="phone"
                                                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                                                >
                                                    <Input addonBefore={prefixSelector}  placeholder='Phone number'  className='signup-info-fild phone-number-select-input' style={{ width: '100%' }} />
                                                </Form.Item>

                                            </Col>
                                        </Row>
                                    </div>

                                    <Row>
                                        <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                                            <Button onClick={() => handleSubmit()} className='submit-button black-button'>Next</Button>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                                            <div className='info-text-box'>
                                                <p className='info-text-desc'>
                                                    As part of our efforts to ensure patient safety, we need to verify your phone number. By giving us your phone number and continuing, you agree that Ro may send text messages to you to verify your phone number and for any other lawful purpose related to your Ro account and your use of our services, including order confirmations, shipment notifications, and messages from your provider. Message and data rates may apply. Message frequency varies. Reply HELP for help. Reply STOP to opt out.
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>

                                </form>

                            </div>

                        </div>

                    </Col>
                </Row>


            </div>
        </LayoutWrapper>


    )
}

export default BasicsStepsOne