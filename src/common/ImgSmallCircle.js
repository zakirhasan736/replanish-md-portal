import PropTypes from "prop-types";
import { NO_USER_THUMB } from '../utils/constant';

const ImgSmallCircle = (props) => {
    return (
        <div className='circle-image-item' style={{
            background: `url("${props.src}")`,
            backgroundRepeat: "no-repeat",
            borderRadius: 50,
            height: props.imgHeight?props.imgHeight:33,
            width: props.imgWidth?props.imgWidth:33,
            backgroundSize: "contain"
        }}>
        </div>
    );
}
ImgSmallCircle.propTypes = {
    src: PropTypes.string.isRequired,
};
ImgSmallCircle.defaultProps = {
    src: NO_USER_THUMB,
};
export default ImgSmallCircle;