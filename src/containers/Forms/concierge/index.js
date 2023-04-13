import React, { useState } from 'react'
import Image from 'next/image'
import { Col, Row } from 'antd';
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import SearchProvider from 'src/components/Forms/concierge/searchProvider';
import SectionTitle from 'src/common/Forms/sectionTitle';
import InputSelect from 'src/common/Forms/inputSelect';
import ProviderCard from 'src/components/Forms/concierge/providerCard';
import { ProviderSuggestData, ProviderInPlaceData } from '../../../components/Forms/concierge/db'
import { IoMdClose } from "react-icons/io";

const ConciergeHome = ({ }) => {


    const [OpenProviderProfile, setOpenProviderProfile] = useState(false);

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
        <div className='concierge-layout-main'>
            <LayoutWrapper NextPage={true} BackToPrev={true} SiteTitle='Search Provider' >
                <div className='layout-wrapper-with-sidebar'>

                    <div className='layout-user-screen-box'>
                        <Row>
                            <Col md={6} xs={24}>
                                <div className='sidebar-content-wrapper'>
                                    <div className='provider-sidebar-wrap'>
                                        <SearchProvider />
                                        {/* ==============*/}
                                    </div>
                                </div>
                            </Col>

                            <Col md={18} xs={24}>
                                <div className='provider-overview-wrapper'>
                                    <SectionTitle title='Choose Your Provider' />

                                    <div className='provider-main-wrapperbox'>

                                        <div className='service-info-header'>
                                            <p className='total-available-number'>Showing <span className='available-number'>110</span> Provider</p>
                                            <div className='fillter-item-box'>
                                                <span className='title'>Sort By</span>
                                                <InputSelect defaoultValue='All' />
                                            </div>
                                        </div>

                                        <div className='provider-category-box'>

                                            <div className='provider-category-wrapper in-your-place'>
                                                <h3 className='title'>Doctors available at your place</h3>
                                                <div className='category-based-providers'>
                                                    <Row gutter={30}>
                                                        {ProviderInPlaceData.map((items) => (
                                                            <ProviderCard experticeYr={items.experticeYr} educatinsTypes={items.educatinsTypes} providerImage={items.providerImage} providerName={items.providerName} serviceType={items.serviceType} ratingPoint={items.ratingPoint} ratingsNumber={items.ratingsNumber} descText={items.descText} />
                                                        ))}
                                                    </Row>
                                                </div>
                                            </div>

                                            <div className='provider-category-wrapper suggested-provider'>
                                                <h3 className='title'>You will have to visit them</h3>
                                                <div className='category-based-providers'>
                                                    <Row gutter={30}>
                                                        {ProviderSuggestData.map((items) => (
                                                            <ProviderCard experticeYr={items.experticeYr} educatinsTypes={items.educatinsTypes} providerImage={items.providerImage} providerName={items.providerName} serviceType={items.serviceType} ratingPoint={items.ratingPoint} ratingsNumber={items.ratingsNumber} descText={items.descText} />
                                                        ))}

                                                    </Row>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    { /* ========popUp box======== */}
                    {OpenProviderProfile &&
                        <>
                            {
                                popupProfileData.map((items) => (<div className='providers-profile-overview'>
                                    <div className='providers-info-details-view'>
                                        <button className='pop-close-btn'><IoMdClose /></button>
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

                </div>

            </LayoutWrapper>
        </div>
    )
}

export default ConciergeHome
