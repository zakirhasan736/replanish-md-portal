
import { Card, Col, Button, Row, Space, Typography } from 'antd';
import PropTypes from "prop-types";
import { THEMERADIUS } from '../utils/constant';
import CustomTitle from '../common/CustomTitle';
const { Title, Text } = Typography;
const Widget = (props) => {
    return (
        <div style={{ paddingRight: props.last ? 0 : 10 }}>
            <Card style={{
                background: `url("${props.background}")`,
                backgroundRepeat: "no-repeat",
                borderRadius: THEMERADIUS,
                height: 103,
                backgroundSize: "cover",
                padding:16
            }} className="widget-card">
                <div>
                    <img src={props.icon} width="35" height="35" />
                </div>
                <div style={{ marginTop: 5 }}>
                    <Text style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}> {props.title}</Text>
                </div>
            </Card>
        </div>
    );
}
Widget.propTypes = {
    background: PropTypes.string,
    icon: PropTypes.element,
    title: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    titleColor: PropTypes.string,

};
Widget.defaultProps = {
    background: "#fff",
    icon: "",
    title: "",
    level: 4,
    titleColor: "#000",
};
export default Widget;