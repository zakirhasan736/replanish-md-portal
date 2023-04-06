import { Col, Button, Row, Typography, Grid } from 'antd';
const { Text } = Typography;
const { useBreakpoint } = Grid;


const LandingMessage = () => {
    const screens = useBreakpoint();
    return (
        <>
            <div className='cta-wrapper-box bg-light'>
                <Row  justify="space-between" align="bottom">

                    <div className='modal-image'>
                        <img src='/img/missdoctor.png' />
                    </div>

                    <Col xl={19} lg={24} md={15} xs={24}>
                            <div className='cta-text-content'>
                                    <h2 className='card-head-title'>
                                        Hello, <span>Kelechi A</span>
                                    </h2>
                                    <p className='card-head-desc'> have a nice day and don’t forget to take care {screens.sm && <br />}
                                        of your health </p>
                               
                            </div>
                    </Col>

                    <Col xl={5} lg={24} md={9} xs={24} >
                        <div className='cta-btn-item' style={{ textAlign: 'right' }}>
                            <Button shape="round" className='btn-default btn-medium btn-grey'>
                                <Text>Ask Question</Text>
                            </Button>
                        </div>
                    </Col>

                </Row>
            </div>
        </>
    );
}

export default LandingMessage;