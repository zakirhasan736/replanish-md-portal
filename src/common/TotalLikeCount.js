
import { EllipsisOutlined } from '@ant-design/icons';
import { Card, Col, Button, Row, Space, Typography, Input } from 'antd';
import PropTypes from "prop-types";
import { NO_USER_THUMB } from '../utils/constant';
const { Title, Text } = Typography;
const CustomEventIcon = (props) => {
    return (
        <div align="center" style={{ background: props.background, borderRadius: 50,width:20, marginLeft: props.itemNumber !== 0 ? -2 : 0 }} >
            <img src={props.icon} width="15" height="15" style={{padding:2}}/>
        </div>
    );
}
const TotalLikeCount = (props) => {

    return (
       
            <div style={{ padding: 0, position: "absolute", left: 0 ,bottom:-23}}>
                
                    <div style={{ padding: 5, marginTop: 30, background: "#FFFFFF", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)", borderRadius: 10 }}>
                        <Space align="center">
                            <div style={{ display: "flex" }}>
                                {props.liketType.map((row, index) => <CustomEventIcon background={row.bg} icon={`/icons/${row.icon}.svg`} itemNumber={index} />)}
                            </div>
                            <div>
                                <Text style={{ fontSize: 12, color: "#BFBFBF" }}>{props.count}</Text>
                            </div>
                        </Space>
                    </div>
                    
               
            </div>

        
    );
}
TotalLikeCount.propTypes = {
    src: PropTypes.string.isRequired,
};
TotalLikeCount.defaultProps = {
    src: NO_USER_THUMB,
};
export default TotalLikeCount;