import React, { useState } from 'react';
import { Upload, Col, Button, Row, Space, Grid, Dropdown, Input, Avatar, Typography } from 'antd';
import EventIcon from '../../../common/EventIcon';
import ImgSmallCircle from '../../../common/ImgSmallCircle';
import CommentInput from '../../../common/CommentInput';
import CommentComponent from '../../../common/CommentComponent';
import { NO_USER_THUMB } from 'src/utils/constant';
import { GlobalOutlined } from '@ant-design/icons';
const { Text } = Typography;
const { useBreakpoint } = Grid;

const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item
            </a>
        ),
    },
];

const AddToFeed = () => {
    const screens = useBreakpoint();
    const [comment, setcomment] = useState([]);
    const [postTitle, setTitle] = useState(null);
    const [postPhoto, setPhoto] = useState(null);
    const [postAudio, setAudio] = useState(null);
    const [postVideo, setVideo] = useState(null);
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

    //handle video upload

    const beforeVideoUpload = (file) => {
        const isVideo = file.type.includes('video/');
        if (!isVideo) {
            message.error('You can only upload video files!');
            return false;
        }
        return true;
    }
    const handleVideoSelect = (info) => {
        if (info.file.status === 'uploading') {
            return;
        }
        if (info.file.status === 'done') {
            const fileUrl = URL.createObjectURL(info.file.originFileObj);
            setVideo({ fileUrl });
        }
    };

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
    const generateComment = (carr) => {
        setcomment(carr);
    }
    return (
        <>
            <div className='user-feed-comment-wrapper'>
                <Space
                    direction="vertical"
                    className='user-feed-wrapper'
                >
                    <div className='user-feed-post-input-wrapper'>
                        <div className='log-users-mind'>
                            <Row align='middle'>
                                <Col span={screens.sm ? 18 : 24}>
                                    <Space size={20} className='user-mind-cont-box'>
                                        <ImgSmallCircle />
                                        <div className='users-min-text-box'>
                                            <h3 className='title'>
                                                What's up?
                                            </h3>
                                            <p className='desc'>Type something here and everyone will see it</p>
                                        </div>
                                    </Space>

                                </Col>
                                <Col span={6}>
                                    {screens.sm && <Dropdown menu={{ items }} placement="bottomLeft" >
                                        <Button className='link-box-widgets' type="secondary" style={{ background: "#F1F5F5", border: "#aaa", height: 40 }} shape="round" icon={<GlobalOutlined style={{ color: "#aaa", fontSize: 18 }} />}><h3 className='title' style={{ color: "#aaa", fontSize: 14 }}>Everyone</h3></Button>
                                    </Dropdown>}

                                </Col>
                            </Row>
                        </div>
                        <div className='log-users-mind-post'>
                            <Row align="middle" className='post-create-input-box' gutter={11}>
                                <Col xl={16} lg={15} md={16} xs={24}>
                                    <Input className="input-grey-round post-input-box" size={screens.sm ? 'large' : 'small'} placeholder="Add to your comment" prefix={<img src="/icons/oneeyesmile.svg" width="17" height="17" />} />
                                </Col>
                                <Col xl={7} lg={9} md={7} xs={24}>
                                    <Space className='post-attachment-box'>
                                        <Upload
                                            name="avatar"
                                            listType="picture-card"
                                            className="avatar-uploader"
                                            showUploadList={false}
                                            beforeUpload={beforePhotoUpload}
                                            onChange={handlePhotoSelect}
                                        >
                                            <EventIcon className="bg-light" size={screens.sm ? 50 : 40} padding={screens.sm ? 15 : 10} icon="/icons/gallery.svg" />
                                        </Upload>
                                        <Upload
                                            name="avatar"
                                            listType="picture-card"
                                            className="avatar-uploader"
                                            showUploadList={false}
                                            beforeUpload={beforeVideoUpload}
                                            onChange={handleVideoSelect}
                                        >
                                            <EventIcon className="bg-light" size={screens.sm ? 50 : 40} padding={screens.sm ? 15 : 10} icon="/icons/video.svg" />
                                        </Upload>
                                        <EventIcon onCLick={() => startRecording()} className="bg-light" size={screens.sm ? 50 : 40} padding={screens.sm ? 15 : 10} icon="/icons/mic.svg" />
                                    </Space>
                                </Col>

                            </Row>
                        </div>
                    </div>

                    <div className='users-post-card-item'>
                        <div className='user-posted-content-box'>
                            <Row >
                                <Col span={24}>
                                    <Space
                                        direction="vertical"

                                        size={[0, 16]}
                                    >
                                        <Row align='middle'>
                                            <Col span={24}>
                                                <Space size={17} className='users-post-info'>
                                                    <ImgSmallCircle />
                                                    <div className='text-box'>
                                                        <h3 className='title'>Michle Merni</h3>
                                                        <p className='desc'>23 Minutes ago</p>
                                                    </div>
                                                </Space>
                                            </Col>
                                        </Row>
                                        <Row justify="center" align="middle">
                                            <Space
                                                direction="vertical"
                                                className='post-info-main-card'
                                                size={[0, 8]}
                                            >
                                                <Col md={24} sm={24}>
                                                    <img src='/img/girlpost.png' className='posted-image' alt='user posted image' width={595} height={244} />
                                                </Col>

                                                <Col md={24} sm={24}>
                                                    <div className='react-action-cont-box'>
                                                        <Row justify="space-between">
                                                            <Col md={12} sm={20} >
                                                                <Space className='react-action-icons' >
                                                                    <div>
                                                                        <Avatar style={{ background: "none" }} size={45}><img src="/icons/star-blank.svg" /></Avatar>
                                                                        <Text>20</Text>
                                                                    </div>
                                                                    <div>
                                                                        <Avatar style={{ background: "none" }} size={45}><img src="/icons/comment.svg" /></Avatar>
                                                                        <Text>23</Text>
                                                                    </div>
                                                                </Space>
                                                            </Col>
                                                            <Col>
                                                                <Avatar style={{ background: "none" }} size={45}><img src="/icons/download.svg" /></Avatar>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>

                                                <Col span={24}>
                                                    <p className='posted-desc-text'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem Ipsum Generator.</p>
                                                </Col>
                                            </Space>
                                        </Row>
                                    </Space>
                                </Col>
                            </Row>
                        </div>

                        <div className='relative-user-comment'>
                            <Row>
                                <Col span={24}>
                                    <CommentInput className='relative-users-input-comment' generateComment={generateComment} imgHeight={54} imgWidth={54} src={NO_USER_THUMB} />
                                </Col>
                            </Row>
                        </div>

                    </div>

                    <div className='user-post-base-reply-cont'>
                        <Row >
                            <Col span={24}>
                                <Space
                                    direction="vertical"
                                    className='relative-user-reply-context'
                                    style={{
                                        width: '100%',
                                    }}
                                    size={[0, 22]}
                                >
                                    {
                                        comment.length > 0 &&
                                        comment.map(((data, index) => (
                                            <CommentComponent key={index} src="assets/img/ProfileImage.png" userName="Carter Geidt" data={data} />
                                        )))
                                    }
                                </Space>
                            </Col>
                        </Row>


                    </div>

                </Space>
            </div>
        </>
    );
}

export default AddToFeed;