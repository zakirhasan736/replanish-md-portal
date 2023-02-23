import React from 'react'
import SectionTitle from 'src/common/Forms/sectionTitle'
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import { Col, Row, Button } from 'antd';
import SelectQuestion from 'src/components/Forms/asynchronous/questionselect';

const MedicalQuestionStepTwo = () => {

    return (

        <LayoutWrapper SiteLogo={false} NextPage={true} BackToPrev={true} SiteTitle='2. Medical Questions'>
            <div className='steps-section-wrapper'>
                <div className='steps-progress-section-wrapper'>
                    <div className='stepstwo-progress-medicale-question'>
                        <Row gutter={[0, 16]}>
                            <Col xxl={{ span: 11, offset: 6 }}>
                                <ul className='steps-progress-bars'>
                                    <li className='steps-progress-bars-item active'></li>
                                    <li className='steps-progress-bars-item active'></li>
                                    <li className='steps-progress-bars-item'></li>
                                    <li className='steps-progress-bars-item'></li>
                                </ul>
                            </Col>
                        </Row>
                        <Row gutter={[0, 16]} justify='center'>
                            <Col xxl={{ span: 24, offset: 0 }}>
                                <div className='step-progress-steps-titlebox'>
                                    <Row justify="start" gutter={[0, 16]}>
                                        <Col xxl={{ span: 24, offset: 0 }} >
                                            <div className='section-top-wrapperbox text-center'>
                                                <SectionTitle title='How often do you wake up with an Testosterone?' />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>

                        <div className='async-user-medical-question-wrapper'>
                            <Row justify="start">
                                <Col xxl={{ span: 12, offset: 6 }}>
                                    <div className='medical-question-itembox'>
                                        <SelectQuestion StepNext={true} FillBtnText="Next" StepQuestionData={'MedicalQuestion'} />
                                    </div>
                                </Col>
                            </Row>
                        </div>


                    </div>
                </div>




            </div>
        </LayoutWrapper>

    )
}

export default MedicalQuestionStepTwo