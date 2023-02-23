import React from 'react'
import SectionTitle from 'src/common/Forms/sectionTitle'
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import { Col, Row, Button } from 'antd';
import Link from 'next/link';
import Image from 'next/image';

const VerificationStepOne = () => {

    return (

        <LayoutWrapper SiteLogo={false} NextPage={true} BackToPrev={true} >
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
        </LayoutWrapper>

    )
}

export default VerificationStepOne