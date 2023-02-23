import React from 'react'
import SectionTitle from 'src/common/Forms/sectionTitle'
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import { Col, Row } from 'antd';
import SelectQuestion from 'src/components/Forms/asynchronous/questionselect';

const index = () => {

  return (
    
    <LayoutWrapper SiteLogo={true} NextPage={false} BackToPrev={false} BgclassName='is-bg-image'>
    
      <div className='steps-section-wrapper'>

        <div className='steps-one-wrapper'>
        
          <Row justify="start" gutter={[0, 20]}>
            <Col xxl={{ span: 18, offset: 4 }} >
              <div className='section-top-wrapperbox'>
                <SectionTitle title='Do you ever have a problem Erectile dysfunction?' subtitle='LET’S GET STARTED' />
              </div>
            </Col>
          </Row>

          <Row justify="start">
            <Col xxl={{ span: 12, offset: 6 }} >
            <div className='steps-section-mainbox'>
              
            <SelectQuestion StepNext={false} StepQuestionData={'StepEnter'} />

            </div>
            </Col>
          </Row>

        </div>

      </div>

    </LayoutWrapper>

  )
}

export default index

