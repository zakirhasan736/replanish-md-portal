import React, { useState } from 'react'
import SectionTitle from 'src/common/Forms/sectionTitle'
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import { Col, Row, Button, Radio } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MedicalQuestionData } from 'src/components/Forms/asynchronous/db';
import QuestionSelectItem from 'src/common/Forms/questionSelectItem';
import InputField from 'src/common/inputField';

const MedicalQuestions = () => {
    const [value, setValue] = useState(1);
    const router = useRouter();
    const { wizard, name, tab } = router.query;

    const handleUpdateQuery = (wizard, name, tab) => {
        router.push({
            pathname: '/manage_services/started',
            query: { wizard: wizard, name: name, tab: tab },
        });
    };

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const handleNext = () => {
        handleUpdateQuery(wizard, "news_letter", 2)
    }

    const handleMedicalData = () => {
        handleUpdateQuery("Treatment_Preference", "make_your_request", 1)
    }

    return (

        <LayoutWrapper SiteLogo={false} NextPage={true} BackToPrev={true} SiteTitle='2. Medical Questions'>
            <div className='steps-section-wrapper'>
                <Row gutter={[0, 16]}>
                    <Col xxl={{ span: 11, offset: 6 }} xl={{ span: 16, offset: 4 }} lg={{ span: 18, offset: 3 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                        <div className='steps-progress-section-wrapper'>
                            <ul className='steps-progress-bars'>
                                <li className='steps-progress-bars-item active'></li>
                                <li className='steps-progress-bars-item active'></li>
                                <li className='steps-progress-bars-item'></li>
                                <li className='steps-progress-bars-item'></li>
                            </ul>

                            {name === "start_with_health_talk" && <div className='step-progress-steps-titlebox'>
                                <Row justify="start" gutter={[0, 16]}>
                                    <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }} >
                                        <div className='section-top-wrapperbox text-left'>
                                            <SectionTitle title='Medical Questions' subtitle='LET’S TALK ABOUT YOUR HEALTH' />
                                            <p className='desc'>Tell your doctor about your symptoms and overall health. Your doctor needs this information to determine the most appropriate treatment for you. It's important that you are honest and respond as accurately as possible.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>}
                            {name === "start_with_health_talk" &&
                                <div className='basic-info-input-data-box'>
                                    <div className='async-user-medical-question-infobox'>
                                        <div className='medical-question-modalimg text-center'>
                                            <Image src='/assets/images/md-question-modal.png' width={307.28} height={316.7} alt='medical question modal image' />
                                        </div>
                                        <Row>
                                            <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }} >
                                                <Button onClick={() => handleUpdateQuery("medical_questions", "testosterone", 1)} className='submit-button black-button'>Continue</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>}

                            {name === "testosterone" &&
                                <>
                                    <Row gutter={[0, 16]} justify='center'>
                                        <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                                            <div className='step-progress-steps-titlebox'>
                                                <Row justify="start" gutter={[0, 16]}>
                                                    <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }} >
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
                                            <Col xxl={{ span: 12, offset: 6 }} xl={{ span: 12, offset: 6 }} lg={{ span: 18, offset: 3 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                                                <div className='medical-question-itembox'>
                                                    <div className="question-select-box">
                                                        <Radio.Group
                                                            onChange={onChange}
                                                            value={value}
                                                            size="large"
                                                            className="radio-group-container question-select"
                                                        >
                                                            {
                                                                <Row gutter={[0, 32]}>
                                                                    {MedicalQuestionData.map((data) => (
                                                                        <QuestionSelectItem data={data} />
                                                                    ))}
                                                                </Row>
                                                            }

                                                        </Radio.Group>
                                                        {
                                                            <Button onClick={() => handleNext()} className='trigger-Button black-button'>Next</Button>
                                                        }
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </>
                            }
                        </div>

                    </Col>

                    {name === "news_letter" && <div className='step-progress-steps-titlebox'>
                        <Row justify="start" gutter={[0, 16]}>
                            <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                                <div className='section-top-wrapperbox text-left'>
                                    <SectionTitle title='No problem, we know how busy you are.' />
                                    <p className='desc'>
                                        Enter your email below and we'll send you the nearest and most affordable locations in your area so you can see a healthcare provider. After, come on back and a physician will review your information and, if appropriate, write a prescription to your pharmacy of choice.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>}
                    {name === "news_letter" && <div className='basic-info-input-data-box'>
                        <div className='async-user-medical-question-infobox'>
                            <form className='async-user-input-form'>

                                <div className='async-input-fild-group'>
                                    <Row>
                                        <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
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
                                        <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                                            <textarea placeholder='Comments' className='medical-qa-text-area'></textarea>
                                        </Col>
                                    </Row>
                                </div>

                                <Row>
                                    <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                                        <Button onClick={() => handleMedicalData()} className='submit-button black-button'>Submit</Button>
                                    </Col>
                                </Row>

                            </form>
                        </div>
                    </div>}
                </Row>
            </div>
        </LayoutWrapper>
    )
}

export default MedicalQuestions