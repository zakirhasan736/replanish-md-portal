import React, {useState} from 'react'
import { Col } from 'antd';
import Image from 'next/image'
import { AiFillStar } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useRouter } from 'next/router';
const ProviderCard = ({ providerImage, providerName, serviceType, ratingPoint, ratingsNumber, descText, experticeYr, educatinsTypes }) => {
    const router = useRouter();
    const [OpenProviderProfile, setOpenProviderProfile] = useState(false);
    const handleSubmit = () => {
        setOpenProviderProfile(true);
      }
      const popupProfileData = [
        {
            id: 1,
            providerImage: `/images/forms/team.png`,
            providerName: 'Alex Martinez',
            educatinsTypes: 'MBBS, MRCP(UK), CCST(DERM)',
            experticeYr: '20+ Yrs',
            serviceType: 'Peptide Therapy',
            ratingPoint: '4.8',
            ratingsNumber: '57',
            descText1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros netus ultricies amet fusce vel. Tortor orci, massa enim nunc ultrices netus integer sed lorem. Interdum id bibendum netus sit malesuada at tristique pretium lorem. Aenean eget auctor scelerisque amet donec placerat montes. Enim consequat volutpat mi aliquam felis cras sit ullamcorper vitae. Varius lobortis amet rhoncus enim in faucibus. Ultricies turpis malesuada pharetra nam. Suspendisse a odio curabitur ullamcorper viverra eu laoreet. Tristique purus elit, pulvinar faucibus.',
            descText2: 'Pulvinar enim quis sit commodo elementum magna pharetra et. Viverra ultrices vitae, consequat iaculis orci diam velit, et. Sit egestas ipsum id lacus in. Varius enim mattis hendrerit dui felis tincidunt. Orci, nam ultrices malesuada mauris sem in vitae. Diam dolor, malesuada pharetra ultrices at sit ipsum. Laoreet.',
        }
    ]

    return (
        <Col xxl={8} xl={8} lg={12} md={12} xs={24} >
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
                            <button onClick={() => handleSubmit()}  className='transparent-button'>View  profile</button>
                            <button  onClick={()=>router.push("/manage_services/concierge?wizard=2&tab=location-provider")} className='black-button'>Book An Appointment </button>
                        </div>
                    </div>

                </div>
            </div>
            {OpenProviderProfile &&
                <>
                    {
                        popupProfileData.map((items) => (<div className='providers-profile-overview'>
                            <div className='providers-info-details-view'>
                                <button className='pop-close-btn' onClick={()=> setOpenProviderProfile(false)}><IoMdClose /></button>
                                <div className='providers-profile-image'><Image src={items.providerImage} width={474} height={531} preview={false} /></div>
                                <div className='providers-profile-info-cont'>
                                    <h2 className='providers-name'>{items.providerName} <span className='providers-bio-info'>{items.educatinsTypes}</span></h2>
                                    <p className='Specialist'>Specialist : <span className='skills-name'>{items.serviceType}</span></p>
                                    <p className='experianced'>Experience : <span className='experiance-year'>{items.experticeYr}</span></p>
                                    <div className='details-content-box'>
                                        <h6 className='subtitle-text'>About {items.providerName}</h6>
                                        <p className='details-info-text mb-30'>{items.descText1}</p>
                                        <br />
                                        <p className='details-info-text mb-30'>{items.descText2}</p>
                                    </div>
                                </div>
                                <div className='poup-shape-item'><Image src='/icons/forms/shape1.svg' width={317} height={317} preview={false} /> </div>
                            </div>
                        </div>))
                    }
                </>
            }
        </Col>
              
    )
}

export default ProviderCard
