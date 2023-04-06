import React from 'react'
import { Col, Row, Grid } from 'antd';
const { useBreakpoint } = Grid;
import LayoutWrapper from 'src/components/Forms/layoutWrapper'


import UserChatWidget from 'src/components/Forms/synchronous/userChatWidget';
import UserChatWidgetDocumentDrag from 'src/components/Forms/synchronous/userChatWidgetDocumentDrag';

import VideoScreen from 'src/components/Forms/synchronous/videoScreen';
import VideoFullScreen from 'src/components/Forms/synchronous/videoFullScreen';
import ProviderInfo from 'src/common/Forms/providerInfo';

const callOnScreen = () => {
    const screens = useBreakpoint();


    return (
        <div className='meet-call-screen'>
            <LayoutWrapper SiteLogo={false} NextPage={true} MassageOpenBtn={true} SiteTitle='Virtual Meet'>
                <div className='sync-meet-call-on-screen layout-wrapper-with-sidebar'>
                    {screens.md ? (
                        <div className='meet-call-user-screen-box layout-user-screen-box'>
                            <Row>
                                <Col md={6} xs={24}>
                                    <div className='meet-screen-sidebar sidebar-content-wrapper'>
                                        <div className='meet-screen-sidebar-wrap provider-sidebar-wrap'>
                                           <ProviderInfo />
                                            {/* ==============*/}

                                            <div className='meet-users-chat-widget'>
                                                {/*<UserChatWidgetDocumentDrag  />*/}
                                                <UserChatWidget />
                                            </div>

                                        </div>
                                    </div>
                                </Col>

                                <Col md={18} xs={24}>
                                    <div className='desk-meet-video-screen'>
                                       { /*<VideoFullScreen />*/}
                                        <VideoScreen />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    )
                        :
                        (
                            <div className='meet-call-user-screen-box'>
                            
                                <div className='mobo-users-chat-widgets meet-users-chat-widget'>
                                    {/* <UserChatWidget / > */}
                                  </div>

                                <div className='mobo-meet-video-screen'>
                                    <VideoScreen />
                                </div>
                            </div>
                        )
                    }

                </div>


            </LayoutWrapper>
        </div>
    )
}

export default callOnScreen
