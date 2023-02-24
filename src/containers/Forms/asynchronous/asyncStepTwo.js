import React from 'react'
import SectionTitle from 'src/common/Forms/sectionTitle'
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import { Col, Row } from 'antd';
import SelectQuestion from 'src/components/Forms/asynchronous/questionselect';

const AsyncStepTwo = () => {


  return (
    <LayoutWrapper SiteLogo={false} NextPage={true} BackToPrev={true} SiteTitle='Welcome' BgclassName='is-bg-image'>

      <div className='steps-section-wrapper'>

        <div className='steps-two-wrapper'>
          <Row justify="start"  gutter={[0, 20]}>
            <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }}>
              <div className='section-top-wrapperbox text-center'>
                <SectionTitle title='Do you get Erectile dysfunction?'  />
              </div>
            </Col>
          </Row>

          <Row justify="start">
            <Col xxl={{ span: 12, offset: 6 }} xl={{ span: 12, offset: 6 }} lg={{ span: 12, offset: 6 }} >
            <div className='steps-section-mainbox'>
              <SelectQuestion StepNext={true} FillBtnText="Next" StepQuestionData={'StepTwoEnter'} />
            </div>
            </Col>
          </Row>

        </div>

      </div>
      
    </LayoutWrapper>

  )
}

export default AsyncStepTwo