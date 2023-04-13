import React, { useState } from 'react'
import SectionTitle from 'src/common/Forms/sectionTitle'
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import { Col, Row, Button } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Verifications = ({ handleStep, currval }) => {
    const [uploading, setUploading] = useState(false);
    const router = useRouter();
    const { wizard, name, tab } = router.query;

    const handleUpdateQuery = (wizard, name, tab) => {
        router.push({
            pathname: '/manage_services/started',
            query: { wizard: wizard, name: name, tab: tab },
        });
    };
    const uploadPhotoNext = () => {
        //write the code for image upload and save
        // finally update the step for next process
        setUploading(true);
        setTimeout(() => {
            setUploading(false);
            handleUpdateQuery(wizard, "try_again_face_detect", 2)
        }, 3000);

    }

    if (uploading) {
        return (
            <div className='steps-section-wrapper verification-loading--wrapper'>
                <div className='steps-progress-section-wrapper'>
                    <div className='verification-loading-screen'>
                        <div className='progress-loading-bar'>
                            <span className='progress-loading-inner'></span>
                        </div>
                        <h3 className='progress-loading-title'>Uploading your photo...</h3>
                        <p className='progress-loading-desc'>Hang on, this way take a few seconds.</p>
                    </div>
                </div>
            </div>
        )
    }
    const ProceedAnyway = () => {
        handleUpdateQuery("shipping", "information", 1)
    }

    const TryAgainForImageReUpload = () => {
        handleUpdateQuery("verifications", "upload_photo", 1)
    }

    return (

        <LayoutWrapper SiteLogo={false} NextPage={true} BackToPrev={true} SiteTitle='3. Identity Verification'>
            <div className='steps-section-wrapper'>
                <Row gutter={[0, 16]}>
                    <Col xxl={{ span: 12, offset: 6 }} xl={{ span: 16, offset: 4 }} lg={{ span: 18, offset: 3 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                        <div className='steps-progress-section-wrapper'>
                            <div className='steps-progress-verify-steps'>

                                <ul className='steps-progress-bars'>
                                    <li className='steps-progress-bars-item active'></li>
                                    <li className='steps-progress-bars-item active'></li>
                                    <li className='steps-progress-bars-item  active'></li>
                                    <li className='steps-progress-bars-item'></li>
                                </ul>
                                {/* step-1 go for next step */}
                                {name === "upload_photo" &&
                                    <div className='step-progress-steps-titlebox'>
                                        <Row justify="start" gutter={[0, 16]}>
                                            <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }} >
                                                <div className='section-top-wrapperbox text-left'>
                                                    <SectionTitle title='Share a photo of yourself' subtitle='Share a photo of yourself' />
                                                    <p className='desc'>Tell your doctor about your symptoms and overall health. Your doctor needs this information to determine the most appropriate treatment for you. It's important that you are honest and respond as accurately as possible.</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                }
                                {/* step-2 if failure */}
                                {name === "try_again_face_detect" &&
                                    <div className='step-progress-steps-titlebox'>
                                        <Row justify="start" gutter={[0, 16]}>
                                            <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }} >
                                                <div className='section-top-wrapperbox text-left'>
                                                    <SectionTitle title='We cannot detect your face.' />
                                                    <p className='desc'>Tell your doctor about your symptoms and overall health. Your doctor needs this information to determine the most appropriate treatment for you. It's important that you are honest and respond as accurately as possible.</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>}

                                {/* step-1 */}
                                {name === "upload_photo" &&
                                    <div className='basic-info-input-data-box'>
                                        <div className='async-user-medical-question-infobox'>

                                            <div className='medical-question-modalimg text-center'>
                                                <Image src='/assets/images/verification-modal-one.png' width={487} height={347} alt='medical question modal image' />
                                            </div>

                                            <Row>
                                                <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }} >
                                                    <Button onClick={() => uploadPhotoNext()} className='submit-button black-button'>take or upload photo</Button>
                                                    <p className='info-text-desc'>Your Photos won’t be shared with anyone besides your doctor or nurse practitioner.</p>
                                                </Col>
                                            </Row>

                                        </div>
                                    </div>}
                                {/* step-2 */}

                                {name === "try_again_face_detect" &&
                                    <div className='basic-info-input-data-box'>
                                        <div className='async-user-verify-infobox'>
                                            <div className='verify-identity-modalimg text-center'>
                                                <Image src='/assets/images/thump-modalimg.png' width={244.95} height={205.09} alt='medical question modal image' />
                                            </div>
                                            <h5 className='info-list-title'>How should i provide a better photo?</h5>
                                            <ul className='info-list-box'>
                                                <li className='info-list-items'>1. Your face is well-lit and not blurry</li>
                                                <li className='info-list-items'>2. You are the only person in the photo</li>
                                                <li className='info-list-items'>3. Nothing is covering your face, including sunglasses or hats.</li>
                                            </ul>
                                        </div>
                                        <div className='verify-button-box'>
                                            <Row>
                                                <Col xxl={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }} >
                                                    <Button onClick={() => TryAgainForImageReUpload()} className='submit-button black-button'>Try again</Button>
                                                    <Button onClick={() => ProceedAnyway()} className='submit-button transparent-button'>Proceed anyway</Button>
                                                    <div className='privecy-info-pin-text' >  <Image src='/assets/images/bxs_lock-alt.png' width={24} height={24} alt='lock icons' />  <p className='info-text-desc'>256-BIT TLS SECURITY</p></div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>

                    </Col>
                </Row>


            </div>
        </LayoutWrapper>

    )
}

export default Verifications