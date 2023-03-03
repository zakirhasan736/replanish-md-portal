
import { Card, Col, Button, Row, Space, Typography } from 'antd';
import PropTypes from "prop-types";
import { THEMERADIUS } from '../utils/constant';
import CustomTitle from '../common/CustomTitle';
const { Title, Text } = Typography;
const Stories = (props) => {
    return (
        <div style={{ paddingRight: 10 }}>
            <Card style={{
                background: `url("${props.background}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",

            }} className="story-card">
                {props.indexNumber == 0 ? <div>
                    <img src="/icons/addupload.svg" width="35" height="35" />
                </div> : <Text style={{color:props.titleColor,fontWeight:600}}>{props.title}</Text>}


            </Card>
        </div>
    );
}

export default Stories;