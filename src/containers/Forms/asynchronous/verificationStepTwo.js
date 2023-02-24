import React, { useState } from 'react'
import SectionTitle from 'src/common/Forms/sectionTitle'
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import { Col, Row, Button } from 'antd';
import Image from 'next/image';

const VerificationStepTwo = ({ handleStep, currval }) => {

    const ProceedAnyway = () => {
        //write the code for process anyway
        // finally update the step for next process
        handleStep(18);
    }

    const TryAgainForImageReUpload = () => {
        //write the code for process anyway
        // finally update the step for next process
        handleStep(16);
    }
    return (

        <LayoutWrapper SiteLogo={false} NextPage={true} handleStep={handleStep} currval={currval} BackToPrev={true} SiteTitle='3. Identity Verification'>
            <div className='steps-section-wrapper'>
                <Row gutter={[0, 16]}>
                    <Col xxl={{ span: 11, offset: 6 }}>
                        <div className='steps-progress-section-wrapper'>
                            <div className='steps-progress-verify-steps verification-step-two'>
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
                                                <SectionTitle title='We cannot detect your face.' />
                                                <p className='desc'>Tell your doctor about your symptoms and overall health. Your doctor needs this information to determine the most appropriate treatment for you. It's important that you are honest and respond as accurately as possible.</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className='basic-info-input-data-box'>
                                    <div className='async-user-verify-infobox'>
                                        <div className='verify-identity-modalimg text-center'>
                                            <Image src='/assets/images/thump-modalimg.png' width={244.95} height={205.09} alt='medical question modal image' />
                                        </div>
                                        <h5 className='info-list-title'>How should i provide a better photo?</h5>
                                        <ul className='info-list-box'>
                                            <li className='info-list-items'>1. Your face is well-lit and not blurry</li>
                                            <li className='info-list-items'>2. You are the only person in the photo</li>
                                            <li className='info-list-items'>3. Nothing is covering your face, including sunglasses or hats.</li>
                                        </ul>
                                    </div>
                                    <div className='verify-button-box'>
                                        <Row>
                                            <Col xxl={{ span: 24, offset: 0 }} >
                                            <Button onClick={()=>TryAgainForImageReUpload()} className='submit-button black-button'>Try again</Button>
                                                <Button onClick={()=>ProceedAnyway()} className='submit-button transparent-button'>Proceed anyway</Button>
                                                <div className='privecy-info-pin-text' >  <Image src='/assets/images/bxs_lock-alt.png' width={24} height={24} alt='lock icons' />  <p className='info-text-desc'>256-BIT TLS SECURITY</p></div>
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

export default VerificationStepTwo