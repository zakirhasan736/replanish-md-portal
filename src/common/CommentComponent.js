
import { EllipsisOutlined } from '@ant-design/icons';
import { Col, Row, Space, Typography } from 'antd';
import PropTypes from "prop-types";
import { NO_USER_THUMB } from '../utils/constant';
import CommentInput from '../common/CommentInput';
import ImgSmallCircle from '../common/ImgSmallCircle';
import TotalLikeCount from '../common/TotalLikeCount';
const { Text } = Typography;

const CommentComponent = (props) => {

    const getALike = (id) => {
        const updatedTodos = [...todos];
        const index = updatedTodos.findIndex(todo => todo.id === id);
        updatedTodos[index].completed = true;
        setTodos(updatedTodos);
    }

    return (
        <Space
            direction="vertical"
            style={{
                width: '100%',
            }}
            size={[0, 20]}
        >

            <div className='user-comment-wrapbox'>
                <div className='users-replying-cont-box'>
                    <div className='reply-user-avatar-box'>
                        <ImgSmallCircle imgHeight={54} imgWidth={54} src='/img/ProfileImage.png' />
                    {/*<div style={{ marginLeft: 18, height: 90,}}>
                        <img src="/icons/commentline.svg" />
                     </div>*/}
                    </div>
                    <div  className='reply-user-cont-wrap' >
                        <h5 className='user-name'>{props.userName}</h5>
                        <div className='users-added-content'>
                            <div className='users-post-attachment-wrapper'>
                                <div className='comment-content-group-box'>
                                    {props.data.comment_photo && <div className='attachment-photo'>
                                    <img src={props.data.comment_photo.fileUrl} />
                                </div>}
                                {props.data.comment_gif && <div className='attachment-gif'>
                                <img src={props.data.comment_gif.fileUrl} />
                            </div>}
                                <p className='desc'>{props.data.comment_title}</p>

                               
                                </div>

                                <EllipsisOutlined style={{ fontSize: "30px", color: "#000" }} className='elips-view-more-option' />
                            </div>
                            <div className='total-count-impression-widget'>
                            <TotalLikeCount count={10} liketType={[{ bg: "#F5EFFF", icon: 'reaction-like' }, { bg: "#FFE0DE", icon: 'reaction-love' }, { bg: "#FFF3DB", icon: 'reaction-smile' }]} />
                        </div>
                        </div>
                        <div className='like-comment-trigger-box' >
                            <Space className='like-comment-trigger-wrap' onClick={() => getALike()} align="center">
                            <button className='like-trigger-button' >Like</button>
                            <button className='reply-trigger-button' >Reply</button>
                            <span className='replying-posted-time' >2 mins ago</span>
                            </Space>
                        </div>
                        <div>
                            <Space align="center">{props.data.reply_count > 0 ? <CommentInput inputHeight={30} inputWidth={460} imgHeight={30} imgWeight={30} src={NO_USER_THUMB} /> : <Text style={{ fontSize: 9 }}>1 Replies</Text>}</Space>
                        </div>
                    </div>
                </div>
            </div>
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