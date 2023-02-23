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
        <Row gutter={[80, 0]}>
        {InfoCardData.map((data) => (
            <Col xxl={{ span: 6, offset: 0 }} >
            <InfoCardItem data={data} />
            </Col>
        ))}        
     </Row>
      
	);
};

InfoCard.propTypes = propTypes;

export default InfoCard;