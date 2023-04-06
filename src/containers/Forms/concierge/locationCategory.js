import React, { useState } from 'react'
import { Col, Radio, Row } from "antd";
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import SectionTitle from 'src/common/Forms/sectionTitle';
import ProviderInfo from 'src/common/Forms/providerInfo';




const LocationCategory = () => {
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <div className='location-category-wrapper'>
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
                                            <div className='provider-select-location'>
                                                <Radio.Group
                                                    onChange={onChange}
                                                    value={value}
                                                    size="large"
                                                    className="radio-group-container question-select"
                                                >
                                                    <div className='provider-select-location-item'><Radio value='1' className="radio-btn">Providers clinic</Radio></div>
                                                    <div className='provider-select-location-item'><Radio value='2' className="radio-btn">at my place</Radio></div>
                                                </Radio.Group>
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

export default LocationCategory
