import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import LayoutWrapper from 'src/components/Forms/layoutWrapper';
import SectionTitle from 'src/common/Forms/sectionTitle'
import { Button, Col, Row, Checkbox } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import InputField from 'src/common/inputField';

const AuthRequired = () => {

    const router = useRouter();
    const { wizard, name, tab } = router.query;

    const handleUpdateQuery = (wizard = "authentication", name, tab) => {
        router.push({
            pathname: '/manage_services/started',
            query: { wizard: wizard, name: name, tab: tab },
        });
    };

    const handleSignSignup = (wizard, name, method) => {
        switch (name, method) {
            case "ED_visit":
            case "google":
                handleUpdateQuery("dashboard", "welcome", 0);
                break;
            case "ED_visit":
            case "emailpass":
                handleUpdateQuery(wizard, "auth_with_email_pass", 2);
            default:
                break;
        }
    }


    const signUpEmailPass = () => {
        handleUpdateQuery("dashboard", "welcome", 0);
    }

    const onChange = () => { }

    return (
        <LayoutWrapper SiteLogo={false} NextPage={true} BackToPrev={true} SiteTitle='Welcome'>
            <div className='steps-section-content'>

                <div className='steps-with-sidebar-wrapper'>

                    <Row gutter={[16, { xs: 60, md: 60, lg: 30 }]}>

                        <Col xxl={{ span: 6, offset: 0, order: 1, }} xl={{ span: 8, offset: 0, order: 1, }} lg={{ span: 10, offset: 0, order: 1, }} xs={{ span: 24, offset: 0, order: 2 }}>
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

                        <Col xxl={{ span: 12, offset: 0, order: 2, }} xl={{ span: 14, offset: 0, order: 2, }} lg={{ span: 14, offset: 0, order: 2, }} xs={{ span: 24, offset: 0, order: 1 }} >
                            <div className="steps-main-content-wrapper">
                                <div className='section-top-wrapperbox text-left'>
                                    <SectionTitle title='Continue with your ED visit.' />
                                    <p className='desc'>
                                        Next, you’ll provide some basic information about yourself, your lifestyle, and your medical history. Your doctor will use this information to evaluate your symptoms and, if appropriate, prescribe medication for treatment.
                                    </p>
                                </div>
                                <Row>
                                    {
                                        //wizard=email&name=auth_with_email_pass&tab=2
                                        name === "auth_with_email_pass" ?
                                            <Col xxl={{ span: 15, offset: 0 }} xl={{ span: 20, offset: 0 }} lg={{ span: 22, offset: 0 }}>
                                                <div className='async-user-signup-formbox'>
                                                    <form action="post" className='async-user-input-form' >

                                                        <div className='async-input-fild-group'>
                                                            <Row gutter={[9, 20]}>
                                                                <Col xxl={{ span: 12, offset: 0 }} xl={{ span: 12, offset: 0 }} lg={{ span: 12, offset: 0 }} xs={{ span: 24, offset: 0 }} >
                                                                    <InputField
                                                                        placeholder='Legal First name'
                                                                        name='firstName'
                                                                        className='signup-info-fild'
                                                                        type='text'
                                                                        errors='pleas fill the required'
                                                                    />
                                                                </Col>

                                                                <Col xxl={{ span: 12, offset: 0 }} xl={{ span: 12, offset: 0 }} lg={{ span: 12, offset: 0 }} xs={{ span: 24, offset: 0 }} >
                                                                    <InputField
                                                                        placeholder='Legal last name'
                                                                        name='firstName'
                                                                        className='signup-info-fild'
                                                                        type='text'
                                                                        errors='pleas fill the required'
                                                                    />
                                                                </Col>
                                                            </Row>
                                                        </div>

                                                        <div className='async-input-fild-group'>
                                                            <Row>
                                                                <Col lg={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
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
                                                                <Col lg={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                                                                    <InputField
                                                                        placeholder='Create Password'
                                                                        name='password'
                                                                        className='signup-info-fild'
                                                                        type='password'
                                                                        errors='pleas fill the required password'
                                                                    />
                                                                </Col>
                                                            </Row>
                                                        </div>

                                                        <div className='term-condition-info-checkbox'>
                                                            <Row>
                                                                <Col lg={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }} >
                                                                    <Checkbox onChange={onChange}>
                                                                        i agree to <Link href='/'>terms and conditions</Link> and consent to <Link href='/'>telehealth</Link>
                                                                    </Checkbox>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }} >
                                                                    <Button
                                                                        onClick={() => signUpEmailPass()}
                                                                        className='submit-button black-button'>Start my visit</Button>
                                                                </Col>
                                                            </Row>
                                                        </div>

                                                    </form>
                                                </div>
                                            </Col> :
                                            <Col xxl={{ span: 15, offset: 0 }} >
                                                <div className='user-auth-cont-box'>
                                                    <p>Already a member? <Link href='/'>Log in and continue</Link></p>
                                                    <Button onClick={() => handleSignSignup(wizard, name, "google")} className='transparent-button'>
                                                        <Image src='/assets/images/google-img.png' alt='img' width={23} height={23} />
                                                        Continue with google</Button>
                                                    <div className='divider-cont-box'>
                                                        <span className='line-shape'></span>
                                                        <span>OR</span>
                                                        <span className='line-shape'></span>
                                                    </div>
                                                    <Button onClick={() => handleSignSignup(wizard, name, "emailpass")} className='black-button'><Image src='/assets/images/small-brand-icon.png' alt='img' width={12} height={17} /> Signup with email</Button>
                                                </div>

                                            </Col>
                                    }
                                </Row>

                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </LayoutWrapper>
    )
}

export default AuthRequired








