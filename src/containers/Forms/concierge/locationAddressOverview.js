import React, { useState } from 'react'
import {
  Col, Row, Radio,
} from 'antd';
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import SectionTitle from 'src/common/Forms/sectionTitle';
import ProviderInfo from 'src/common/Forms/providerInfo';
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FiEdit2 } from "react-icons/fi";
import { useRouter } from 'next/router';

const LocationAddressOverview = () => {

  const router = useRouter();
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const backToAddAddress = () => {
    router.push("/manage_services/concierge?wizard=3&tab=select-location-address")
  }

  return (
    <div className='address-fild-wrapper'>
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
                    <SectionTitle title='Select Location' />

                    <div className='provider-main-wrapperbox'>
                      <div className='provider-select-location-address-overview'>
                        <div className='location-select-cont'>
                          <h4 className='subtitle'>Location</h4>
                          <div className='gender-select-itembox'>
                            <Radio.Group
                              onChange={onChange}
                              value={value}
                              defaultValue="2"
                              size="large"
                              className="radio-group-container question-select"
                            >
                              <div className='provider-select-location-item'><Radio value='1' className="radio-btn">Doctor’s clinic</Radio></div>
                              <div className='provider-select-location-item'><Radio value='2' className="radio-btn">at my place</Radio></div>
                            </Radio.Group>
                          </div>
                        </div>
                        <button onClick={() => backToAddAddress()} className='add-address-button black-button'><span className='plus-icon'><AiOutlinePlus /></span> Add Address</button>
                        <div className='listed-address-wrapper'>
                          <h4 className='title'>Your Addresses</h4>
                          <div className='listed-address-main-wrap'>
                            <div className='listed-address-items mb-30'>
                              <span className='location-icons'><CiLocationOn /></span>
                              <p className='address-text'>1824 Franklin Street,Opelika, United States</p>
                              <div className='control-btn-box'>
                                <button className='edit-btn'><FiEdit2 /></button>
                                <button className='delet-btn'><AiOutlineDelete /></button>
                              </div>
                            </div>

                            <div className='listed-address-items mb-20'>
                              <span className='location-icons'><CiLocationOn /></span>
                              <p className='address-text'>1824 Franklin Street,Opelika, United States</p>
                              <div className='control-btn-box'>
                                <button className='edit-btn'><FiEdit2 /></button>
                                <button className='delet-btn'><AiOutlineDelete /></button>
                              </div>
                            </div>
                          </div>
                          <button onClick={() => router.push("/manage_services/concierge?wizard=3&tab=time-slot")} className='black-button address-continue-btn'>continue</button>
                        </div>
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

export default LocationAddressOverview
