import React from 'react'
import SectionTitle from 'src/common/Forms/sectionTitle'
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import { Col, Row, Button, Checkbox } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { TreatmentPrefDataFour, TreatmentPrefDataThree, TreatmentPrefDataTwo } from 'src/components/Forms/asynchronous/db';
import CheckBoxQuestionSelect from 'src/common/Forms/checkboxQuestion';
import { useState } from 'react';

const TreatMentPreference = () => {
    const [treatment, setTreatValue] = useState(null);
    const router = useRouter();
    const { wizard, name, tab } = router.query;

    const handleUpdateQuery = (wizard, name, tab) => {
        router.push({
            pathname: '/manage_services/started',
            query: { wizard: wizard, name: name, tab: tab },
        });
    };

    const nextStep = (w, n, t) => {
        handleUpdateQuery(w, n, t)
    }
    const onChange = (name, val) => {
        setTreatValue({ ...treatment, [name]: val[0] });
        // setValues({ ...values, [name]: e.target.checked });
        // setTreatValue({ ...treatment, [e.target.name]: e.target.value });
        if (name === "Number_of_uses") {
            nextStep(wizard, "Drugs", 3)
        }
        if (name === "Drugs") {
            nextStep(wizard, "Dosage", 4)
        }
        if (name === "Dosage") {
            nextStep("verifications", "upload_photo", 1)
        }
    }

    console.log(treatment)

    return (

        <LayoutWrapper SiteLogo={false} NextPage={true} BackToPrev={true} SiteTitle='3. Treatment Preference'>
            <div className='steps-section-wrapper'>
                <Row gutter={[0, 16]}>
                    <Col xxl={{ span: 13, offset: 6 }} xl={{ span: 16, offset: 4 }} lg={{ span: 18, offset: 3 }} md={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }}>
                        <div className='steps-progress-section-wrapper'>
                            <div className='steps-progress-treatment-pref'>
                                <ul className='steps-progress-bars'>
                                    <li className='steps-progress-bars-item active'></li>
                                    <li className='steps-progress-bars-item active'></li>
                                    <li className='steps-progress-bars-item active'></li>
                                    <li className='steps-progress-bars-item'></li>
                                </ul>
                                {/* step-1 */}
                                {name === "make_your_request" && <div className='step-progress-steps-titlebox'>
                                    <Row justify="start" gutter={[0, 16]}>
                                        <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                                            <div className='section-top-wrapperbox text-left'>
                                                <SectionTitle title='Treatment Preference' subtitle='make your request' />
                                                <p className='desc'>Tell your doctor about your symptoms and overall health. Your doctor needs this information to determine the most appropriate treatment for you. It's important that you are honest and respond as accurately as possible.</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>}
                                {/* step-2 */}
                                {name === "Number_of_uses" && <div className='step-progress-steps-titlebox'>
                                    <Row justify="start" gutter={[0, 16]}>
                                        <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }} >
                                            <div className='section-top-wrapperbox text-left'>
                                                <SectionTitle title='How many times do you anticipate using the medication for sexual activity, if prescribed?' subtitle='Number of uses' />
                                                <p className='desc'>Tell your doctor about your symptoms and overall health. Your doctor needs this information to determine the most appropriate treatment for you. It's important that you are honest and respond as accurately as possible.</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>}
                                {/* step-3 */}
                                {name === "Drugs" &&
                                    <div className='step-progress-steps-titlebox'>
                                        <Row justify="start" gutter={[0, 16]}>
                                            <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }} >
                                                <div className='section-top-wrapperbox text-left'>
                                                    <SectionTitle title='Do you have a drug preference?' subtitle='Drugs' />
                                                    <p className='desc'>Tell your doctor about your symptoms and overall health. Your doctor needs this information to determine the most appropriate treatment for you. It's important that you are honest and respond as accurately as possible.</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                }
                                {/* step-4 */}
                                {name === "Dosage" &&
                                    <div className='step-progress-steps-titlebox'>
                                        <Row justify="start" gutter={[0, 16]}>
                                            <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }} >
                                                <div className='section-top-wrapperbox text-left'>
                                                    <SectionTitle title='Do you have a dosage preference for slidenafil?' subtitle='Dosage' />
                                                    <p className='desc'>Tell your doctor about your symptoms and overall health. Your doctor needs this information to determine the most appropriate treatment for you. It's important that you are honest and respond as accurately as possible.</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                }
                                <div className='basic-info-input-data-box'>
                                    {/* step-1 */}
                                    {name === "make_your_request" &&
                                        <div className='async-user-medical-question-infobox'>
                                            <div className='medical-question-modalimg text-center'>
                                                <Image src='/assets/images/treatment-pref-modal.png' width={314} height={273} alt='medical question modal image' />
                                            </div>
                                            <Row>
                                                <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                                                    <Button onClick={() => nextStep(wizard,"Number_of_uses", 2)} className='submit-button black-button'>Continue</Button>
                                                </Col>
                                            </Row>

                                        </div>
                                    }
                                    {/* step 2 */}
                                    {name === "Number_of_uses" &&
                                        <div className="question-select-box">
                                            <Checkbox.Group
                                                onChange={(checkedValues) => onChange(name, checkedValues)}
                                                className="radio-group-container question-select"
                                            >
                                                {
                                                    <Row gutter={[0, 25]}>
                                                        {TreatmentPrefDataTwo.map((data) => (
                                                            <CheckBoxQuestionSelect data={data} name='Number_of_uses' />
                                                        ))}
                                                    </Row>
                                                }

                                            </Checkbox.Group>

                                        </div>
                                    }
                                    {/* step-3 */}
                                    {name === "Drugs" &&
                                        <div className="question-select-box">
                                            <Checkbox.Group
                                                onChange={(checkedValues) => onChange(name, checkedValues)}
                                                className="radio-group-container question-select"
                                            >
                                                {
                                                    <Row gutter={[0, 25]}>
                                                        {TreatmentPrefDataThree.map((data) => (
                                                            <CheckBoxQuestionSelect data={data} name="Drugs" />
                                                        ))}
                                                    </Row>
                                                }

                                            </Checkbox.Group>

                                        </div>
                                    }
                                    {/* step-4 */}
                                    {name === "Dosage" &&
                                        <div className="question-select-box">
                                            <Checkbox.Group
                                                onChange={(checkedValues) => onChange(name, checkedValues)}
                                                className="radio-group-container question-select"
                                            >
                                                {
                                                    <Row gutter={[0, 25]}>
                                                        {TreatmentPrefDataFour.map((data) => (
                                                            <CheckBoxQuestionSelect data={data} name="Drugs" />
                                                        ))}
                                                    </Row>
                                                }
                                            </Checkbox.Group>
                                        </div>

                                    }
                                </div>

                            </div>
                        </div>

                    </Col>
                </Row>


            </div>
        </LayoutWrapper>

    )
}

export default TreatMentPreference