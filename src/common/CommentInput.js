import React, { useState } from 'react';
import { Card, Col, Button, Row, Tooltip, Space, Typography, Grid, Input, Upload } from 'antd';
import PropTypes from "prop-types";
import { NO_USER_THUMB } from '../utils/constant';
import EventIcon from '../common/EventIcon';
const { Title, Text } = Typography;
const { useBreakpoint } = Grid;


const CommentInput = (props) => {
    const screens = useBreakpoint();

    const [comment, setcomment] = useState([]);
    const [commentTitle, setTitle] = useState(null);
    const [commentPhoto, setPhoto] = useState(null);
    const [commentAudio, setAudio] = useState(null);
    const [commentGif, setGif] = useState(null);
    const [recording, setRecording] = useState(false);

    //handle photo upload

    const beforePhotoUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
            return false;
        }
        return true;
    };

    const handlePhotoSelect = (info) => {
        if (info.file.status === 'uploading') {
            return;
        }
        if (info.file.status === 'done') {
            const fileUrl = URL.createObjectURL(info.file.originFileObj);
            setPhoto({ fileUrl });
        }
    };

    //handle gif video upload

    const beforeGifUpload = (file) => {
        const isVideo = file.type.includes('video/');
        if (!isVideo) {
            message.error('You can only upload video files!');
            return false;
        }
        return true;
    }
    const handleGifSelect = (info) => {
        if (info.file.status === 'uploading') {
            return;
        }
        if (info.file.status === 'done') {
            const fileUrl = URL.createObjectURL(info.file.originFileObj);
            setGif({ fileUrl });
        }
    };

    //handle emoj upload

    const handleEmojAddText = () => {

    }
    //handle audio upload

    const startRecording = () => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then((stream) => {
                const mediaRecorder = new MediaRecorder(stream);

                mediaRecorder.addEventListener('dataavailable', (event) => {
                    setAudio(URL.createObjectURL(event.data));
                });

                mediaRecorder.start();

                setRecording(true);
            })
            .catch((error) => {
                console.error('Error accessing microphone:', error);
            });
    };
    const stopRecording = () => {
        setRecording(false);
    };

    const beforeAudioUpload = (file) => {
        const isAudio = file.type.includes('audio/');
        if (!isAudio) {
            message.error('You can only upload audio files!');
            return false;
        }
        return true;
    }

    const handleAudioSelect = (info) => {
        if (info.file.status === 'uploading') {
            return;
        }
        if (info.file.status === 'done') {
            const fileUrl = URL.createObjectURL(info.file.originFileObj);
            setAudio({ fileUrl });
        }
    };

    const handleCreatedcomment = () => {
        if (commentTitle === null) {
            return
        }
        let data = {
            comment_title: commentTitle,
            comment_photo: commentPhoto,
            comment_audio: commentAudio,
            comment_gif: commentGif,
            commentauthor:
            {
                Name: "Deepak",
                photo: ""
            },
            like_count: 0,
            reply_count: 0
        }
        setcomment([...comment, data]);
        props.generateComment([...comment, data]);
    }

    const suffix = (
        <>
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                beforeUpload={beforePhotoUpload}
                onChange={handlePhotoSelect}
            >
                <EventIcon className="bg-light" icon="/icons/gallery.svg" />
            </Upload>
            <EventIcon onClick={() => startRecording()} className="bg-light" icon="/icons/mic.svg" />
            <EventIcon onClick={() => handleEmojAddText()} className="bg-light" icon="/icons/oneeyesmile.svg" />
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                beforeUpload={beforeGifUpload}
                onChange={handleGifSelect}
            >
                <EventIcon className="bg-light" icon="/icons/gif.svg" />
            </Upload>
            {screens.sm && <Button onClick={() => handleCreatedcomment()} shape="round" className="btn-green">
                <Text style={{ color: "#fff" }}>Comment</Text>
            </Button>}
        </>
    );
    return (
        <Space>
            {screens.sm &&
                <div style={{
                    background: `url("${props.src}")`,
                    backgroundRepeat: "no-repeat",
                    borderRadius: 50,
                    height: props.imgHeight ? props.imgHeight : 33,
                    width: props.imgWidth ? props.imgWidth : 33,
                    backgroundSize: "contain"
                }} >
                </div>
            }
            <Input
                size="small"
                placeholder="your comment here.."
                suffix={suffix}
                onChange={(e) => setTitle(e.target.value)}
                className="input-grey-round"
                // style={{ borderRadius: 50, height: props.inputHeight ? props.inputHeight : 45, width: props.inputWidth ? props.inputWidth : 534 }}
                style={{ borderRadius: 50, height: props.inputHeight ? props.inputHeight : 45 }}

            />
            {!screens.sm && <Space wrap>
                <Tooltip title="comment">
                    <Button type="primary" size="large" className='btn-grey' shape="circle" >
                        <img src='/icons/paper_plane.svg' style={{ width: "51%" }} />
                    </Button>
                </Tooltip>
            </Space>}
        </Space >
    );
}
CommentInput.propTypes = {
    src: PropTypes.string.isRequired,
};
CommentInput.defaultProps = {
    src: NO_USER_THUMB,
};
export default CommentInput;