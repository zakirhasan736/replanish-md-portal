
import { Card, Col, Button, Row, Space, Grid, Dropdown, Input, Avatar, Typography } from 'antd';
import PropTypes from "prop-types";
import CustomTitle from '../../../common/CustomTitle';
import EventIcon from '../../../common/EventIcon';
import { UserOutlined } from '@ant-design/icons';
import ImgSmallCircle from '../../../common/ImgSmallCircle';
import CommentInput from '../../../common/CommentInput';
import CommentComponent from '../../../common/CommentComponent';
import { NO_USER_THUMB } from 'src/utils/constant';
import { GlobalOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;
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
const AddToFeed = (props) => {
    const screens = useBreakpoint();
    return (
        <Space
            direction="vertical"
            style={{
                width: '100%',
            }}
            size={[0, 10]}
        >
            <Row>

                <Col span={screens.sm ? 18 : 24}>
                    <Space size={20} style={{ paddingLeft: 9 }}>
                        <ImgSmallCircle />
                        <div>
                            <div>
                                <CustomTitle level={4} >
                                    What's up?
                                </CustomTitle>
                            </div>
                            <div >
                                <Text style={{ color: "#C5C5C5" }}>Type something here and everyone will see it</Text>
                            </div>
                        </div>

                    </Space>

                </Col>
                <Col span={6}>
                    {screens.sm && <Dropdown menu={{ items }} placement="bottomLeft" >
                        <Button type="secondary" style={{ background: "#F1F5F5", border: "#aaa", height: 40 }} shape="round" icon={<GlobalOutlined style={{ color: "#aaa", fontSize: 18 }} />}><Text style={{ color: "#aaa", fontSize: 14 }}>Everyone</Text></Button>
                    </Dropdown>}

                </Col>
            </Row>
            <Row align="middle">
                <Col span={15}>
                    <Input style={{ borderRadis: 30 }} className="input-grey-round" size={screens.sm ? 'large' : 'small'} placeholder="Add to your post" prefix={<img src="/icons/oneeyesmile.svg" width="17" height="17" />} />
                </Col>
                <Col span={7} push={1}>
                    <Space>
                        <EventIcon className="bg-light" size={screens.sm ? 55 : 35} padding={screens.sm ? 15 : 10} icon="/icons/gallery.svg" />
                        <EventIcon className="bg-light" size={screens.sm ? 55 : 35} padding={screens.sm ? 15 : 10} icon="/icons/video.svg" />
                        <EventIcon className="bg-light" size={screens.sm ? 55 : 35} padding={screens.sm ? 15 : 10} icon="/icons/mic.svg" />
                    </Space>
                </Col>

            </Row>
            <Row style={{ marginTop: 47 }}>
                <Col span={24}>
                    <Space
                        direction="vertical"
                        style={{
                            width: '100%',
                        }}
                        size={[0, 22]}
                    >
                        <Row>
                            <Col span={24}>
                                <Space size={17}>
                                    <ImgSmallCircle />
                                    <div style={{ lineHeight: "9px" }}>
                                        <CustomTitle level={4} color='#000' >Michle Merni</CustomTitle>
                                        <Text style={{ color: "#AFAFAF" }}>23 Minutes ago</Text>
                                    </div>
                                </Space>
                            </Col>
                        </Row>
                        <Row justify="center" align="middle">
                            <Space
                                direction="vertical"
                                style={{
                                    width: '100%',
                                }}
                                size={[0, 8]}
                            >
                                <Col md={24} sm={24}>
                                    <img src="/img/girlpost.png" />
                                </Col>
                                <Col md={22} sm={24}>
                                    <Row justify="space-between">
                                        <Col md={12} sm={20} >
                                            <Space >
                                                <div>
                                                    <Avatar style={{ background: "none" }} size={45}><img src="/icons/blank-heart.svg" /></Avatar>
                                                    <Text>10</Text>
                                                </div>
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


                                </Col>
                                <Col span={22}>
                                    <Text>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem Ipsum Generator.</Text>
                                </Col>
                            </Space>
                        </Row>
                    </Space>
                </Col>

            </Row>
            <br />
            <Row>
                <Col span={24}>
                    <CommentInput imgHeight={54} imgWidth={54} src={NO_USER_THUMB} />
                </Col>
            </Row>

            <Row style={{ marginTop: 22 }}>
                <Col span={24}>
                    <Space
                        direction="vertical"
                        style={{
                            width: '100%',
                        }}
                        size={[0, 22]}
                    >
                        <CommentComponent src="assets/img/ProfileImage.png" userName="Deepak" text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem Ipsum Generator" reply={false} />
                        <CommentComponent src="assets/img/ProfileImage.png" userName="Deepak" text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem Ipsum Generator" reply={true} />
                    </Space>
                </Col>
            </Row>
        </Space>

    );
}
// AddToFeed.propTypes = {
//     background: PropTypes.string,
//     icon: PropTypes.element,
//     title: PropTypes.string.isRequired,
//     level: PropTypes.number.isRequired,
//     titleColor: PropTypes.string,

// };
// AddToFeed.defaultProps = {
//     background: "#fff",
//     icon: "",
//     title: "",
//     level: 4,
//     titleColor: "#000",
// };
export default AddToFeed;