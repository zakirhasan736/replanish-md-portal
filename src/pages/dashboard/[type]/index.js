import React from "react";
import LayoutWrapper from "src/components/socialMediaPage/layoutWrapper/index";
import MainComponent from "src/components/socialMediaPage/layoutWrapper/Main";

const TeamsPage = () => {
	return <MainComponent />;
};

export const TeamsPageLayout = (page) => {
	return <LayoutWrapper children={page} />;
};

TeamsPage.getLayout = TeamsPageLayout;

export default TeamsPage;
