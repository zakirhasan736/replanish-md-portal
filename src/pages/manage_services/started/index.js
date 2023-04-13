import { useRouter } from 'next/router';
import ErectileDysfunction from 'src/containers/Forms/asynchronous/ErectileDysfunction';
import Shipping from 'src/containers/Forms/asynchronous/Shipping';
import MedicalQuestions from 'src/containers/Forms/asynchronous/MedicalQuestions';
import AuthRequired from 'src/containers/Forms/asynchronous/AuthRequired';
import SmsVerification from 'src/containers/Forms/asynchronous/SmsVerification';
import StartWithBasics from 'src/containers/Forms/asynchronous/Startwithbasic';
import TreatMentPreference from 'src/containers/Forms/asynchronous/TreatMentPreference';
import Verifications from 'src/containers/Forms/asynchronous/Verifications';
import WelcomeDashboard from 'src/containers/Forms/asynchronous/WelcomeDashboard';

export default function ServicesNewPage() {

	const router = useRouter();
	const { wizard, name, tab } = router.query;

	return (
		<div>
			{wizard === "Erectile_Dysfunction" && <ErectileDysfunction />}
			{wizard === "authentication" && <AuthRequired />}
			{wizard === "dashboard" && <WelcomeDashboard />}
			{wizard === "Start_With" && <StartWithBasics />}
			{wizard === "Verification" && <SmsVerification />}
			{wizard === "medical_questions" && <MedicalQuestions />}
			{wizard === "Treatment_Preference" && <TreatMentPreference />}
			{wizard === "verifications" && <Verifications />}
			{wizard === "shipping" && <Shipping />}
		</div>
	);
}