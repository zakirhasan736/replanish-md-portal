import { useRouter } from "next/router";
import React from "react";
import Dashboard from "src/components/Dashboard";
import SocialMedia from "src/components/socialMediaPage";
import LayoutWrapper from "src/components/socialMediaPage/layoutWrapper";

const Name = () => {
	const { query } = useRouter();

	const { type, q } = query;

	return <> {type === "social" ? <SocialMedia /> : <Dashboard />}</>;
};

export const TeamsPageLayout = (page) => {
	return <LayoutWrapper children={page} />;
};

Name.getLayout = TeamsPageLayout;
export default Name;
