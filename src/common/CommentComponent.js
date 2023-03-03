
import { EllipsisOutlined } from '@ant-design/icons';
import { Card, Col, Button, Row, Space, Typography, Input } from 'antd';
import PropTypes from "prop-types";
import { NO_USER_THUMB } from '../utils/constant';
import CommentInput from '../common/CommentInput';
import ImgSmallCircle from '../common/ImgSmallCircle';
import TotalLikeCount from '../common/TotalLikeCount';
const { Title, Text } = Typography;

// const suffix = (
//     <Space>
//         <EventIcon background="#fff" icon="/icons/gallery.svg" />
//         <EventIcon background="#fff" icon="/icons/video.svg" />
//         <EventIcon background="#fff" icon="/icons/mic.svg" />
//         <Button shape="round" style={{ background: "#438465" }}>
//             <Text style={{ color: "#fff" }}>Comment</Text>
//         </Button>
//     </Space>
// );
const CommentComponent = (props) => {
    return (
        <Space
            direction="vertical"
            style={{
                width: '100%',
            }}
            size={[0, 20]}
        >

            <Row>
                <Col>
                    <Row>
                        <Col span={4}>
                            <ImgSmallCircle imgHeight={54} imgWidth={54} src='/img/ProfileImage.png' />
                            <div style={{ marginLeft: 18, height: 90, overflow: "hidden" }}>
                                <img src="icons/commentline.svg" />
                            </div>
                        </Col>
                        <Col span={20} >
                            <Text style={{ fontSize: 17, fontWeight: 400 }}>{props.userName}</Text>

                            <div style={{ position: "relative" }}>
                                <Space >
                                    <div style={{ background: "#F1F5F5", padding: 13, borderRadius: 3 }}>
                                        <Text style={{ fontSize: 12, fontWeight: 400 }}>{props.text}</Text>
                                    </div>
                                    <div>
                                        <TotalLikeCount count={10} liketType={[{ bg: "#F5EFFF", icon: 'reaction-like' }, { bg: "#FFE0DE", icon: 'reaction-love' }, { bg: "#FFF3DB", icon: 'reaction-smile' }]} />
                                    </div>

                                    <EllipsisOutlined style={{ fontSize: "30px", color: "#000" }} />
                                </Space>
                            </div>
                            <div style={{ marginTop: 25 }} >
                                <Space align="center"><Text style={{ fontSize: 9 }}>Like</Text><Text style={{ fontSize: 9 }}>Reply</Text><Text style={{ fontSize: 9 }}>2 mins ago</Text></Space>
                            </div>
                            <div>
                                <Space align="center">{props.reply ? <CommentInput inputHeight={30} inputWidth={460} imgHeight={30} imgWeight={30} src={NO_USER_THUMB} /> : <Text style={{ fontSize: 9 }}>1 Replies</Text>}</Space>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Space>
    );
}
CommentComponent.propTypes = {
    src: PropTypes.string.isRequired,
};
CommentComponent.defaultProps = {
    src: NO_USER_THUMB,
};
export default CommentComponent;