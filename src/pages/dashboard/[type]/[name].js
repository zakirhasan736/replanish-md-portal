import React from "react";
import Dashboard from "src/components/Dashboard";
import LayoutWrapper from "src/components/socialMediaPage/layoutWrapper";

const Name = () => {
	return <Dashboard />;
};

export const TeamsPageLayout = (page) => {
	return <LayoutWrapper children={page} />;
};

Name.getLayout = TeamsPageLayout;
export default Name;
