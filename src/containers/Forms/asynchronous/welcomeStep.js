import React, { useState } from 'react'
import SectionTitle from 'src/common/Forms/sectionTitle'
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import { Col, Row, Radio, Button } from 'antd';
import { QuestionStepTwoEnter } from 'src/components/Forms/asynchronous/db';
import QuestionSelectItem from 'src/common/Forms/questionSelectItem';


const WelcomeStep = ({ handleStep, StepNext, FillBtnText,currval }) => {
  const [value, setValue] = useState(null);
  
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <LayoutWrapper SiteLogo={false} handleStep={handleStep} currval={currval} NextPage={true} BackToPrev={true} SiteTitle='Welcome' BgclassName='is-bg-image'>

      <div className='steps-section-wrapper'>

        <div className='steps-two-wrapper'>
          <Row justify="start" gutter={[0, 20]}>
            <Col xxl={{ span: 24, offset: 0 }} >
              <div className='section-top-wrapperbox text-center'>
                <SectionTitle title='Do you get Erectile dysfunction?' />
              </div>
            </Col>
          </Row>

          <Row justify="start">
            <Col xxl={{ span: 12, offset: 6 }} >
              <div className='steps-section-mainbox'>
                <div className="question-select-box">
                  <Radio.Group
                    onChange={onChange}
                    value={value}
                    size="large"
                    className="radio-group-container question-select"
                  >
                    {
                      <Row gutter={[0, 32]}>
                        {QuestionStepTwoEnter.map((data) => (
                          <QuestionSelectItem data={data} />
                        ))}
                      </Row>
                    }
                  </Radio.Group>

                  {StepNext &&
                    <Button onClick={() => value && handleStep(3)} className='trigger-Button black-button'>{FillBtnText}</Button>
                  }

                </div>
              </div>
            </Col>
          </Row>
        </div>

      </div>

    </LayoutWrapper>

  )
}

export default WelcomeStep