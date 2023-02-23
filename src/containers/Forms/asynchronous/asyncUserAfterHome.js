import React from 'react'
import SectionTitle from 'src/common/Forms/sectionTitle'
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import { Col, Row, Button } from 'antd';
import Image from 'next/image';
import InfoCard from 'src/components/Forms/asynchronous/infocard/infocard';

const AsyncUserAfterHome = () => {

    return (

        <LayoutWrapper SiteLogo={false} NextPage={true} BackToPrev={true} SiteTitle='Welcome' >

            <div className='steps-section-wrapper'>

                <div className='steps-home-section-wrapper'>

                    <div className='step-home-top-wrapper'>
                        <div className='step-home-top-contwrap'>
                            <Row gutter={[0, 16]} align="middle">
                                <Col xxl={{ span: 6, offset: 0 }} >
                                    <div className='step-home-top-cont'>
                                        <h2 className='home-top-box-title'>Hi <span>Mak's</span></h2>
                                        <p className='desc'>thanks for starting your
                                            online visit.</p>
                                    </div>
                                </Col>
                                <Col xxl={{ span: 4, offset: 14 }} >
                                    <Button className='black-button top-home-button'><Image src='/assets/images/small-brand-icon.png' width={12.86} height={17} alt='brand logo' />   <span>Start my visit</span></Button>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div className='step-home-section-titlebox'>
                        <Row justify="start" gutter={[0, 16]}>
                            <Col xxl={{ span: 24, offset: 0 }} >
                                <div className='section-top-wrapperbox text-left'>
                                    <SectionTitle title='Here’s how it works:' />
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className='user-after-home-info-cardbox'>
                       <InfoCard />
                    </div>

                </div>

            </div>
            
        </LayoutWrapper>

    )
}

export default AsyncUserAfterHome