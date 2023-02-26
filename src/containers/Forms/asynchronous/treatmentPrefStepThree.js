import React,{useState} from 'react'
import SectionTitle from 'src/common/Forms/sectionTitle'
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import { Col, Row,Checkbox } from 'antd';
import { TreatmentPrefDataThree } from 'src/components/Forms/asynchronous/db';
import CheckBoxQuestionSelect from 'src/common/Forms/checkboxQuestion';

const TreatmentPrefStepThree = ({ handleStep, currval }) => {

    const [value, setvalue] = useState(null);

    const onChange = (checkedValues) => {
        setvalue(checkedValues);
        handleSubmitData()
    };
    const handleSubmitData = () => {
        //handle input field data afte that need to update step value
        handleStep(15)
    }
    return (

        <LayoutWrapper SiteLogo={false} currval={currval} handleStep={handleStep} NextPage={true} BackToPrev={true} SiteTitle='3. Treatment Preference'>
            <div className='steps-section-wrapper'>
                <Row gutter={[0, 16]}>
                    <Col xxl={{ span: 12, offset: 6 }} xl={{ span: 16, offset: 4 }} lg={{ span: 18, offset: 3 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0}}>
                        <div className='steps-progress-section-wrapper'>
                        <div className='steps-progress-treatment-prefthree'>
                            <ul className='steps-progress-bars'>
                                <li className='steps-progress-bars-item active'></li>
                                <li className='steps-progress-bars-item active'></li>
                                <li className='steps-progress-bars-item active'></li>        
                                <li className='steps-progress-bars-item'></li>
                            </ul>
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

                            <div className="question-select-box">
                                    <Checkbox.Group
                                        onChange={onChange}

                                        className="radio-group-container question-select"
                                    >
                                        {
                                            <Row gutter={[0, 25]}>
                                                {TreatmentPrefDataThree.map((data) => (
                                                    <CheckBoxQuestionSelect data={data} />
                                                ))}
                                            </Row>
                                        }

                                    </Checkbox.Group>

                                </div>

                        </div>
                        </div>

                    </Col>
                </Row>


            </div>
        </LayoutWrapper>

    )
}

export default TreatmentPrefStepThree