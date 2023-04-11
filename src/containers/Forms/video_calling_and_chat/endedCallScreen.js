import React from 'react'
import Image from 'next/image'
import { Col, Row } from "antd";
import { FiExternalLink } from "react-icons/fi";
import LayoutWrapper from 'src/components/Forms/layoutWrapper'

const endedCallScreen = () => {
   return (
      <div className='meet-call-screen'>
         <LayoutWrapper SiteLogo={false} NextPage={true} SiteTitle='Replenished MD Virtual Meet'>
            <div className='sync-ended-call-screen-wrapper section-container'>
               <Row justify="center">
                  <Col lg={14} md={24} xs={24} >
                     <div className='sync-ended-call-top-infobox'>
                        <div className='ended-call-top-infoicon text-center'><Image className='heart-icon' src='/icons/forms/4837-heart.png' width={212} height={113.22} preview={false} /></div>
                        <h4 className='title'>The call has been  ended</h4>
                        <p className='desc'>Soon you’ll receive feedback mail.</p>
                     </div>
                     <div className='sync-ended-call-main-infobox'>
                        <div className='info-article-icon'><Image className='article-icon' src='/icons/forms/help-article.svg' width={32} height={32} preview={false} /></div>
                        <h2 className='help-article-title'>Recommended topics for you to read on ED</h2>
                        <ul className='help-article-info-lists'>
                           <li className='help-info-article-item'>
                              <p className='desc-info'>Tell us about your symptoms, medical history, and lifestyle. The online visit typically takes around 15-20 minutes to complete.  <a href='/' className='external-links' ><FiExternalLink /></a></p>
                           </li>
                           <li className='help-info-article-item'>
                              <p className='desc-info'>Tell us about your symptoms, medical history, and lifestyle. The online visit typically takes around 15-20 minutes to complete.  <a href='/' className='external-links' ><FiExternalLink /></a></p>
                           </li>
                           <li className='help-info-article-item'>
                              <p className='desc-info'>Tell us about your symptoms, medical history, and lifestyle. The online visit typically takes around 15-20 minutes to complete.  <a href='/' className='external-links' ><FiExternalLink /></a></p>
                           </li>
                        </ul>
                     </div>
                  </Col>
               </Row>
            </div>
         </LayoutWrapper>
      </div>
   )
}

export default endedCallScreen