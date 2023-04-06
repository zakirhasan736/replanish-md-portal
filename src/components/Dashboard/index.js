import { useRouter } from "next/router";
import Consultations from "./Consultations";
import ExploreTreatments from "./ExploreTreatments";
import MedicationHistory from "./MedicationHistory";
import Labs from "./Labs";
import Notifications from "./Notifications";
import Account from "./Account";
import LandingMessage from "../socialMediaPage/landingpage/LandingMessage";

const Dashboard = () => {
	const router = useRouter();
	const { type, name } = router.query;

	const _render = () => {
		switch (name) {
			case "explore-treatments":
				return <ExploreTreatments />;
			case "consultations":
				return <Consultations />;
			case "medication-history":
				return <MedicationHistory />;
			case "labs":
				return <Labs />;
			case "notifications":
				return <Notifications />;
			case "account":
				return <Account />;
		}
	};
	return (
		<div
			className="layout"
			style={{ background: "#fff !important", marginTop: "30px" }}
		>
			<LandingMessage />
			<div className="my-4"> {_render()}</div>
		</div>
	);
};

export default Dashboard;
