import { Router, useRouter } from "next/router";
import Script from "next/script";
import React from "react";
import { Provider } from "react-redux";
import LayoutWrapper from "src/components/socialMediaPage/layoutWrapper";
import { store } from "../store";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import RouteGuard from "./routeGuard";
import Layout from "./layout";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

require("src/styles/index.less");

//this is for calling .fromNow() method in dayjs
dayjs.extend(relativeTime);

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Script
				strategy="afterInteractive"
				src="https://www.googletagmanager.com/ns.html?id=GTM-W6RQ53H"
			/>

			<Script
				strategy="afterInteractive"
				src="https://www.googletagmanager.com/gtag/js?id=G-3BPWZTWF90"
			/>

			<Script id="google-analytics" strategy="afterInteractive">
				{`
		(function(w, d, s, l, i) {
			w[l] = w[l] || [];
			w[l].push({
			  'gtm.start': new Date().getTime(),
			  event: 'gtm.js'
			});
			var f = d.getElementsByTagName(s)[0],
			  j = d.createElement(s),
			  dl = l != 'dataLayer' ? '&l=' + l : '';
			j.async = true;
			j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
			f.parentNode.insertBefore(j, f);
		  })(window, document, 'script', 'dataLayer', 'GTM-W6RQ53H');

		  window.dataLayer = window.dataLayer || [];
  		  function gtag(){dataLayer.push(arguments);}
  		  gtag('js', new Date());
  		  gtag('config', 'G-3BPWZTWF90');
	`}
			</Script>

			<chat-widget
				// style="--chat-widget-primary-color: #333330; --chat-widget-active-color:#333330 ;--chat-widget-bubble-color: #333330"
				location-id="jmeM6pPlpqT4P12zPz1g"
				prompt-avatar="https://widgets.leadconnectorhq.com/chat-widget/assets/defaultAvatar.png"
				agency-name="ReplenishMD"
				agency-website=""
			/>

			<Script
				strategy="afterInteractive"
				src="https://widgets.leadconnectorhq.com/loader.js"
				data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
			/>

			<Provider store={store}>
				<Layout Component={Component} pageProps={pageProps} />
			</Provider>
		</>
	);
}
