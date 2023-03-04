import {Typography } from 'antd';
import PropTypes from "prop-types";
const { Title, Text } = Typography;
const CustomTitle = (props) => {
    return (<Title level={props.level} style={{
        margin: 0,
        color: props.color,
    }}>{props.children} </Title>
    );
}
CustomTitle.propTypes = {
    level: PropTypes.number.isRequired,
};
CustomTitle.defaultProps = {
    level: 4,
    color: "#000",
};
export default CustomTitle;