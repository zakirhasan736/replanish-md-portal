import { Col, Row } from "antd";
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
			{/* aj pehle bar me comment ka istimal karonga dosre developer
			 ko instruction ke liye tu ibrar ya mene reponsie ko chara
			 hai tu tu deakh lena aesa nahi tu ader he reply de raha hon 
			 is tran pora page bar jayega */}

			{/* <Row gutter={16}> */}
			{/* <Col className="gutter-row" lg={6} md={4} sm={3} xs={2}></Col> */}
			{/* <Col className="gutter-row" lg={12} md={16} sm={18} xs={20}> */}
			<LandingMessage />
			{_render()}
			{/* </Col> */}
			{/* <Col className="gutter-row" lg={6} md={4} sm={3} xs={2}></Col> */}
			{/* </Row> */}
		</div>
	);
};

export default Dashboard;
