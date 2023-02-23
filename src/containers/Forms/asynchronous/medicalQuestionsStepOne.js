import React from 'react'
import SectionTitle from 'src/common/Forms/sectionTitle'
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import { Col, Row, Button } from 'antd';
import Link from 'next/link';
import Image from 'next/image';

const MedicalQuestionStepOne = () => {

    return (

        <LayoutWrapper SiteLogo={false} NextPage={true} BackToPrev={true} SiteTitle='2. Medical Questions'>
            <div className='steps-section-wrapper'>
                <Row gutter={[0, 16]}>
                    <Col xxl={{ span: 11, offset: 6 }}>
                        <div className='steps-progress-section-wrapper'>
                            <ul className='steps-progress-bars'>
                                <li className='steps-progress-bars-item active'></li>
                                <li className='steps-progress-bars-item active'></li>
                                <li className='steps-progress-bars-item'></li>
                                <li className='steps-progress-bars-item'></li>
                            </ul>
                            <div className='step-progress-steps-titlebox'>
                                <Row justify="start" gutter={[0, 16]}>
                                    <Col xxl={{ span: 24, offset: 0 }} >
                                        <div className='section-top-wrapperbox text-left'>
                                            <SectionTitle title='Medical Questions' subtitle='LET’S TALK ABOUT YOUR HEALTH' />
                                            <p className='desc'>Tell your doctor about your symptoms and overall health. Your doctor needs this information to determine the most appropriate treatment for you. It's important that you are honest and respond as accurately as possible.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className='basic-info-input-data-box'>
                                <div className='async-user-medical-question-infobox'>
                                    <div className='medical-question-modalimg text-center'>
                                    <Image src='/assets/images/md-question-modal.png' width={307.28} height={316.7} alt='medical question modal image' />
                                    </div>
                                    <Row>
                                        <Col xxl={{ span: 24, offset: 0 }} >
                                            <Button className='submit-button black-button'>Continue</Button>
                                        </Col>
                                    </Row>
                                 
                                </div>

                            </div>

                        </div>

                    </Col>
                </Row>


            </div>
        </LayoutWrapper>

    )
}

export default MedicalQuestionStepOne