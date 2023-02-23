import React from 'react'
import SectionTitle from 'src/common/Forms/sectionTitle'
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import { Col, Row, Button } from 'antd';
import InputField from 'src/common/inputField';
import TextField from 'src/common/textField/index';


const MedicalQuestionStepThree = () => {

    return (

        <LayoutWrapper SiteLogo={false} NextPage={true} BackToPrev={true} SiteTitle='2. Medical Questions'>
            <div className='steps-section-wrapper'>
                <Row gutter={[0, 16]}>
                    <Col xxl={{ span: 11, offset: 6 }}>
                        <div className='steps-progress-section-wrapper'>
                        <div className='stepsthree-progress-medicale-question'>
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
                                            <SectionTitle title='No problem, we know how busy you are.' />
                                            <p className='desc'>
                                                Enter your email below and we'll send you the nearest and most affordable locations in your area so you can see a healthcare provider. After, come on back and a physician will review your information and, if appropriate, write a prescription to your pharmacy of choice.
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className='basic-info-input-data-box'>
                                <div className='async-user-medical-question-infobox'>
                                <form action="post" className='async-user-input-form'>

                                <div className='async-input-fild-group'>
                                    <Row>
                                        <Col xxl={{ span: 24, offset: 0 }} >
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
                                <div className='async-input-fild-group'>
                                    <Row>
                                        <Col xxl={{ span: 24, offset: 0 }} >
                                        <textarea placeholder='Comments' className='medical-qa-text-area'></textarea>
                                        </Col>
                                    </Row>
                                </div>
                             
                                <Row>
                                    <Col xxl={{ span: 24, offset: 0 }} >
                                        <Button className='submit-button black-button'>Submit</Button>
                                    </Col>
                                </Row>
                         
                            </form>
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

export default MedicalQuestionStepThree