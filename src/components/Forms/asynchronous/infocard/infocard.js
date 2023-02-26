import React, { useState } from "react";
import { Button, Col, Radio, Row } from "antd";
import PropTypes from "prop-types";
import {InfoCardData} from "../db"
import InfoCardItem from "src/common/Forms/infocarditem";

const propTypes = {
	extraOption: PropTypes.string,
};


const InfoCard = () => {

	return (
        <Row gutter={[{xl:80,}, { xs: 40, lg: 0 }]}>
        {InfoCardData.map((data) => (
            <Col xxl={{ span: 6, offset: 0 }} lg={{ span: 7, offset: 0 }} xs={{ span: 24, offset: 0 }} >
            <InfoCardItem data={data} />
            </Col>
        ))}        
     </Row>
      
	);
};

InfoCard.propTypes = propTypes;

export default InfoCard;