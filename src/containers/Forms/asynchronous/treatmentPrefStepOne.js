import React from 'react'
import SectionTitle from 'src/common/Forms/sectionTitle'
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import { Col, Row, Button } from 'antd';
import Image from 'next/image';

const TreatmentPrefStepOne = ({ handleStep, currval }) => {
    
    const handleSubmitData = () => {
        //handle input field data afte that need to update step value
        handleStep(13)
    }
    return (

        <LayoutWrapper SiteLogo={false} currval={currval} handleStep={handleStep} NextPage={true} BackToPrev={true} SiteTitle='3. Treatment Preference'>
            <div className='steps-section-wrapper'>
                <Row gutter={[0, 16]}>
                    <Col xxl={{ span: 13, offset: 6 }} xl={{ span: 16, offset: 4 }}  lg={{ span: 18, offset: 3 }} md={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }}>
                        <div className='steps-progress-section-wrapper'>
                            <div className='steps-progress-treatment-pref'>
                                <ul className='steps-progress-bars'>
                                    <li className='steps-progress-bars-item active'></li>
                                    <li className='steps-progress-bars-item active'></li>
                                    <li className='steps-progress-bars-item active'></li>
                                    <li className='steps-progress-bars-item'></li>
                                </ul>
                                <div className='step-progress-steps-titlebox'>
                                    <Row justify="start" gutter={[0, 16]}>
                                        <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                                            <div className='section-top-wrapperbox text-left'>
                                                <SectionTitle title='Treatment Preference' subtitle='make your request' />
                                                <p className='desc'>Tell your doctor about your symptoms and overall health. Your doctor needs this information to determine the most appropriate treatment for you. It's important that you are honest and respond as accurately as possible.</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className='basic-info-input-data-box'>
                                    <div className='async-user-medical-question-infobox'>
                                        <div className='medical-question-modalimg text-center'>
                                            <Image src='/assets/images/treatment-pref-modal.png' width={314} height={273} alt='medical question modal image' />
                                        </div>
                                        <Row>
                                            <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                                                <Button onClick={() => handleSubmitData()} className='submit-button black-button'>Continue</Button>
                                            </Col>
                                        </Row>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </Col>
                </Row>


            </div>
        </LayoutWrapper>

    )
}

export default TreatmentPrefStepOne