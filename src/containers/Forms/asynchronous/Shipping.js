import React, { useState } from 'react'
import SectionTitle from 'src/common/Forms/sectionTitle'
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import { Button, Col, Row } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import InputField from 'src/common/inputField';
import { useRouter } from 'next/router';
import { IoMdClose } from "react-icons/io";
import { MdEdit } from "react-icons/md";

const Shipping = () => {
    const [OpenConfimationPopup, setOpenConfimationPopup] = useState(false);

    const router = useRouter();
    const { wizard, name, tab } = router.query;

    const handleUpdateQuery = (wizard, name, tab) => {
        router.push({
            pathname: '/manage_services/started',
            query: { wizard: wizard, name: name, tab: tab },
        });
    };
    const handleSubmitAndContinue = () => {
        //Review treatment and pay
        handleUpdateQuery(wizard, "Review_treatment_and_pay", 2)
    }
    return (
        <LayoutWrapper SiteLogo={false} BackToPrev={true} SiteTitle='Checkout'>
            <div className='steps-section-content'>

                <div className='steps-with-sidebar-wrapper sidebar-checkout-wrap'>
                    <div className='steps-checkout-wrapper steps-checkout-one'>

                        <Row gutter={[0, 16]}>

                            <Col xxl={{ span: 6, offset: 0, order: 1 }} xl={{ span: 8, offset: 0, order: 1 }} lg={{ span: 10, offset: 0, order: 1 }} md={{ span: 24, offset: 0, order: 2 }} xs={{ span: 24, offset: 0, order: 2 }}>
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

                            <Col xxl={{ span: 11, offset: 0, order: 2 }} xl={{ span: 14, offset: 0, order: 2 }} lg={{ span: 14, offset: 0, order: 2 }} md={{ span: 24, offset: 0, order: 1 }} xs={{ span: 24, offset: 0, order: 1 }}>
                                <div className='steps-progress-section-wrapper'>
                                    <ul className='steps-progress-bars'>
                                        <li className='steps-progress-bars-item active'></li>
                                        <li className='steps-progress-bars-item active'></li>
                                        <li className='steps-progress-bars-item active'></li>
                                        <li className='steps-progress-bars-item active'></li>
                                    </ul>
                                    <div className='step-progress-steps-titlebox'>
                                        <Row justify="start" gutter={[0, 16]}>
                                            <Col xxl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}  >
                                                <div className='section-top-wrapperbox text-left'>
                                                    <SectionTitle title='Shipping Info' />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    {name === "information" &&
                                        <div className='basic-info-input-data-box'>
                                            <form className='async-user-input-form'>
                                                <div className='async-input-fild-group'>
                                                    <Row>
                                                        <Col xxl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}  >
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
                                                        <Col xxl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}  >
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
                                                        <Col xxl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}  >
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
                                                    <Row gutter={[11, 18]}>
                                                        <Col xxl={{ span: 12, offset: 0 }} xl={{ span: 12, offset: 0 }} lg={{ span: 12, offset: 0 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }} >
                                                            <InputField
                                                                placeholder='State'
                                                                name='phone'
                                                                className='signup-info-fild'
                                                                type='phone'
                                                                errors='pleas fill the required password'
                                                            />
                                                        </Col>
                                                        <Col xxl={{ span: 12, offset: 0 }} xl={{ span: 12, offset: 0 }} lg={{ span: 12, offset: 0 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }} >
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
                                                    <Col xxl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}  >
                                                        <Button onClick={() => handleSubmitAndContinue()} className='submit-button black-button'>Save and continue</Button>
                                                        <div className='privecy-info-pin-text' >  <Image src='/assets/images/bxs_lock-alt.png' width={24} height={24} alt='lock icons' />  <p className='info-text-desc'>256-BIT TLS SECURITY</p></div>
                                                    </Col>
                                                </Row>

                                            </form>

                                        </div>
                                    }
                                    {
                                        name === "Review_treatment_and_pay" &&
                                        <div className='basic-info-input-data-box'>
                                            <div className='card-info-box'>

                                                <div className='Card-info-top'>
                                                    <h6 className='card-box-title'>Credit or debit card</h6>
                                                    <div className='lock-icon-img' ><Image src='/assets/images/bxs_lock-alt.png' width={24} height={24} alt='lock icons' /></div>
                                                </div>

                                                <div className='card-group-img' ><Image src='/assets/images/payment-methode-groupimg.png' width={235.2} height={18.09} alt='cards icons' /></div>

                                                <div className='card-input-fild-group'>
                                                    <input className='card-number' placeholder='Card number' />
                                                    <div className='date-security'>
                                                        <input className='exp-date' placeholder='mm / yy' />
                                                        <input className='cc-number' placeholder='cvc' />
                                                    </div>
                                                </div>

                                            </div>

                                            <Row>
                                                <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}  >
                                                    <div className='info-text-box'>
                                                        <p className='info-text-desc'>
                                                            By clicking PAY $0 TODAY you agree that, if prescribed, you will be charged $57 less any credits available in your account at the time your payment method is charged for your first shipment, and $72 every 3 months thereafter until you cancel or your prescription expires. You can cancel your plan anytime by logging into your account.
                                                            Read more
                                                        </p>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}  >
                                                    <Button onClick={() => setOpenConfimationPopup(true)} className='submit-button black-button'>Pay $0 Today</Button>
                                                    <div className='privecy-info-pin-text' >  <Image src='/assets/images/bxs_lock-alt.png' width={24} height={24} alt='lock icons' />  <p className='info-text-desc'>256-BIT TLS SECURITY</p></div>
                                                </Col>
                                            </Row>
                                        </div>
                                    }
                                </div>
                            </Col>
                            {name === "Review_treatment_and_pay" &&
                                <Col xxl={{ span: 7, offset: 0, order: 3 }} xl={{ span: 7, offset: 0, order: 3 }} lg={{ span: 7, offset: 0, order: 3 }} md={{ span: 24, offset: 0, order: 2 }} xs={{ span: 24, offset: 0, order: 2 }}>
                                    <div className="steps-sidebar-wrapper right-sidebar-wrapper">
                                        <div className='sidebar-top-text-cont'>
                                            <div className='sidebar-top-main-text'>
                                                <h6 className='sidebar-top-title'>Your shipping frequency</h6>
                                            </div>

                                            <div className='quarterly-plane-box'>
                                                <h5 className='topic-title'>Quarterly plan</h5>
                                                <p className='topic-desc'>Receive a 3 months supply and get billed every 3 months.
                                                    Cancel your plan at anytime,</p>
                                            </div>

                                        </div>

                                        <div className='my-plane-cont-box'>
                                            <h5 className='topic-title'>Your Plan</h5>
                                            <div className='product-info-box'>
                                                <div className='product-info-left'>
                                                    <Image src='/assets/images/checkout-product-img.png' width={64.59} height={56.24} alt='checkout product image' />
                                                    <div className='product-details-info'>
                                                        <h6 className='bodytitle'>Sildenafil13+</h6>
                                                        <p className='bodytext'>60mg</p>
                                                        <p className='bodytext'>4 x Month ($6 ea.)</p>
                                                        <p className='bodytext'>3 Months supply</p>
                                                        <Button className='edit-button'><MdEdit /> edit</Button>
                                                    </div>
                                                </div>
                                                <div className='product-info-right'>
                                                    <span className='product-price'>$ 72 /3 mo</span>
                                                </div>
                                            </div>
                                            <ul className='product-price-info'>
                                                <li className='price-info-list'>
                                                    <p className='bodytext'>First order promo</p>
                                                    <span className='bodytext charge-price'>-$15</span>
                                                </li>
                                                <li className='price-info-list'>
                                                    <p className='bodytext'>First order promo</p>
                                                    <span className='bodytext offer-text'>Free</span>
                                                </li>
                                                <li className='price-info-list'>
                                                    <p className='bodytext'>First order promo</p>
                                                    <span className='bodytext offer-text'>Free</span>
                                                </li>
                                            </ul>
                                            <ul className='product-price-info sub-total'>
                                                <li className='price-info-list'>
                                                    <p className='bodytext'>Total due if prescribed</p>
                                                    <span className='bodytext charge-price'>$57</span>
                                                </li>
                                            </ul>
                                            <ul className='product-price-info due-total'>
                                                <li className='price-info-list'>
                                                    <p className='bodytext'>Due today</p>
                                                    <span className='bodytext charge-price'>$0</span>
                                                </li>
                                            </ul>
                                            <span className='details-link' ><Link href='/'>When am i charged?</Link></span>
                                        </div>

                                        <div className='sidebar-bottom-text-cont'>
                                            <div className='sidebar-top-main-text'>
                                                <h6 className='sidebar-top-title'>Popular add-ons</h6>
                                            </div>

                                            <div className='support-plane-box'>
                                                <h5 className='topic-title'>Testosterone support</h5>
                                                <span className='priod-of-payment'>$87 / 3 Months</span>
                                                <p className='topic-desc'>A daily dietary supplement to support male virlity and your body’s natural testosterone production.</p>
                                                <div className='plan-button-box'>
                                                    <Button className='black-button'>Add to plan</Button>
                                                    <Button className='link-btn-style'>Learn more</Button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </Col>
                            }
                        </Row>
                    </div>
                </div>
                { /* ========popUp box======== */}
                {OpenConfimationPopup && <div className='popup-widgets-wrapper'>
                    <div className='popup-widget-main'>
                        <button className='pop-close-btn'><IoMdClose /></button>
                        <div className='popup-main-content-box'>
                            <div className='check-mark-icon-box'>
                                <Image src='/icons/forms/check-mark.svg' className='check-mark-icon' width={106} height={106} prefix={false} preview={false} />
                            </div>
                            <h2 className='popup-main-title'>Your requested has been submited</h2>
                            <p className='popup-main-desc'>You will be notified by mail and sms once the best provider has been selected for your service. <span>This usealy takes upto 2 hours.</span></p>
                            <div className='popup-main-btn-box text-center'>
                                <span className='popup-pin-text'>Know what is best for you?</span>
                                <button onClick={() => router.push("/manage_services/concierge?wizard=1&tab=ConciergeHome")} className='action-button black-button'>Select your provider</button>
                            </div>
                        </div>

                    </div>
                </div>}
            </div>
        </LayoutWrapper>

    )
}

export default Shipping