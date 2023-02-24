import React, { useState } from 'react'
import SectionTitle from 'src/common/Forms/sectionTitle'
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import { Col, Row, Button, Radio } from 'antd';
import { MedicalQuestionData } from 'src/components/Forms/asynchronous/db';
import QuestionSelectItem from 'src/common/Forms/questionSelectItem';

const MedicalQuestionStepTwo = ({ handleStep, currval, StepNext,FillBtnText  }) => {
    const [value, setValue] = useState(null);

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const handleMedicalData = () => {
        //store or set data in a state after that need to update the step value for the next processing
        handleStep(11);
    }
    return (

        <LayoutWrapper SiteLogo={false} handleStep={handleStep} currval={currval} NextPage={true} BackToPrev={true} SiteTitle='2. Medical Questions'>
            <div className='steps-section-wrapper'>
                <div className='steps-progress-section-wrapper'>
                    <div className='stepstwo-progress-medicale-question'>
                        <Row gutter={[0, 16]}>
                            <Col xxl={{ span: 11, offset: 6 }}>
                                <ul className='steps-progress-bars'>
                                    <li className='steps-progress-bars-item active'></li>
                                    <li className='steps-progress-bars-item active'></li>
                                    <li className='steps-progress-bars-item'></li>
                                    <li className='steps-progress-bars-item'></li>
                                </ul>
                            </Col>
                        </Row>
                        <Row gutter={[0, 16]} justify='center'>
                            <Col xxl={{ span: 24, offset: 0 }}>
                                <div className='step-progress-steps-titlebox'>
                                    <Row justify="start" gutter={[0, 16]}>
                                        <Col xxl={{ span: 24, offset: 0 }} >
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
                                <Col xxl={{ span: 12, offset: 6 }}>
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

                                            {StepNext &&
                                                <Button onClick={() => handleMedicalData()} className='trigger-Button black-button'>{FillBtnText}</Button>
                                            }

                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutWrapper>

    )
}

export default MedicalQuestionStepTwo