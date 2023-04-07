import React, { useState } from 'react'
import {
  Col, Row, Button, Radio,
  Form,
  Input,
  InputNumber, Select,
} from 'antd';
import InputField from 'src/common/inputField';
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import SectionTitle from 'src/common/Forms/sectionTitle';
import ProviderInfo from 'src/common/Forms/providerInfo';
import { useRouter } from 'next/router';


const LocationAddressFild = () => {
  const router = useRouter();
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  // 1h 14m

  const handleSubmit = () => {
    //location-address-overview
    router.push("/manage_services/concierge?wizard=3&tab=location-address-overview")
  }

  return (
    <div className='address-fild-wrapper'>
      <div className='concierge-layout-main'>
        <LayoutWrapper NextPage={true} BackToPrev={true} SiteTitle='Search Provider'>
          <div className='layout-wrapper-with-sidebar'>

            <div className='layout-user-screen-box'>
              <Row>
                <Col md={6} xs={24}>
                  <div className='sidebar-content-wrapper'>
                    <div className='provider-sidebar-wrap'>
                      <ProviderInfo ExtraInfo={true} />
                      {/* ==============*/}
                    </div>
                  </div>
                </Col>

                <Col md={18} xs={24}>
                  <div className='provider-overview-wrapper'>
                    <SectionTitle title='Select Location' />

                    <div className='provider-main-wrapperbox'>
                      <div className='provider-select-location-address-fild'>
                        <form action="post" className='async-user-input-form'>

                          <Row>
                            <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
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

                          <div className='async-input-fild-group'>
                            <Row>
                              <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                                <InputField
                                  placeholder='Flat, House no., Building, Company, Apartmen'
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
                                  placeholder='Area, Street, Sector, Village'
                                  name='text'
                                  className='signup-info-fild'
                                  type='text'
                                  errors='pleas fill the required password'
                                />
                              </Col>
                            </Row>
                          </div>
                          <div className='async-input-fild-group'>
                            <Row>
                              <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                                <InputField
                                  placeholder='Landmark'
                                  name='text'
                                  className='signup-info-fild'
                                  type='text'
                                  errors='pleas fill the required password'
                                />
                              </Col>
                            </Row>
                          </div>
                          <div className='async-input-fild-group'>
                            <Row gutter={11}>
                              <Col xxl={{ span: 12, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                                <InputField
                                  placeholder='Town/City'
                                  name='text'
                                  className='signup-info-fild'
                                  type='text'
                                  errors='pleas fill the required password'
                                />
                              </Col>
                              <Col xxl={{ span: 12, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                                <InputField
                                  placeholder='State'
                                  name='text'
                                  className='signup-info-fild'
                                  type='text'
                                  errors='pleas fill the required password'
                                />
                              </Col>
                            </Row>
                          </div>
                          <Row>
                            <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                              <Button onClick={() => handleSubmit()} className='submit-button black-button'>Add</Button>
                            </Col>
                          </Row>
                        </form>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

          </div>

        </LayoutWrapper>
      </div>
    </div>
  )
}

export default LocationAddressFild
