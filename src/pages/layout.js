const Layout = ({ Component, pageProps }) => {
	if (Component.getLayout) {
		return Component.getLayout(<Component {...pageProps} />);
	} else {
		return <Component {...pageProps} />;
	}
};

export default Layout;
