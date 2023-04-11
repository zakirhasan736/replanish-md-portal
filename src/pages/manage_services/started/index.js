import { useRouter } from 'next/router';
import ErectileDysfunction from 'src/containers/Forms/asynchronous/ErectileDysfunction/ErectileDysfunction';
import MedicalQuestions from 'src/containers/Forms/asynchronous/medical_related_questions/MedicalQuestions';
import AuthRequired from 'src/containers/Forms/asynchronous/signup_and_sigin/AuthRequired';
import SmsVerification from 'src/containers/Forms/asynchronous/start_with_basics/SmsVerification';
import StartWithBasics from 'src/containers/Forms/asynchronous/start_with_basics/Startwithbasic';
import TreatMentPreference from 'src/containers/Forms/asynchronous/treatment_preferences/TreatMentPreference';
import WelcomeDashboard from 'src/containers/Forms/asynchronous/welcome_dashboard/WelcomeDashboard';

export default function ServicesNewPage() {

	const router = useRouter();
	const { wizard, name, tab } = router.query;

	return (
		<div>
			{wizard === "Erectile_Dysfunction" && <ErectileDysfunction />}
			{wizard === "authentication" && <AuthRequired />}
			{wizard === "welcome" && <WelcomeDashboard />}
			{wizard === "Start_With" && <StartWithBasics />}
			{wizard === "Verification" && <SmsVerification />}
			{wizard === "medical_questions" && <MedicalQuestions />}
			{wizard === "Treatment_Preference" && <TreatMentPreference />}
		</div>
	);
}