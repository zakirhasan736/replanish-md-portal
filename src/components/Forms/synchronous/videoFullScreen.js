import React from 'react'
import Image from 'next/image'
import { Grid } from "antd";
const { useBreakpoint } = Grid;
import { AiOutlineClockCircle } from "react-icons/ai";

const VideoFullScreen = () => {
    const screens = useBreakpoint();
  return (
    <div className='meet-video-main-screen active-maximize'>

    <div className='meet-video-main-screen-wrapper'>

        <div className='video-duration-time'>
            <span className='clock-icons'><AiOutlineClockCircle /></span>
            <span className='video-duration'>00:10</span>
        </div>

        <div className='provider-avatar'><Image src='/icons/forms/provider-avatar.png' width={80} height={80} preview={false} /></div>

        <div className='video-user-settings'>
            <button className='users-access-settings-item'>
            <Image src='/icons/forms/call-end-Icon.svg' width={37.03} height={37} preview={false} /> 
            </button>
            <button className='users-access-settings-item'>
            {screens.md ? (
            <Image src='/icons/forms/maximize-fill.svg' width={37.03} height={37} preview={false} /> 
            ) : (
            <Image src='/icons/forms/maximize.svg' width={37.03} height={37} preview={false} /> 
            )}
            </button>
            <button className='users-access-settings-item'>
            {screens.md ? (
            <Image src='/icons/forms/phone-call-fill.svg' width={37.03} height={37} preview={false} /> 
            ) : (
            <Image src='/icons/forms/phone-call.svg' width={37.03} height={37} preview={false} /> 
            )}
            </button>
            <button className='users-access-settings-item'>
            {screens.md ? (
            <Image src='/icons/forms/video-fill.svg' width={37.03} height={37} preview={false} /> 
            ) : (
            <Image src='/icons/forms/video.svg' width={37.03} height={37} preview={false} /> 
            )}
            </button>
        </div>

    </div>

</div>
  )
}

export default VideoFullScreen
