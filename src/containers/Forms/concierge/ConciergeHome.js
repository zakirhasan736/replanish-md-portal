import React from 'react'
import { Col, Row } from 'antd';
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import SearchProvider from 'src/components/Forms/concierge/searchProvider';
import SectionTitle from 'src/common/Forms/sectionTitle';
import InputSelect from 'src/common/Forms/inputSelect';
import ProviderCard from 'src/components/Forms/concierge/providerCard';
import { ProviderSuggestData, ProviderInPlaceData } from '../../../components/Forms/concierge/db'

const ConciergeHome = ({ }) => {

    return (
        <div className='concierge-layout-main'>
            <LayoutWrapper NextPage={true} BackToPrev={true} SiteTitle='Search Provider' >
                <div className='layout-wrapper-with-sidebar'>

                    <div className='layout-user-screen-box'>
                        <Row>
                            <Col xl={6} lg={8} xs={24}>
                                <div className='sidebar-content-wrapper'>
                                    <div className='provider-sidebar-wrap'>
                                    <SectionTitle title='Choose Your Provider' />
                                        <SearchProvider />
                                        {/* ==============*/}
                                    </div>
                                </div>
                            </Col>

                            <Col xl={18} lg={16}  xs={24}>
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
                                                    <Row gutter={30} justify='center'>
                                                        {ProviderInPlaceData.map((items) => (
                                                            <ProviderCard experticeYr={items.experticeYr} educatinsTypes={items.educatinsTypes} providerImage={items.providerImage} providerName={items.providerName} serviceType={items.serviceType} ratingPoint={items.ratingPoint} ratingsNumber={items.ratingsNumber} descText={items.descText} />
                                                        ))}
                                                    </Row>
                                                </div>
                                            </div>

                                            <div className='provider-category-wrapper suggested-provider'>
                                                <h3 className='title'>You will have to visit them</h3>
                                                <div className='category-based-providers'>
                                                    <Row gutter={30} justify='center'>
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

                </div>

            </LayoutWrapper>
        </div>
    )
}

export default ConciergeHome

/*
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function ServicesNewPage() {
  const router = useRouter();
  const [isGoogle, setGoogle] = useState(null);
  const { started } = router.query;
  const [step, setStep] = useState(1);
  const [currentComponent, setCurrentComponent] = useState(null);

  useEffect(() => {
    const loadComponent = async () => {
      const { step, component: Component } = await import(`src/containers/Forms/asynchronous/${stepToComponent(step)}`);
      setCurrentComponent(<Component />);
    };

    loadComponent();
  }, [step]);

  const handleStep = (pro) => {
    setStep(pro);
  };

  const handleAuthWithGoogle = (val) => {
    setGoogle(val);
  };

  const stepToComponent = (step) => {
    switch (step) {
      case 1:
        return 'StartedStep';
      case 2:
        return 'WelcomeStep';
      case 3:
        return 'AsyncStepThree';
      case 4:
        return 'UserAuthWithGoogle';
      case 5:
        return 'SignupByEmailPassword';
      case 6:
        return 'WelcomeDashboard';
      case 7:
        return 'BasicsStepsOne';
      case 8:
        return 'CTAStepOne';
      case 9:
        return 'MedicalQuestionStepOne';
      case 10:
        return 'MedicalQuestionStepTwo';
      case 11:
        return 'MedicalQuestionStepThree';
      case 12:
        return 'TreatmentPrefStepOne';
      case 13:
        return 'TreatmentPrefStepTwo';
      case 14:
        return 'TreatmentPrefStepThree';
      case 15:
        return 'TreatmentPrefStepFour';
      case 16:
        return 'VerificationStepOne';
      case 17:
        return 'VerificationStepTwo';
      case 18:
        return 'CheckoutSTepsOne';
      case 19:
        return 'CheckoutFinalSteps';
      default:
        return null;
    }
  };

  if (!currentComponent) {
    return null;
  }

  return currentComponent;
}

*/ 