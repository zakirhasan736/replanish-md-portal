import React from 'react'
import Image from 'next/image'
import { AiFillStar,AiOutlineClockCircle } from "react-icons/ai";
const ProviderInfo = ({ExtraInfo}) => {
  return (
    <div className='provider-info-wrapper-box'>
      <div className='provider-info-box'>
        <div className='provider-user-image'>
          <Image className='user-image' src='/images/forms/meet-call-user.png' width={94} height={94} preview={false} />
        </div>
        <div className='users-info-cont'>
          <h4 className='user-name'>Alex Martinez</h4>
          <p className='call-info-text'>Waiting for provider
            to join</p>
        </div>
      </div>
      { /* details info*/}
     {ExtraInfo && 
      <div className='provider-extra-info-box'>
      <div className='provider-details-infobox'>
      <div className='provider-ratings-info'>
          <span className='rate-star'><AiFillStar /></span>
          <span className='rating-point'>4.8</span>
          <span className='number-review'>(<span className='count'>57</span>)</span>
      </div>
      <p className='description-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros netus ultricies amet fusce vel. Tortor orci, massa enim nunc ultrices netus integer sed lorem.</p>
      <div className='duretion-details'>
        <h6 className='duretion-title'>Details</h6>
        <div className='time-duretionbox'><span className='clock-icons'><AiOutlineClockCircle /></span> 30 <span>Minutes</span></div>
      </div>
  </div>
  </div>
    }
    </div>
  )
}

export default ProviderInfo
