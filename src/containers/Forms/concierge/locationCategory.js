import React, { useState } from 'react'
import { Button, Col, Radio, Row } from "antd";
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import SectionTitle from 'src/common/Forms/sectionTitle';
import ProviderInfo from 'src/common/Forms/providerInfo';
import { useRouter } from 'next/router';

const LocationCategory = () => {

    const [value, setValue] = useState(1);
    const onChanges = (e) => {
        setValue(e.target.value);
    }

    const router = useRouter();
    const onChange = (val) => {
        if (val === 1) { // 1 means clinic and 2 means place
            router.push("/manage_services/concierge?wizard=3&tab=time-slot")
        }
        else {
            router.push("/manage_services/concierge?wizard=3&tab=select-location-address")
        }
    };


    return (
        <div className='location-category-wrapper'>
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

                                <Col lg={16}  md={24} xs={24}>
                                    <div className='provider-overview-wrapper'>
                                        <SectionTitle title='Select Location' />

                                        <div className='provider-main-wrapperbox'>
                                            <div className='provider-select-location'>
                                                <Radio.Group
                                                onChange={onChanges}
                                                value={value}
                                                    size="large"
                                                    className="radio-group-container question-select"
                                                >
                                                    <div className='provider-select-location-item'><Button onClick={() => onChange(1)} value={1} className="radio-btn"><Radio value='1' className="radio-btn">Providers clinic</Radio></Button></div>
                                                    <div className='provider-select-location-item'><Button onClick={() => onChange(2)} className="radio-btn"><Radio value='2' className="radio-btn">at my place</Radio></Button></div>
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
