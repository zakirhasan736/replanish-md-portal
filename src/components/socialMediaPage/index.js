import { useRouter } from "next/router";

import LandingMessage from "../socialMediaPage/landingpage/LandingMessage";
import Forum from "./Forum";
import TopicDetail from "./Forum/TopicDetail";
import Topics from "./Forum/Topics";

const SocialMedia = () => {
	const router = useRouter();
	const { type, name } = router.query;

	const _render = () => {
		switch (name) {
			case "forum":
				return <Forum />;
			// return <Topics />;
			// return <TopicDetail />;
		}
	};
	return (
		<div
			className="layout"
			style={{ background: "#fff !important", marginTop: "30px" }}
		>
			<div className="my-4"> {_render()}</div>
		</div>
	);
};

export default SocialMedia;
