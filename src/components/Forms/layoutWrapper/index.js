import React from "react";

import {
	Layout,
	Image,
	Button,
	Row,
	List,
	Col,
	Space,
	Divider,
	Menu,
	Grid,
	Drawer,
	Collapse,
	Affix,
	notification,
	Dropdown,
} from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { AlignLeftOutlined } from "@ant-design/icons";
import { CallIcon } from "src/components/SVGImageIcon/callIcon";
import { PhoneTextIcon } from "src/components/SVGImageIcon/phoneTextIcon";
import { TextLogo } from "src/components/SVGImageIcon/textLogo";
import { IconLogo } from "src/components/SVGImageIcon/iconLogo";
import { TiktokIcon } from "src/components/SVGImageIcon/tiktokIcon";
import { logout } from "src/components/authPages/auth/services";
import { useDispatch, useSelector } from "react-redux";
import useUser from "src/hooks/useUser";
import { InstagramIcon } from "src/components/SVGImageIcon/instagramIcon";
import { FBIcon } from "src/components/SVGImageIcon/fbIcon";
import { YouTubeIcon } from "src/components/SVGImageIcon/youtubeIcon";
import { HiArrowLeft } from "react-icons/hi";


const { useBreakpoint } = Grid;
const { Header, Content } = Layout;


const propTypes = {
	children: PropTypes.node.isRequired,
	SiteTitle: PropTypes.string,
};


const LayoutWrapper = ({ children, SiteLogo, BackToPrev, NextPage, SiteTitle, BgclassName, handleStep, currval,topHeaderName,bottomHeaderName,,isgoogle }) => {

	const router = useRouter();
	const dispatch = useDispatch();
	const { user, removeUser } = useUser();
	const token = user?.token;

	const { isLoading } = useSelector(({ auth }) => auth);
	const currentRoute = router.pathname;
	const { id } = router.query;

	const screens = useBreakpoint();

	const [isMobile, setIsMobile] = React.useState(false);



	const logoutHanlder = async () => {
		const payload = {
			refresh: user?.refresh,
			token,
		};

		try {
			const response = await dispatch(logout(payload)).unwrap();
			console.log("response =>", response);

			if (response) {
				removeUser();
				router.reload();
				notification.success({
					message: response?.message,
				});
			}
		} catch (error) {
			console.log("error =>", error);
		}
	};
	console.log("user", user);

	const handleback = () => {
		if (isgoogle) {
			handleStep(currval - 2)
		}
		else {
			handleStep(currval - 1)
		}
	}

	return (
		<Layout className="layout">
			<div className={`forms-layout--wrapper  ${BgclassName}`}>
				{screens.lg ? (
					<Header className={`top-header ${topHeaderName}`}>
						<div className="header-wrapper">
							<div className="header-inline-item">
								<div className="hou-call">
									HOU : &nbsp;
									<a href="tel:832-770-7975">
										{CallIcon}
										&nbsp; (832) 770-7975
									</a>
								</div>
								<div className="training-call ml-lg-3">
									Training :&nbsp;
									<a href="tel:832-953-0313">
										{PhoneTextIcon}
										&nbsp; (832) 953-0313
									</a>
								</div>
							</div>

							<Space
								align="center"
								wrap
								style={{ marginTop: "0.5rem" }}
								className="socials-widget"
							>
								<Link href="https://www.facebook.com/replenishtx">
									<a target="_blank">{FBIcon}</a>
								</Link>
								<Link href="http://www.instagram.com/replenish.md">
									<a target="_blank">{InstagramIcon}</a>
								</Link>
								<Link href="https://www.tiktok.com/@replenishmd">
									<a target="_blank">{TiktokIcon}</a>
								</Link>
								<Link href="https://www.youtube.com/channel/UCydwvyloML68woZYVKZf0cA">
									<a target="_blank">{YouTubeIcon}</a>
								</Link>

							</Space>
						</div>
					</Header>
				) : (
					<Affix offsetTop={0} style={{ zIndex: 16 }}>
						<Header className="top-header">
							<div className="header-wrapper">
								<AlignLeftOutlined
									className="side-nav-icon"
									onClick={() => setIsMobile(true)}
								/>
								{/* <div className="logo">
								{IconLogo}
								&nbsp; &nbsp;
								{TextLogo}
							</div> */}
								<Link href="/">
									<div className="logo">
										{IconLogo}
										&nbsp; &nbsp;
										{TextLogo}
									</div>
								</Link>
							</div>
						</Header>
					</Affix>
				)}

				{screens.lg && (
					<Affix offsetTop={0} style={{ zIndex: 16 }}>
						<Header className={`bottom-header  ${bottomHeaderName}`}>
							<div className="header-wrapper">

								{SiteLogo &&
									<Link href="/">
										<div className="logo">
											{IconLogo}
											&nbsp; &nbsp;
											{TextLogo}
										</div>
									</Link>}

								{BackToPrev &&
									<button onClick={() => handleback()} className="back-to-preview"><HiArrowLeft /></button>
								}

								{NextPage &&
									<h3 className="site-title">{SiteTitle}</h3>
								}

								<Button
									size="large"
									ghost
									className="border-btn help-button"

								>
									<Link href="/">
										<a target="_blank">Help?</a>
									</Link>
								</Button>
							</div>
						</Header>
					</Affix>
				)}

				<Drawer
					title=""
					placement="left"
					onClose={() => setIsMobile(false)}
					visible={isMobile}
					width="75%"
					className="side-drawer"
				>
					<div className="drawer-wrapper-bg">
						<Header className="bottom-header">
							<div className="header-wrapper">

								<div className="header-inline-item">
									<div className="hou-call">
										HOU : &nbsp;
										<a href="tel:832-770-7975">
											{CallIcon}
											&nbsp; (832) 770-7975
										</a>
									</div>
									<div className="training-call">
										Training :&nbsp;
										<a href="tel:832-953-0313">
											{PhoneTextIcon}
											&nbsp; (832) 953-0313
										</a>
									</div>
								</div>

								<Space
									align="center"
									wrap
									style={{ marginTop: "2rem" }}
									size="middle"
								>
									<Link href="https://www.facebook.com/replenishtx">
										<a target="_blank">{FBIcon}</a>
									</Link>
									<Link href="http://www.instagram.com/replenish.md">
										<a target="_blank">{InstagramIcon}</a>
									</Link>
									<Link href="https://www.tiktok.com/@replenishmd">
										<a target="_blank">{TiktokIcon}</a>
									</Link>
									<Link href="https://www.youtube.com/channel/UCydwvyloML68woZYVKZf0cA">
										<a target="_blank">{YouTubeIcon}</a>
									</Link>

								</Space>

							</div>
						</Header>
					</div>
				</Drawer>

				<Content>
					<div className="site-layout-content">{children}</div>
				</Content>

			</div>
		</Layout>
	);
};

LayoutWrapper.propTypes = propTypes;

export default LayoutWrapper;
