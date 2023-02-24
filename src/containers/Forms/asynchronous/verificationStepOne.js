import React from 'react'
import SectionTitle from 'src/common/Forms/sectionTitle'
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import { Col, Row, Button } from 'antd';
import Link from 'next/link';
import Image from 'next/image';

const VerificationStepOne = () => {

    return (

        <LayoutWrapper SiteLogo={false} NextPage={true} BackToPrev={true} SiteTitle='3. Identity Verification'>
            <div className='steps-section-wrapper'>
                <Row gutter={[0, 16]}>
                    <Col xxl={{ span: 12, offset: 6 }}>
                        <div className='steps-progress-section-wrapper'>
                            <div className='steps-progress-verify-steps'>

                                <ul className='steps-progress-bars'>
                                    <li className='steps-progress-bars-item active'></li>
                                    <li className='steps-progress-bars-item active'></li>
                                    <li className='steps-progress-bars-item  active'></li>
                                    <li className='steps-progress-bars-item'></li>
                                </ul>

                                <div className='step-progress-steps-titlebox'>
                                    <Row justify="start" gutter={[0, 16]}>
                                        <Col xxl={{ span: 24, offset: 0 }} >
                                            <div className='section-top-wrapperbox text-left'>
                                                <SectionTitle title='Share a photo of yourself' subtitle='Share a photo of yourself' />
                                                <p className='desc'>Tell your doctor about your symptoms and overall health. Your doctor needs this information to determine the most appropriate treatment for you. It's important that you are honest and respond as accurately as possible.</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className='basic-info-input-data-box'>
                                    <div className='async-user-medical-question-infobox'>
                                    
                                        <div className='medical-question-modalimg text-center'>
                                            <Image src='/assets/images/verification-modal-one.png' width={487} height={347} alt='medical question modal image' />
                                        </div>

                                        <Row>
                                            <Col xxl={{ span: 24, offset: 0 }} >
                                                <Button className='submit-button black-button'>take or upload photo</Button>
                                                <p className='info-text-desc'>Your Photos won’t be shared with anyone besides your doctor or nurse practitioner.</p>
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

export default VerificationStepOne