import React from 'react'
import SectionTitle from 'src/common/Forms/sectionTitle'
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import { Button, Col, Row, Checkbox } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import InputField from 'src/common/inputField';

const SignupByEmailPassword = ({ handleStep, currval ,isgoogle}) => {
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    const handleGotoDashboard = () => {
        //write your logic for the dashboard after completing, need to update step()
        handleStep(6)
    }
    return (
        <LayoutWrapper SiteLogo={false} handleStep={handleStep} currval={currval} NextPage={true} BackToPrev={true} isgoogle={false} SiteTitle='Welcome'>
            <div className='steps-section-content'>

                <div className='steps-with-sidebar-wrapper'>

                    <Row gutter={[30, 16]}>

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

                        <Col xxl={{ span: 12, offset: 0 }} >
                            <div className="steps-main-content-wrapper">
                                <div className='section-top-wrapperbox user--signup text-left'>
                                    <SectionTitle title='Continue with your ED visit.' />
                                    <p className='desc'>
                                        Next, you’ll provide some basic information about yourself, your lifestyle, and your medical history. Your doctor will use this information to evaluate your symptoms and, if appropriate, prescribe medication for treatment.
                                    </p>
                                </div>
                                <Row>
                                    <Col xxl={{ span: 15, offset: 0 }} >
                                        <div className='async-user-signup-formbox'>
                                            <form action="post" className='async-user-input-form' >

                                                <div className='async-input-fild-group'>
                                                    <Row gutter={[9, 0]}>
                                                        <Col xxl={{ span: 12, offset: 0 }} >
                                                            <InputField
                                                                placeholder='Legal First name'
                                                                name='firstName'
                                                                className='signup-info-fild'
                                                                type='text'
                                                                errors='pleas fill the required'
                                                            />
                                                        </Col>

                                                        <Col xxl={{ span: 12, offset: 0 }} >
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
                                                        <Col xxl={{ span: 24, offset: 0 }} >
                                                            <Checkbox onChange={onChange}>
                                                                i agree to <Link href='/'>terms and conditions</Link> and consent to <Link href='/'>telehealth</Link>
                                                            </Checkbox>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col xxl={{ span: 24, offset: 0 }} >
                                                            <Button
                                                                onClick={() => handleGotoDashboard()}
                                                                className='submit-button black-button'>Start my visit</Button>
                                                        </Col>
                                                    </Row>
                                                </div>

                                            </form>
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

export default SignupByEmailPassword