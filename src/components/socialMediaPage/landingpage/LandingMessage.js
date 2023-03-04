import CustomTitle from '../../../common/CustomTitle';
import { Card, Col, Button, Row, Space, Typography, Grid } from 'antd';
import { THEMERADIUS } from '../../../utils/constant';
const { Title, Text } = Typography;
const { useBreakpoint } = Grid;
const style = {
    background: '#0092ff',
    padding: '8px 0',
    width: "100%",
    position: "relative"
};
const welcomecss = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: THEMERADIUS,
    position: "relative",
    padding: "8px"
};
const LandingMessage = () => {
    const screens = useBreakpoint();
    return (
        <div style={{ marginTop: 6 }}>

            <Row style={welcomecss} justify="space-between" className="bg-light" align="middle">
                {/* <Row gutter={32} justify="space-between" align="middle" style={{ height: 93, position: "relative" }}> */}
                {/* <div style={{ top: -20, left: 28, position: 'absolute' }}> */}
                <div style={{ bottom: 0, position: 'absolute' }}>
                    <img src='/img/missdoctor.png' />
                </div>
                <div style={{ bottom: 0, right: screens.sm ? 29 : 10, top: screens.sm ? 61.5 : 90.5, position: 'absolute' }}>
                    <Button shape="round" className='btn-default btn-medium btn-grey'>
                        <Text>Ask Question</Text>
                    </Button>
                </div>
                <Col md={15} xs={17} push={screens.sm ? 5 : 7}>
                    {/* <Space size={20} align="center"> */}
                    <div>
                        <div style={{ padding: "18px 0px 29px" }}>
                            <div>
                                <Text className='card-head-title' style={{ fontSize: screens.sm ?18:16 }}>
                                    Hello
                                </Text>
                            </div>
                            <div >
                                <Text style={{ color: "#000", fontSize: screens.sm ?13:12 }}>have a nice day and don’t forget to take care {screens.sm && <br />}
                                    of your health </Text>
                            </div>
                        </div>

                    </div>
                    {/* </Space> */}
                </Col>
                {/* <Col xs={10} style={{ marginTop: 16 }} push={15}>
                    <Button shape="round" className='btn-default btn-medium btn-grey'>
                        <Text>Ask Question</Text>
                    </Button>
                </Col> */}

            </Row>

        </div>
    );
}

export default LandingMessage;