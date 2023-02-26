import React, { useState } from 'react';
import SectionTitle from 'src/common/Forms/sectionTitle';
import LayoutWrapper from 'src/components/Forms/layoutWrapper';
import { Col, Row , Button, Radio} from 'antd';
import { QuestionStepEnter } from 'src/components/Forms/asynchronous/db';
import PropTypes from "prop-types";
import QuestionSelectItem from 'src/common/Forms/questionSelectItem';

const StartedStep = ({ handleStep,StepNext }) => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    setValue(e.target.value);
    handleStep(2);
  };

  return (

    <LayoutWrapper SiteLogo={true} NextPage={false} BackToPrev={false} BgclassName='is-bg-image' bottomHeaderName='bottom-header-home'>

      <div className='steps-section-wrapper'>

        <div className='steps-one-wrapper'>

          <Row justify="start" gutter={[0, 20]}>
            <Col xxl={{ span: 18, offset: 4 }} xl={{ span: 18, offset: 4 }} lg={{ span: 18, offset: 3 }} >
              <div className='section-top-wrapperbox'>
                <SectionTitle title='Do you ever have a problem Erectile dysfunction?' subtitle='LET’S GET STARTED' />
              </div>
            </Col>
          </Row>

          <Row justify="start">
            <Col xxl={{ span: 12, offset: 6 }}   xl={{ span: 12, offset: 6 }}  lg={{ span: 18, offset: 3 }}>
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
                        {QuestionStepEnter.map((data) => (
                          <QuestionSelectItem data={data} />
                        ))}
                      </Row>
                    }
                  </Radio.Group>

                  {StepNext &&
                    <Button className='trigger-Button black-button'>{FillBtnText}</Button>
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

export default StartedStep

