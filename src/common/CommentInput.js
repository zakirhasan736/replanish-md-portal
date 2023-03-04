
import { Card, Col, Button, Row, Tooltip, Space, Typography, Grid, Input } from 'antd';
import PropTypes from "prop-types";
import { NO_USER_THUMB } from '../utils/constant';
import EventIcon from '../common/EventIcon';
const { Title, Text } = Typography;
const { useBreakpoint } = Grid;


const CommentInput = (props) => {
    const screens = useBreakpoint();
    const suffix = (
        <>
            <EventIcon className="bg-light" icon="/icons/gallery.svg" />
            <EventIcon className="bg-light" icon="/icons/oneeyesmile.svg" />
            <EventIcon className="bg-light" icon="/icons/gif.svg" />
            <EventIcon className="bg-light" icon="/icons/mic.svg" />
            {screens.sm && <Button shape="round" className="btn-green">
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