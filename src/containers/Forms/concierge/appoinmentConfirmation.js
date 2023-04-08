import React, { useState } from 'react'
import {
  Col, Row, Button, Radio,
  Form,
  Input,
  InputNumber, Select,
} from 'antd';
import Image from 'next/image';
const { Option } = Select;
import InputField from 'src/common/inputField';
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import SectionTitle from 'src/common/Forms/sectionTitle';
import ProviderInfo from 'src/common/Forms/providerInfo';
import { IoMdClose } from "react-icons/io";
import { AiOutlineClockCircle } from "react-icons/ai";
const { TextArea } = Input;

const AppoinmentConfirmation = () => {

  const [value, setValue] = useState(1);
  const [OpenConsultantPopUp, setOpenConsultantPopUp] = useState(false);
  const [OpenConfirmationPopup, setOpenConfirmationPopup] = useState(false);

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select>
        <Option value="86">+91</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const handleSubmit = () => {
    setOpenConsultantPopUp(true);
  }

  const handleFinalConfrim = () => {
    setOpenConsultantPopUp(false);
    setOpenConfirmationPopup(true);
  }
  return (
    <div className='appoinment-confirmation-wrapper'>
      <div className='concierge-layout-main'>
        <LayoutWrapper NextPage={true} BackToPrev={true} SiteTitle='Search Provider'>
          <div className='layout-wrapper-with-sidebar'>

            <div className='layout-user-screen-box'>

              <Row>
                <Col lg={8} md={24} xs={24}>
                  <div className='sidebar-content-wrapper'>
                    <div className='provider-sidebar-wrap'>
                      <ProviderInfo ExtraInfo={true} />
                      {/* ==============*/}
                    </div>
                  </div>
                </Col>

                <Col lg={16} md={24} xs={24}>
                  <div className='provider-overview-wrapper'>
                    <div className='section-title-wrapper'>
                      <SectionTitle title='Tomorrow ,19 Dec' />
                      <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant leo ac, porttitor eget. Commodo, porttitor massa amet tincidunt neque. Sed gravida mauris risus nec. Molestie fermentum sed risus arcu, eros, turpis lobortis a egestas. Consequat, dui, suscipit est augue. </p>
                    </div>

                    <div className='provider-main-wrapperbox'>
                      <div className='provider-select-location-address-fild'>

                        <form action="post" className='async-user-input-form'>
                          <div className='async-input-fild-group'>
                            <Row gutter={[10,10]}>
                              <Col xxl={{ span: 12, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                                <InputField
                                  placeholder='First name'
                                  name='text'
                                  className=' signup-info-fild'
                                  type='text'
                                  errors='pleas fill the required email'
                                />
                              </Col>
                              <Col xxl={{ span: 12, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                                <InputField
                                  placeholder='last name'
                                  name='text'
                                  className=' signup-info-fild'
                                  type='text'
                                  errors='pleas fill the required email'
                                />
                              </Col>
                            </Row>
                          </div>

                          <div className='async-input-fild-group'>
                            <Row gutter={[32, 32]}>
                              <Col xxl={{ span: 5, offset: 0 }} xl={{ span: 5, offset: 0 }} lg={{ span: 6, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                                <InputField
                                  placeholder='Age'
                                  name='text'
                                  className='signup-info-fild'
                                  type='text'
                                  errors='pleas fill the required email'
                                />
                              </Col>
                              <Col xxl={{ span: 19, offset: 0 }} xl={{ span: 19, offset: 0 }} lg={{ span: 18, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                                <div className='gender-select-box'>
                                  <h4 className='subtitle'>Gender</h4>
                                  <div className='gender-select-itembox'>
                                    <Radio.Group
                                      onChange={onChange}
                                      value={value}
                                      defaultValue="1"
                                      size="large"
                                      className="radio-group-container question-select"
                                    >
                                      <div className='provider-select-location-item'><Radio value='1' className="radio-btn">Male</Radio></div>
                                      <div className='provider-select-location-item'><Radio value='2' className="radio-btn">Female</Radio></div>
                                      <div className='provider-select-location-item'><Radio value='3' className="radio-btn">Others</Radio></div>
                                    </Radio.Group>
                                  </div>

                                </div>

                              </Col>
                            </Row>
                          </div>

                          <div className='async-input-fild-group'>
                            <Row>
                              <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                                <InputField
                                  placeholder='Email address'
                                  name='email'
                                  className=' signup-info-fild'
                                  type='email'
                                  errors='pleas fill the required email'
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
                                  type='phone'
                                >
                                  <Input addonBefore={prefixSelector} placeholder='Phone number' className='signup-info-fild phone-number-select-input' style={{ width: '100%' }} />
                                </Form.Item>

                              </Col>
                            </Row>
                          </div>

                          <div className='async-input-fild-group text-area-form-fild'>
                            <Row>
                              <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                                <Form.Item
                                  placeholder='Description'
                                  name='description'
                                  rules={[{ required: true, message: 'Please write some point in here!' }]}
                                >
                                  <TextArea placeholder='Description' rows={4} />
                                </Form.Item>
                              </Col>
                            </Row>
                          </div>

                          <Row>
                            <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                              <Button onClick={() => handleSubmit()} className='submit-button black-button'>Scheduled Appointment</Button>
                            </Col>
                          </Row>

                        </form>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>


            { /* ========popUp box======== */}
            {OpenConfirmationPopup && <div className='popup-widgets-wrapper'>
              <div className='popup-widget-main'>
                <button onClick={()=>    setOpenConfirmationPopup(false)} className='pop-close-btn'><IoMdClose /></button>
                <div className='popup-main-content-box'>
                  <div className='check-mark-icon-box'>
                    <Image src='/icons/forms/check-mark.svg' className='check-mark-icon' width={106} height={106} prefix={false} preview={false} />
                  </div>
                  <h2 className='popup-main-title'>Your booking has been confirmed.</h2>
                  <p className='popup-main-desc'>You will be notified by mail and sms once the best provider has been selected for your service. <span>This usealy takes upto 2 hours.</span></p>

                </div>

              </div>
            </div>}



            { /* ========consultation booking popUp box======== */}
            {OpenConsultantPopUp && <div className='consultation-booking-confirmation-popup'>
              <div className='popup-widgets-wrapper'>
                <div className='popup-widget-main'>
                  <button onClick={()=>setOpenConsultantPopUp(false)} className='pop-close-btn'><IoMdClose /></button>
                  <div className='popup-main-content-box'>
                    <h2 className='popup-main-title'>Book Consultation</h2>
                    <ProviderInfo />
                    <div className='selected-event-schedule'>
                      <div className='event-days-time'><span className='days-date'>Toworrow</span>, <span className='times-at'>09:00 AM</span></div>
                      <div className='event-duration'><span className='clock-icons'><AiOutlineClockCircle /></span> in <span className='duretion-titme'>30</span>Minutes</div>
                    </div>
                    <div className='popup-main-btn-box text-center'>
                      <button onClick={() => handleFinalConfrim()} className='action-button black-button'>Confirm</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>}

          </div>

        </LayoutWrapper>
      </div>
    </div>
  )
}

export default AppoinmentConfirmation
