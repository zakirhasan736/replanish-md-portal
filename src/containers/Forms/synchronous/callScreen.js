import React from 'react'
import Image from 'next/image'
import LayoutWrapper from 'src/components/Forms/layoutWrapper'

const callScreen = () => {
  return (
    <div className='meet-call-screen'>
      <LayoutWrapper SiteLogo={false} NextPage={true} SiteTitle='Virtual Meet' BgclassName='is-bg-image'>
        <div className='sync-meet-call-screen'>
          <div className='sync-meet-users-info-box'>
            <div className='meet-call-user-image'>
              <Image className='user-image' src='/images/forms/meet-call-user.png' width={94} height={94} preview={false} />
            </div>
            <div className='users-info-cont'>
              <h4 className='user-name'>Alex Martinez</h4>
              <p className='call-info-text'>Waiting for provider
                to join</p>
            </div>
          </div>

          <div className='sync-users-settings-box'>
            <button className='users-settings-item'><Image src='/icons/forms/call-end-Icon.svg' width={37} height={37} preview={false} /></button>
            <button className='users-settings-item'><Image src='/icons/forms/maximize.svg' width={37} height={37} preview={false} /></button>
            <button className='users-settings-item'><Image src='/icons/forms/phone-call.svg' width={37} height={37} preview={false} /></button>
            <button className='users-settings-item'><Image src='/icons/forms/video.svg' width={37} height={37} preview={false} /></button>
          </div>

        </div>
      </LayoutWrapper>
    </div>
  )
}

export default callScreen