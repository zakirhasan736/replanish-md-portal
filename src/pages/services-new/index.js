import { useRouter } from 'next/router';
import { useState } from 'react';
import AsyncStepThree from 'src/containers/Forms/asynchronous/asyncStepThree';
import WelcomeDashboard from 'src/containers/Forms/asynchronous/asyncUserAfterHome';
import UserAuthWithGoogle from 'src/containers/Forms/asynchronous/asyncUserAuth';
import SignupByEmailPassword from 'src/containers/Forms/asynchronous/asyncUserSignupFild';
import BasicsStepsOne from 'src/containers/Forms/asynchronous/BasicsStepOne';
import CheckoutFinalSteps from 'src/containers/Forms/asynchronous/checkoutFinalStep';
import CheckoutSTepsOne from 'src/containers/Forms/asynchronous/checkoutStepOne';
import CTAStepOne from 'src/containers/Forms/asynchronous/CTAStepOne';
import MedicalQuestionStepOne from 'src/containers/Forms/asynchronous/medicalQuestionsStepOne';
import MedicalQuestionStepThree from 'src/containers/Forms/asynchronous/medicalQuestionsStepThree';
import MedicalQuestionStepTwo from 'src/containers/Forms/asynchronous/medicalQuestionsStepTwo';
import StartedStep from 'src/containers/Forms/asynchronous/StartedStep';
import TreatmentPrefStepFour from 'src/containers/Forms/asynchronous/treatmentPrefStepFour';
import TreatmentPrefStepOne from 'src/containers/Forms/asynchronous/treatmentPrefStepOne';
import TreatmentPrefStepThree from 'src/containers/Forms/asynchronous/treatmentPrefStepThree';
import TreatmentPrefStepTwo from 'src/containers/Forms/asynchronous/treatmentPrefStepTwo';
import VerificationStepOne from 'src/containers/Forms/asynchronous/verificationStepOne';
import VerificationStepTwo from 'src/containers/Forms/asynchronous/VerificationStepTwo';
import WelcomeStep from 'src/containers/Forms/asynchronous/welcomeStep';


export default function ServicesNewPage() {
	const router = useRouter();
	const { started } = router.query;
	const [step, setStep] = useState(1);
	const handleStep = (pro) => {
		setStep(pro);
	}
console.log({step})
	return (
		<div>
			{started === "true" && (
				<>
					{step === 1 && <StartedStep handleStep={handleStep} StepNext={false} FillBtnText={""} currval={1} />}

					{step === 2 && <WelcomeStep handleStep={handleStep} StepNext={true} FillBtnText={"Next"} currval={2} />}

					{step === 3 && <AsyncStepThree handleStep={handleStep} StepNext={true} FillBtnText={"Next"} currval={3} />}

					{step === 4 && <UserAuthWithGoogle handleStep={handleStep} StepNext={true} FillBtnText={"Next"} currval={4} />}

					{step === 5 && <SignupByEmailPassword handleStep={handleStep} StepNext={true} FillBtnText={"Next"} currval={5} />}

					{step === 6 && <WelcomeDashboard handleStep={handleStep} StepNext={true} FillBtnText={"Next"} currval={6} />}

					{step === 7 && <BasicsStepsOne handleStep={handleStep} StepNext={true} FillBtnText={"Next"} currval={7} />}

					{step === 8 && <CTAStepOne handleStep={handleStep} StepNext={true} FillBtnText={"Next"} currval={8} />}

					{step === 9 && <MedicalQuestionStepOne handleStep={handleStep} StepNext={true} FillBtnText={"Next"} currval={9} />}

					{step === 10 && <MedicalQuestionStepTwo handleStep={handleStep} StepNext={true} FillBtnText={"Next"} currval={10} />}

					{step === 11 && <MedicalQuestionStepThree handleStep={handleStep} StepNext={true} FillBtnText={"Next"} currval={11} />}

					{step === 12 && <TreatmentPrefStepOne handleStep={handleStep} StepNext={true} FillBtnText={"Next"} currval={12} />}

					{step === 13 && <TreatmentPrefStepTwo handleStep={handleStep} StepNext={true} FillBtnText={"Next"} currval={13} />}

					{step === 14 && <TreatmentPrefStepThree handleStep={handleStep} StepNext={true} FillBtnText={"Next"} currval={14} />}

					{step === 15 && <TreatmentPrefStepFour handleStep={handleStep} StepNext={true} FillBtnText={"Next"} currval={15} />}

					{step === 16 && <VerificationStepOne handleStep={handleStep} StepNext={true} FillBtnText={"Next"} currval={16} />}

					{step === 17 && <VerificationStepTwo handleStep={handleStep} StepNext={true} FillBtnText={"Next"} currval={17} />}

					{step === 18 && <CheckoutSTepsOne handleStep={handleStep} StepNext={true} FillBtnText={"Next"} currval={18} />}

					{step === 19 && <CheckoutFinalSteps handleStep={handleStep} StepNext={true} FillBtnText={"Next"} currval={19} />}
				</>
			)}
		</div>
	);
}
