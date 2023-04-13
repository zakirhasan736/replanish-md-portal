import React, { useState } from 'react';
import SectionTitle from 'src/common/Forms/sectionTitle';
import LayoutWrapper from 'src/components/Forms/layoutWrapper';
import { Col, Row, Button, Radio } from 'antd';
import QuestionSelectItem from 'src/common/Forms/questionSelectItem';
import { useRouter } from 'next/router';
import { question_db,title_db } from 'src/components/Forms/asynchronous/db';

const ErectileDysfunction = ({ handleStep, StepNext }) => {
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
    setValue(e.target.value);
    if (!value) return
    switch (name) {
      case "ED_problems":
        handleUpdateQuery(wizard,"ED_symptoms", 2);
        break;
      case "ED_symptoms":
        handleUpdateQuery(wizard,"Morning_ED", 3);
      case "Morning_ED":
        handleUpdateQuery("authentication","ED_visit", 1);
        break;
      default:
        break;
    }
  };

  /*
Erectile Dysfunction

1.Erectile issues? (or ED problems?)
2.ED symptoms?
3.Morning ED? (or morning wood?)
  
  */

  //1,2,3

  return (

    <LayoutWrapper SiteLogo={true} NextPage={false} BackToPrev={false} BgclassName='is-bg-image' bottomHeaderName='bottom-header-home'>

      <div className='steps-section-wrapper'>

        <div className='steps-one-wrapper'>

          <Row justify="start" gutter={[0, 20]}>
            <Col xxl={{ span: 18, offset: 4 }} xl={{ span: 18, offset: 4 }} lg={{ span: 18, offset: 3 }} >
              <div className='section-top-wrapperbox'>
                {
                  title_db.filter((items => items.name === name)).map(({ name, text }) => (
                    <SectionTitle title={text} subtitle={`${name === "ED_problems" ? "LET’S GET STARTED" : ""}`} />
                  ))
                }
              </div>
            </Col>
          </Row>

          <Row justify="start">
            <Col xxl={{ span: 12, offset: 6 }} xl={{ span: 12, offset: 6 }} lg={{ span: 18, offset: 3 }}>
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
                        {question_db.filter((items => items.name === name)).map((data) => (
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

export default ErectileDysfunction

