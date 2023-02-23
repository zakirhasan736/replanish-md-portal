import { Image } from "antd";
import { useRouter } from "next/router";
import React from "react";
import PageContentHeader from "src/common/pageContentHeader";
import LayoutWrapper from "src/components/homepage/layoutWrapper";
import Testimonials from "src/components/homepage/testimonials";
import TeamExperts from "src/components/teamMeetPage/teamExperts";

const TeamMeet = () => {
	const router = useRouter();

	const btnHanlder = () => {
		router.push("/coming-soon");
	};
	return (
		<LayoutWrapper>
			<PageContentHeader
				title="Generic Meet the Provider "
				content={`
					
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Et fermentum at massa id pretium consequat. Venenatis
						egestas tincidunt lectus eu aenean. Tristique felis non
						enim libero, volutpat quis amet proin purus. Enim, id in
						at eu enim nunc purus nunc augue. Risus enim non varius
						fermentum sed ac fringilla pellentesque vitae. Risus sed
						lectus dui malesuada lacus, vehicula.
						
						Scelerisque cursus est a facilisi libero tellus egestas.
						Elit auctor dolor, fringilla sed fames. Diam hac
						ultricies elementum, cursus. Augue ornare.
				`}
				btnText="meet the team"
				onClick={btnHanlder}
			/>
			<Image
				src="/images/team-meet.png"
				alt="team meet"
				preview={false}
				width="100%"
			/>
			<TeamExperts />
			<Testimonials />
		</LayoutWrapper>
	);
};

export default TeamMeet;
