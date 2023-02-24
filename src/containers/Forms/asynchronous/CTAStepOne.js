import React from 'react'
import SectionTitle from 'src/common/Forms/sectionTitle'
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import { Col, Row, Button, Radio } from 'antd';
import InputField from 'src/common/inputField';
import ContactCard from 'src/common/contactCard';
import Link from 'next/link';
import Image from 'next/image';

const CTAStepOne = ({ handleStep, currval }) => {
    const handleDtata = () => {
        //handle all input data and store or set a state then update step value
        handleStep(9)
    }
    return (

        <LayoutWrapper SiteLogo={false} NextPage={true} handleStep={handleStep} currval={currval} BackToPrev={true} SiteTitle='SMS Updates'>
            <div className='steps-section-wrapper'>
                <Row gutter={[0, 16]}>
                    <Col xxl={{ span: 11, offset: 6 }}>
                        <div className='steps-progress-section-wrapper'>
                            <ul className='steps-progress-bars'>
                                <li className='steps-progress-bars-item active'></li>
                                <li className='steps-progress-bars-item'></li>
                                <li className='steps-progress-bars-item'></li>
                                <li className='steps-progress-bars-item'></li>
                            </ul>
                            <div className='step-progress-steps-titlebox'>
                                <Row justify="start" gutter={[0, 16]}>
                                    <Col xxl={{ span: 24, offset: 0 }} >
                                        <div className='section-top-wrapperbox text-left'>
                                            <SectionTitle title='Opt-in for SMS notifications' subtitle='A MODERN TREATMENT SOLUTION' />
                                            <p className='desc'>Get text messages with important updates from RMD</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className='basic-info-input-data-box'>


                                <div className='async-user-cta-infobox'>

                                    <Row>
                                        <Col xxl={{ span: 24, offset: 0 }} >
                                            <ul className='opt-sms-infobox'>
                                                <li className='opt-sms-infolist' ><Image height={28} width={28} alt='info-icon' src='/assets/images/carbon_medication-reminder.png' /> <span>Prescription expiration reminders</span></li>
                                                <li className='opt-sms-infolist' ><Image height={24} width={24} alt='info-icon' src='/assets/images/akar-icons_health.png' /> <span>Prescription expiration reminders</span></li>
                                            </ul>

                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col xxl={{ span: 24, offset: 0 }} >
                                            <Button onClick={() => handleDtata()} className='submit-button black-button'>Text me updates</Button>
                                            <Button onClick={() => handleDtata()} className='submit-button transparent-button'>no Thanks, i am good!</Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xxl={{ span: 24, offset: 0 }} >
                                            <div className='info-text-box'>
                                                <p className='info-text-desc'>
                                                    By selecting "Text me updates", you agree to receive texts from Ro to the number you provided that might be considered marketing. Agreeing is not required to purchase. Message and data rates may apply. Message frequency varies. Reply HELP for help. Reply STOP to opt out.Read <Link href='/'>RMD’s SMS policy</Link> .
                                                </p>
                                            </div>
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

export default CTAStepOne