import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en" dir="ltr">
				<Head>
					<meta charSet="utf-8" />
					{/* PWA */}
					<link rel="manifest" href="/manifest.json" />

					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-capable" content="yes" />

					<meta name="msapplication-starturl" content="/" />

					<link
						rel="shortcut icon"
						type="image/x-icon"
						sizes="512x512"
						href="/icons/logo2.png"
					/>
					<link rel="shortcut icon" href="/icons/logo2.png" />

					<link
						rel="icon"
						type="image/png"
						sizes="512x512"
						href="/icons/512x512.png"
					/>
					<link
						rel="apple-touch-icon"
						type="image/png"
						sizes="512x512"
						href="/icons/512x512.png"
					/>

					<link
						rel="icon"
						type="image/png"
						sizes="192x192"
						href="/icons/192x192.png"
					/>
					<link
						rel="apple-touch-icon"
						type="image/png"
						sizes="192x192"
						href="/icons/192x192.png"
					/>

					{/* END PWA */}

					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
