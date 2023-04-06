import React from 'react'
import EventIcon from '../../../common/EventIcon';
import { Upload, Button, Grid, Input } from 'antd';
const { useBreakpoint } = Grid;
const UserChatWidgetDocumentDrag = () => {
    const screens = useBreakpoint();

    const suffix = (
        <div className='attachment-wrap'>
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader document-attachment-item"
                showUploadList={false}
            >
                <EventIcon className="bg-light document-attachment-icon" icon="/icons/forms/attachment.svg" />
            </Upload>

            <Button className="btn-green send-massage-btn" shape="circle">
                <img src='/icons/forms/send-icon.svg' />
            </Button>
        </div>
    );

    const prefix = (
        <div className='emoji-btn-wrap'>
            <EventIcon className="bg-light emoji-attachment-item" icon="/icons/forms/smile.svg" />
        </div>
    );

    return (
        <div className='users-chat-widget'>

            <div className='users-discuss-view-board'>
                <div className='massage-wrapper-box'>

                    <div className='user-massage'>
                        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  <span className='sent'></span></p>
                        <p className='document'></p>
                        <span className='current-time-msg'>10:00</span>
                    </div>
                    <div className='user-massage'>
                        <p className='text'></p>
                        <p className='document'> <EventIcon className="bg-light emoji-attachment-item" icon="/icons/forms/smile.svg" /> <span className='sent'></span></p>
                        <span className='current-time-msg'>10:00</span>
                    </div>


                    <div className='provider-massage'>
                        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  <span className='sent'></span></p>
                        <p className='document'></p>
                        <span className='current-time-msg'>10:00</span>
                    </div>
                    <div className='provider-massage'>
                        <p className='text'></p>
                        <p className='document'> <EventIcon className="bg-light emoji-attachment-item" icon="/icons/forms/smile.svg" /> <span className='sent'></span></p>
                        <span className='current-time-msg'>10:00</span>
                    </div>

                    <div className='document-drag-overview-wrap'>
                    <div className='document-drag-overview'>
                        <img src='/icons/forms/file.svg' alt='file-icons' />
                        <p className='file-text'>Drop File here</p>
                    </div>
                    </div>
                </div>
            </div>

            <div className='users-discuss-submite-board'>
                <Input
                    className="input-grey-round massage-input-box"
                    size={screens.sm ? 'large' : 'small'}
                    placeholder="Enter your message here..."
                    prefix={prefix}
                    suffix={suffix}
                />
            </div>

        </div>
    )
}

export default UserChatWidgetDocumentDrag
