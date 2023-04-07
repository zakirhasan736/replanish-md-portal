import React from 'react'
import SectionTitle from 'src/common/Forms/sectionTitle'
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import { Button, Col, Row } from 'antd';
import Link from 'next/link';
import Image from 'next/image';

const UserAuthWithGoogle = ({ handleStep, currval ,AuthWithGoogle}) => {
    const handleGoogleSignin = () => {
        // enter your google sign in auth after completing need to update step for next process
        handleStep(6);
        AuthWithGoogle(true);
    }

    const handleEmailPasswordSignUp = () => {
        // enter your email password signup after completing need to update step for next process
        handleStep(5);
        AuthWithGoogle(false)
    }
    return (
        <LayoutWrapper SiteLogo={false} handleStep={handleStep} currval={currval - 1} NextPage={true} BackToPrev={true} SiteTitle='Welcome' >
            <div className='steps-section-content'>

                <div className='steps-with-sidebar-wrapper'>

                    <Row gutter={[16, { xs: 60, md:60, lg: 30 }]}>

                        <Col xxl={{ span: 6, offset: 0, order:1, }} xl={{ span: 8, offset: 0 , order:1,}} lg={{ span: 10, offset: 0, order:1, }} xs={{ span: 24, offset: 0, order:2 }}>
                            <div className="steps-sidebar-wrapper">
                                <div className='sidebar-top-text-cont'>
                                    <div className='sidebar-top-main-text text-center'>
                                        <p className='desc'>“This program has seriously helped me with something I never thought I’d feel comfortable addressing. So thanks for the work you’re doing.”</p>
                                        <span className='pin-info-text'>RMD Member, Texas</span>
                                    </div>
                                    <ul className='info-details-list'>
                                        <li className='info-details-item'>
                                            <div className='icons-img'>
                                                <Image src='/assets/images/usersimg.png' alt='img' width={47.66} height={27.24} />
                                            </div>
                                            <span className='info-details-title'>Medical evaluation and
                                                prescriptions by<br />
                                                U.S.-licensed physicians</span>
                                        </li>
                                        <li className='info-details-item'>
                                            <div className='icons-img'>
                                                <Image src='/assets/images/bi_truck.png' alt='img' width={32} height={31} />
                                            </div>
                                            <span className='info-details-title'>FREE 2-day shipping</span>
                                        </li>
                                        <li className='info-details-item'>
                                            <div className='icons-img'>
                                                <Image src='/assets/images/akar-icons_chat-approve.png' alt='img' width={32} height={32} />
                                            </div>
                                            <span className='info-details-title'>Continued support from your doctor and our care team</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className='sidebar-bottom-text-cont'>
                                    <ul className='info-link-widget'>
                                        <li className='info-link-item'><Link href='/'>CA Privacy Notice</Link></li>
                                        <li className='info-link-item'><Link href='/'>Do Not Sell My Information</Link></li>
                                    </ul>

                                </div>
                            </div>
                        </Col>

                        <Col xxl={{ span: 12, offset: 0, order:2, }} xl={{ span: 14, offset: 0 , order:2,}} lg={{ span: 14, offset: 0, order:2, }} xs={{ span: 24, offset: 0, order:1 }} >
                            <div className="steps-main-content-wrapper">
                                <div className='section-top-wrapperbox text-left'>
                                    <SectionTitle title='Continue with your ED visit.' />
                                    <p className='desc'>
                                        Next, you’ll provide some basic information about yourself, your lifestyle, and your medical history. Your doctor will use this information to evaluate your symptoms and, if appropriate, prescribe medication for treatment.
                                    </p>
                                </div>
                                <Row>
                                    <Col xxl={{ span: 15, offset: 0 }} >
                                        <div className='user-auth-cont-box'>
                                            <p>Already a member? <Link href='/'>Log in and continue</Link></p>
                                            <Button onClick={() => handleGoogleSignin()} className='transparent-button'>
                                                <Image src='/assets/images/google-img.png' alt='img' width={23} height={23} />
                                                Continue with google</Button>
                                            <div className='divider-cont-box'>
                                                <span className='line-shape'></span>
                                                <span>OR</span>
                                                <span className='line-shape'></span>
                                            </div>
                                            <Button onClick={() => handleEmailPasswordSignUp()} className='black-button'><Image src='/assets/images/small-brand-icon.png' alt='img' width={12} height={17} /> Signup with email</Button>
                                        </div>

                                    </Col>
                                </Row>

                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </LayoutWrapper>

    )
}

export default UserAuthWithGoogle