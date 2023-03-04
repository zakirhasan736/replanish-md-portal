
import { Card, Col, Button, Row, Space, Typography, Avatar } from 'antd';
import PropTypes from "prop-types";

const EventIcon = (props) => {
    return (

        <Avatar className={props.className} style={{padding: props.padding ? props.padding : 5 }} shape="circle" size={props.size ? props.size : 30} icon={<img src={props.icon} />} />
    );
}
EventIcon.propTypes = {
    // background: PropTypes.string,
    icon: PropTypes.element.isRequired,
    // title: PropTypes.string.isRequired,
    // level: PropTypes.number.isRequired,
    // titleColor: PropTypes.string,

};
EventIcon.defaultProps = {
    // background: "#fff",
    icon: "",
    // title: "",
    // level: 4,
    // titleColor: "#000",
};
export default EventIcon;