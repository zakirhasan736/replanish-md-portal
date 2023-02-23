import React from 'react'
import SectionTitle from 'src/common/Forms/sectionTitle'
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import { Col, Row, Button } from 'antd';
import CheckboxSelectQuestion from 'src/components/Forms/asynchronous/ckeckboxQuestionselect';

const TreatmentPrefStepFour = () => {

    return (

        <LayoutWrapper SiteLogo={false} NextPage={true} BackToPrev={true} SiteTitle='3. Treatment Preference'>
            <div className='steps-section-wrapper'>
                <Row gutter={[0, 16]}>
                    <Col xxl={{ span: 13, offset: 6 }}>
                        <div className='steps-progress-section-wrapper'>
                        <div className='steps-progress-treatment-prefFour'>
                            <ul className='steps-progress-bars'>
                                <li className='steps-progress-bars-item active'></li>
                                <li className='steps-progress-bars-item active'></li>
                                <li className='steps-progress-bars-item active'></li>
                                <li className='steps-progress-bars-item'></li>
                            </ul>
                            <div className='step-progress-steps-titlebox'>
                                <Row justify="start" gutter={[0, 16]}>
                                    <Col xxl={{ span: 24, offset: 0 }} >
                                        <div className='section-top-wrapperbox text-left'>
                                            <SectionTitle title='Do you have a dosage preference for slidenafil?' subtitle='Dosage' />
                                            <p className='desc'>Tell your doctor about your symptoms and overall health. Your doctor needs this information to determine the most appropriate treatment for you. It's important that you are honest and respond as accurately as possible.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                          <CheckboxSelectQuestion StepQuestionData={'TreatPrefFour'}  />
                        </div>
                        </div>

                    </Col>
                </Row>


            </div>
        </LayoutWrapper>

    )
}

export default TreatmentPrefStepFour