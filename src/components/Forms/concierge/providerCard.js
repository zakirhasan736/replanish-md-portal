import React from 'react'
import { Col } from 'antd';
import Image from 'next/image'
import { AiFillStar } from "react-icons/ai";
const ProviderCard = ({ providerImage, providerName, serviceType, ratingPoint, ratingsNumber, descText, experticeYr, educatinsTypes }) => {

    return (
        <Col xxl={8} xl={8} lg={8} md={12} xs={24} >
            <div className='providers--card'>
                <div className='provider-info-wrapper-box'>

                    <div className='provider-info-box'>
                        <div className='provider-user-image'>
                            <Image className='user-image' src={providerImage} width={94} height={94} preview={false} />
                        </div>
                        <div className='users-info-cont'>
                            <h4 className='user-name'>{providerName}</h4>
                            <p className='call-info-text'>{serviceType}</p>
                        </div>
                    </div>

                    { /* details info*/}
                    <div className='provider-details-infobox'>
                        <div className='provider-ratings-info'>
                            <span className='rate-star'><AiFillStar /></span>
                            <span className='rating-point'>{ratingPoint}</span>
                            <span className='number-review'>(<span className='count'>{ratingsNumber}</span>)</span>
                        </div>
                        <p className='description-text'>{descText}</p>
                        <div className='button-box'>
                            <button className='transparent-button'>View  profile</button>
                            <button  className='black-button'>Book An Appointment </button>
                        </div>
                    </div>

                </div>
            </div>

        </Col>
    )
}

export default ProviderCard
