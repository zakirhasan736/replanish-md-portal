import React from 'react'
import SectionTitle from 'src/common/Forms/sectionTitle'
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import { Button, Col, Row } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import InputField from 'src/common/inputField';

const CheckoutSTepsOne = ({ handleStep, currval }) => {
    const handleSubmitAndContinue = () => {
        //write the code for hanlde input value before go to next process then update the stepvalue
        handleStep(19)
    }
    return (
        <LayoutWrapper SiteLogo={false} handleStep={handleStep} currval={currval} NextPage={true} BackToPrev={true} SiteTitle='Checkout'>
            <div className='steps-section-content'>

                <div className='steps-with-sidebar-wrapper sidebar-checkout-wrap'>
                    <div className='steps-checkout-wrapper steps-checkout-one'>

                        <Row gutter={[0, 16]}>

                            <Col xxl={{ span: 6, offset: 0 }} >
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

                            <Col xxl={{ span: 11, offset: 0 }}>
                                <div className='steps-progress-section-wrapper'>
                                    <ul className='steps-progress-bars'>
                                        <li className='steps-progress-bars-item active'></li>
                                        <li className='steps-progress-bars-item active'></li>
                                        <li className='steps-progress-bars-item active'></li>
                                        <li className='steps-progress-bars-item active'></li>
                                    </ul>
                                    <div className='step-progress-steps-titlebox'>
                                        <Row justify="start" gutter={[0, 16]}>
                                            <Col xxl={{ span: 24, offset: 0 }} >
                                                <div className='section-top-wrapperbox text-left'>
                                                    <SectionTitle title='Shipping Info' />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className='basic-info-input-data-box'>


                                        <form action="post" className='async-user-input-form'>



                                            <div className='async-input-fild-group'>
                                                <Row>
                                                    <Col xxl={{ span: 24, offset: 0 }} >
                                                        <InputField
                                                            placeholder='Street address'
                                                            name='text'
                                                            className=' signup-info-fild'
                                                            type='text'
                                                            errors='pleas fill the required email'
                                                        />
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className='async-input-fild-group'>
                                                <Row>
                                                    <Col xxl={{ span: 24, offset: 0 }} >
                                                        <InputField
                                                            placeholder='address 2'
                                                            name='text'
                                                            className='signup-info-fild'
                                                            type='text'
                                                            errors='pleas fill the required password'
                                                        />
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className='async-input-fild-group'>
                                                <Row>
                                                    <Col xxl={{ span: 24, offset: 0 }} >
                                                        <InputField
                                                            placeholder='City'
                                                            name='text'
                                                            className='signup-info-fild'
                                                            type='text'
                                                            errors='pleas fill the required password'
                                                        />
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className='async-input-fild-group'>
                                                <Row gutter={[11, 0]}>
                                                    <Col xxl={{ span: 12, offset: 0 }} >
                                                        <InputField
                                                            placeholder='State'
                                                            name='phone'
                                                            className='signup-info-fild'
                                                            type='phone'
                                                            errors='pleas fill the required password'
                                                        />
                                                    </Col>
                                                    <Col xxl={{ span: 12, offset: 0 }} >
                                                        <InputField
                                                            placeholder='Zipcode'
                                                            name='phone'
                                                            className='signup-info-fild'
                                                            type='phone'
                                                            errors='pleas fill the required password'
                                                        />
                                                    </Col>
                                                </Row>
                                            </div>
                                            <Row>
                                                <Col xxl={{ span: 24, offset: 0 }} >
                                                    <Button onClick={() => handleSubmitAndContinue()} className='submit-button black-button'>Save and continue</Button>
                                                    <div className='privecy-info-pin-text' >  <Image src='/assets/images/bxs_lock-alt.png' width={24} height={24} alt='lock icons' />  <p className='info-text-desc'>256-BIT TLS SECURITY</p></div>
                                                </Col>
                                            </Row>

                                        </form>

                                    </div>

                                </div>

                            </Col>


                        </Row>

                    </div>
                </div>

            </div>
        </LayoutWrapper>

    )
}

export default CheckoutSTepsOne