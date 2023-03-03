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
import { FooterIcon } from "src/components/SVGImageIcon/footerIcon";
import { TextLogo } from "src/components/SVGImageIcon/textLogo";
import { IconLogo } from "src/components/SVGImageIcon/iconLogo";
import { TiktokIcon } from "src/components/SVGImageIcon/tiktokIcon";
import { SubMenu } from "./subMenu";
import { FooterListArr } from "./footerData";
import { logout } from "src/components/authPages/auth/services";
import { useDispatch, useSelector } from "react-redux";
import useUser from "src/hooks/useUser";
import { InstagramIcon } from "src/components/SVGImageIcon/instagramIcon";
import { FBIcon } from "src/components/SVGImageIcon/fbIcon";
import { YouTubeIcon } from "src/components/SVGImageIcon/youtubeIcon";

const { useBreakpoint } = Grid;
const { Header, Content, Footer } = Layout;
const { Panel } = Collapse;

const propTypes = {
	children: PropTypes.node.isRequired,
};

const LayoutWrapper = ({ children }) => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { user, removeUser } = useUser();
	const token = user?.token;

	const { isLoading } = useSelector(({ auth }) => auth);
	const currentRoute = router.pathname;
	const { id } = router.query;

	const screens = useBreakpoint();

	const [isMobile, setIsMobile] = React.useState(false);

	// const btnHanlder = () => {
	// 	router.push("/coming-soon");
	// };

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

	return (
		<Layout className="layout">
			{screens.lg ? (
				<Header className="top-header">
					<div className="header-wrapper">
						<div className="header-inline-item">
							<div className="hou-call">
								HOU : &nbsp;
								<a href="tel:832-770-7975">
									{CallIcon}
									&nbsp; (346) 955-7943
								</a>
							</div>
							<div className="training-call ml-lg-3">
								Training :&nbsp;
								<a href="tel:832-953-0313">
									{PhoneTextIcon}
									&nbsp; (346) 222-4596
								</a>
							</div>
						</div>

						<Space
							align="center"
							wrap
							style={{ marginTop: "0.5rem" }}
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
							{/* 
							<Link href="" target="_blank">
								{TwooIcon}
							</Link> */}
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
					<Header className="bottom-header">
						{/* <div className="wrapper-left" /> */}

						<div className="header-wrapper">
							<Link href="/">
								<a
									className={
										currentRoute === "/"
											? "active"
											: "non-active"
									}
								>
									Home
								</a>
							</Link>
							<SubMenu />
							{/* <Link href="/coming-soon">
								<a
									className={
										currentRoute === "/coming-soon"
											? "active"
											: "non-active"
									}
								>
									Membership
								</a>
							</Link> */}
							{/* <Link
								href="https://us.fullscript.com/welcome/replenishmd"
								target="_blank"
							>
								<a
									className={
										currentRoute === "/shop"
											? "active"
											: "non-active"
									}
									target="_blank"
								>
									Shop
								</a>
							</Link> */}
							<Menu
								theme="dark"
								// triggerSubMenuAction="click"
								mode="horizontal"
								className={
									currentRoute.includes("shop")
										? "active-submenu submenu-container"
										: "submenu-container"
								}
								defaultSelectedKeys={["SubMenu"]}
							>
								<Menu.SubMenu
									title="Shop"
									popupClassName="shop-menu-popup-class"
									className="menu-container"
									popupOffset={[0, 0]}
									key="SubMenu"
								>
									<Row gutter={[16, 16]}>
										<Col xs={24}>
											<Link
												href="https://us.fullscript.com/welcome/replenishmd"
												target="_blank"
											>
												<a
													className={
														currentRoute === "/shop"
															? "active-sub"
															: "non-active-sub"
													}
													target="_blank"
												>
													Supplements
												</a>
											</Link>
										</Col>
										<Col xs={24}>
											<Link
												href="https://skinbetter.pro/replenishmd"
												target="_blank"
											>
												<a
													className={
														currentRoute === "/shop"
															? "active-sub"
															: "non-active-sub"
													}
													target="_blank"
												>
													Skincare
												</a>
											</Link>
										</Col>
									</Row>
								</Menu.SubMenu>
							</Menu>
							<Link href="/">
								<div className="logo">
									{IconLogo}
									&nbsp; &nbsp;
									{TextLogo}
								</div>
							</Link>
							{/* <Link href="/specials"> */}
							{/* <Link href="https://replenishmdpromos.com/botox-filler/?rel=fb&service=botox"> */}
							{/* <a
									className={
										currentRoute === "/specials"
											? "active"
											: "non-active"
									}
								> */}
							{/* <a target="_blank" className="non-active"> */}
							{/* Specials */}
							{/* </a> */}
							{/* </Link> */}
							<Link href="/blog">
								<a
									className={
										currentRoute === "/blog"
											? "active"
											: "non-active"
									}
								>
									Blog
								</a>
							</Link>
							{/* <Link href="/team-meet"> */}
							<Link href="https://zp0pw7c2u3w.typeform.com/replenishmd">
								{/* <a
									className={
										currentRoute === "/team-meet"
											? "active"
											: "non-active"
									}
								> */}
								<a target="_blank" className="non-active">
									Become a provider
								</a>
							</Link>
							{/* <Divider
								type="vertical"
								className="vertical-divider"
							/> */}
							{/* <Button
								size="middle"
								ghost
								className="border-btn"
								// onClick={bookingLink}
							>
								<Link href="https://replenishmd.janeapp.com/">
									<a target="_blank">Book Now</a>
								</Link>
							</Button> */}
							{/* <Divider
								type="vertical"
								className="vertical-divider"
							/> */}
						</div>
						<div className="wrapper-right">
							{token ? (
								<Button
									size="middle"
									type="primary"
									className="primary-btn"
									onClick={logoutHanlder}
									loading={isLoading}
								>
									Logout
								</Button>
							) : (
								<Space>
									<Button
										size="middle"
										type="primary"
										className="primary-btn"
										// onClick={btnHanlder}
									>
										<Link href="/login">Login to rmd</Link>
									</Button>
									<Button
										size="middle"
										type="primary"
										className="secondary-btn"
										// onClick={btnHanlder}
									>
										<Link href="/sign-up">
											signup to rmd
										</Link>
									</Button>
								</Space>
							)}
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
							<Link href="/">
								<a
									className={
										currentRoute === "/"
											? "active"
											: "non-active"
									}
								>
									Home
								</a>
							</Link>

							<Menu
								theme="dark"
								// triggerSubMenuAction="click"
								mode="inline"
								className={
									currentRoute.includes("services")
										? "active-submenu submenu-container"
										: "submenu-container"
								}
								defaultSelectedKeys={["SubMenu"]}
							>
								<Menu.SubMenu
									title="Services"
									popupClassName="submenu-popup-class"
									className="menu-container"
									// popupOffset={[0, 0]}
									key="SubMenu"
								>
									<Row gutter={[16, 16]}>
										<Col xs={24} lg={8}>
											<Link href="/services/botox-dermal-filler">
												<a
													className={
														id ===
														"botox-dermal-filler"
															? "active"
															: "non-active"
													}
												>
													<Image
														src="/icons/dermal-filler.svg"
														className="submenu-icon mobile-icon"
														alt="icon"
														preview={false}
													/>
													Botox/Dermal Fillers
												</a>
											</Link>
										</Col>
										<Col xs={24} lg={8}>
											<Link
												href="/services/bioidentical-hormone-replacement-therapy"
												className="submenu-link"
											>
												<a
													className={
														id?.includes(
															"hormone-replacement"
														)
															? "active"
															: "non-active"
													}
												>
													<Image
														src="/icons/hormonal-therapy.svg"
														className="submenu-icon mobile-icon"
														alt="icon"
														preview={false}
													/>
													Bioidentical Hormone
													Replacement Therapy
												</a>
											</Link>
										</Col>
										<Col xs={24} lg={8}>
											<Link
												href="/services/peptide-therapy"
												className="submenu-link"
											>
												<a
													className={
														id?.includes("peptide")
															? "active"
															: "non-active"
													}
												>
													<Image
														src="/icons/slim-body.svg"
														className="submenu-icon mobile-icon"
														alt="icon"
														preview={false}
													/>
													Peptide Therapy (Sermorelin/
													Ipamorelin)
												</a>
											</Link>
										</Col>
										<Col xs={24} lg={8}>
											<Link
												href="/services/botox-dermal-filler-parties"
												className="submenu-link"
											>
												<a
													className={
														id ===
														"botox-dermal-filler-parties"
															? "active"
															: "non-active"
													}
												>
													<Image
														src="/icons/dermal-filler-parties.svg"
														className="submenu-icon mobile-icon"
														alt="icon"
														preview={false}
													/>
													Botox / Dermal Filler
													Parties
												</a>
											</Link>
										</Col>
										<Col xs={24} lg={8}>
											<Link
												href="/services/tesosterone-therapy"
												className="submenu-link"
											>
												<a
													className={
														id?.includes(
															"tesosterone"
														)
															? "active"
															: "non-active"
													}
												>
													<Image
														src="/icons/hormonal-ring.svg"
														className="submenu-icon mobile-icon"
														alt="icon"
														preview={false}
													/>
													{/* {HormonalRingIcon} */}
													Testosterone Therapy
												</a>
											</Link>
										</Col>
										<Col xs={24} lg={8}>
											<Link
												href="/services/micronutrient-testing"
												className="submenu-link"
											>
												<a
													className={
														id?.includes(
															"micronutrient"
														)
															? "active"
															: "non-active"
													}
												>
													<Image
														src="/icons/flask.svg"
														className="submenu-icon mobile-icon"
														alt="icon"
														preview={false}
													/>
													{/* {FlaskIcon} */}
													Mobile Labs/ Micronutrient
													Testing
												</a>
											</Link>
										</Col>
										<Col xs={24} lg={8}>
											<Link
												href="/services/IV-therapy"
												className="submenu-link"
											>
												<a
													className={
														id?.includes(
															"IV-therapy"
														)
															? "active"
															: "non-active"
													}
												>
													<Image
														src="/icons/iv-bag.svg"
														className="submenu-icon mobile-icon"
														alt="icon"
														preview={false}
													/>
													{/* {IVBagIcon} */}
													IV therapy
												</a>
											</Link>
										</Col>
										<Col xs={24} lg={8}>
											<Link
												href="/services/medical-weight-loss"
												className="submenu-link"
											>
												<a
													className={
														id?.includes(
															"medical-weight-loss"
														)
															? "active"
															: "non-active"
													}
												>
													<Image
														src="/icons/diet.svg"
														className="submenu-icon mobile-icon"
														alt="icon"
														preview={false}
													/>
													{/* {DietIcon} */}
													Medical Weight Loss
												</a>
											</Link>
										</Col>
										<Col xs={24} lg={8}>
											<Link
												href="/services/xeo"
												className="submenu-link"
											>
												<a
													className={
														id?.includes("xeo")
															? "active"
															: "non-active"
													}
												>
													<Image
														src="/icons/xeo-icon.svg"
														className="submenu-icon mobile-icon"
														alt="icon"
														preview={false}
													/>
													{/* {DietIcon} */}
													XEO
												</a>
											</Link>
										</Col>
										<Col xs={24} lg={8}>
											<Link
												href="/services/secret-RF"
												className="submenu-link"
											>
												<a
													className={
														id?.includes(
															"secret-RF"
														)
															? "active"
															: "non-active"
													}
												>
													<Image
														src="/icons/secretRf-icon.svg"
														className="submenu-icon mobile-icon"
														alt="icon"
														preview={false}
													/>
													{/* {DietIcon} */}
													SecretRf
												</a>
											</Link>
										</Col>
									</Row>
								</Menu.SubMenu>
							</Menu>

							{/* <Link href="/coming-soon">
								<a
									className={
										currentRoute === "/coming-soon"
											? "active"
											: "non-active"
									}
								>
									Membership
								</a>
							</Link> */}
							{/* <Link
								href="https://us.fullscript.com/welcome/replenishmd"
								target="_blank"
							>
								<a
									className={
										currentRoute === "/shop"
											? "active"
											: "non-active"
									}
									target="_blank"
								>
									Shop
								</a>
							</Link> */}
							<Menu
								theme="dark"
								// triggerSubMenuAction="click"
								mode="inline"
								className={
									currentRoute.includes("shop")
										? "active-submenu submenu-container"
										: "submenu-container"
								}
								defaultSelectedKeys={["SubMenu"]}
							>
								<Menu.SubMenu
									title="Shop"
									popupClassName="shop-menu-popup-class"
									className="menu-container"
									popupOffset={[0, 0]}
									key="SubMenu"
								>
									<Row gutter={[0, 0]}>
										<Col xs={24}>
											<Link
												href="https://us.fullscript.com/welcome/replenishmd"
												target="_blank"
											>
												<a
													className={
														currentRoute === "/shop"
															? "active-sub"
															: "non-active-sub"
													}
													target="_blank"
												>
													Supplements
												</a>
											</Link>
										</Col>
										<Col xs={24}>
											<Link
												href="https://skinbetter.pro/replenishmd"
												target="_blank"
											>
												<a
													className={
														currentRoute === "/shop"
															? "active-sub"
															: "non-active-sub"
													}
													target="_blank"
												>
													Skincare
												</a>
											</Link>
										</Col>
									</Row>
								</Menu.SubMenu>
							</Menu>
							{/* <Link href="/specials">
								<a
									className={
										currentRoute === "/specials"
											? "active"
											: "non-active"
									}
								>
									Specials
								</a>
							</Link> */}

							{/* <Link href="/specials"> */}
							{/* <Link href="https://replenishmdpromos.com/botox-filler/?rel=fb&service=botox"> */}
							{/* <a
									className={
										currentRoute === "/specials"
											? "active"
											: "non-active"
									}
								> */}
							{/* <a target="_blank" className="non-active"> */}
							{/* Specials */}
							{/* </a> */}
							{/* </Link> */}

							<Link href="/blog">
								<a
									className={
										currentRoute === "/blog"
											? "active"
											: "non-active"
									}
								>
									Blog
								</a>
							</Link>
							{/* <Link href="/team-meet">
								<a
									className={
										currentRoute === "/team-meet"
											? "active"
											: "non-active"
									}
								>
									Become a provider
								</a>
							</Link> */}
							{/* <Link href="/team-meet"> */}
							<Link href="https://zp0pw7c2u3w.typeform.com/replenishmd">
								{/* <a
									className={
										currentRoute === "/team-meet"
											? "active"
											: "non-active"
									}
								> */}
								<a target="_blank" className="non-active">
									Become a provider
								</a>
							</Link>
							<div className="side-nav-btns">
								{/* <Button
									size="middle"
									ghost
									className="border-btn"
									// onClick={bookingLink}
								>
									<Link href="https://replenishmd.janeapp.com/">
										<a target="_blank">Book Now</a>
									</Link>
								</Button> */}
								{token ? (
									<Button
										size="middle"
										type="primary"
										className="primary-btn"
										onClick={logoutHanlder}
										loading={isLoading}
									>
										Logout
									</Button>
								) : (
									<>
										<Button
											size="middle"
											type="primary"
											className="primary-btn"
											// onClick={btnHanlder}
										>
											<Link href="/login">Login</Link>
										</Button>
										<Button
											size="middle"
											type="primary"
											className="secondary-btn"
											// onClick={btnHanlder}
										>
											<Link href="/sign-up">signup</Link>
										</Button>
									</>
								)}
							</div>

							<div className="header-inline-item">
								<div className="hou-call">
									HOU : &nbsp;
									<a href="tel:832-770-7975">
										{CallIcon}
										&nbsp; (346) 955-7943
									</a>
								</div>
								<div className="training-call">
									Training :&nbsp;
									<a href="tel:832-953-0313">
										{PhoneTextIcon}
										&nbsp; (346) 222-4596
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
								{/* 
							<Link href="" target="_blank">
								{TwooIcon}
							</Link> */}
							</Space>
						</div>
					</Header>
				</div>
			</Drawer>
			<Content>
				<div className="site-layout-content">{children}</div>
			</Content>
			<Footer className="footer-container">
				<div className="layout-wrapper">
					{/* <Row gutter={[32, 32]}> */}
					{/* <Col xs={24} lg={6}> */}
					{FooterIcon}
					{/* <br /> */}

					{/* </Col> */}
					{/* <Col xs={0} sm={24} lg={18}>
							<List
								className="footer-list"
								header={
									<Row>
										{FooterListArr?.map((list, key) => (
											<Col xs={6} key={key}>
												<p className="list-heading">
													{list?.title}
												</p>
											</Col>
										))}
									</Row>
								}
								grid={{
									xs: 4,
									sm: 4,
									md: 4,
									lg: 4,
									xl: 4,
									xxl: 4,
									gutter: [0, 64],
								}}
								dataSource={FooterListArr}
								renderItem={(item) => (
									<List.Item>
										{item?.list?.map((list, key) => (
											<List.Item
												key={key}
												className="list-item"
											>
												<Link href={list["href"]}>
													{list["label"]}
												</Link>
											</List.Item>
										))}
									</List.Item>
								)}
							/>
						</Col>
						<Col xs={24} sm={0}>
							<Collapse
								accordion
								ghost
								expandIconPosition="end"
								className="footer-collapse"
							>
								{FooterListArr?.map((item, index) => {
									const key = index + 1;
									return (
										<Panel header={item?.title} key={key}>
											{item?.list?.map((footerItem) => (
												<Link
													key={key}
													href="/coming-soon"
												>
													<p>{footerItem}</p>
												</Link>
											))}
										</Panel>
									);
								})}
							</Collapse>
						</Col> */}
					{/* </Row> */}

					{/* <Divider className="footer-divider" /> */}
					<p className="term-text">
						© 2022-23 ReplenishMD ‧ Terms of Use ‧ Privacy Policy
					</p>
					<Space align="center">
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

						{/* <Link href="" target="_blank">
									{TwooIcon}
								</Link> */}
					</Space>
				</div>
			</Footer>
		</Layout>
	);
};

LayoutWrapper.propTypes = propTypes;

export default LayoutWrapper;
