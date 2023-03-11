import React from "react";
import {
	Layout,
	Row,
	Col,
	Grid,
	Drawer,
	Collapse,
	notification,
} from "antd";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { MenuOutlined } from "@ant-design/icons";


import { logout } from "src/components/authPages/auth/services";
import { useDispatch} from "react-redux";
import useUser from "src/hooks/useUser";

import SideBar from "../SideBar";
import RightSideBar from "../RightSideBar";

import RightSideBarHeader from "../RightSideBarHeader";
const { useBreakpoint } = Grid;
const { Header, Content } = Layout;
// const { Panel } = Collapse;

const propTypes = {
	children: PropTypes.node.isRequired,
};

const LayoutWrapper = ({ children }) => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { user, removeUser } = useUser();
	const token = user?.token;

	// const { isLoading } = useSelector(({ auth }) => auth);
	// const currentRoute = router.pathname;
	// const { id } = router.query;

	const screens = useBreakpoint();

	// const [isMobile, setIsMobile] = React.useState(false);

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
	const [tabKey, setTabKey] = React.useState(1);
	const [open, setOpen] = React.useState(false);
	const handleMenuTab = (e) => {
		setTabKey(e);
	};
	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};
	return (
		<div className="social-layout-wrapper">
			<Layout
				className="layout social-media"
				style={{ background: "#fff" }}
			>
				{screens.sm ? (
					<Row gutter={48} justify="space-between">
						<Col
							className="gutter-row fixed-width-left"
							xs={6}
							sm={6}
							md={6}
							lg={6}
							xl={6}
							xxl={6}
						>
							<SideBar />
						</Col>
						<Col
							className="gutter-row fixed-width-middle"
							xs={11}
							sm={11}
							md={11}
							lg={11}
							xl={11}
							xxl={11}
						>
							{children}
						</Col>
						<Col
							className="gutter-row fixed-width-right"
							xs={7}
							sm={7}
							md={7}
							lg={7}
							xl={7}
							xxl={7}
						>
							<RightSideBar />
						</Col>
					</Row>
				) : (
					<div className="social-media">
						<Header>
							<Row justify="space-between" align="middle">
								<Col span={9}>
									<img src="icons/logo.svg" alt="logo" />
								</Col>
								<Col span={3}>
									<MenuOutlined
										style={{ fontSize: 20, color: "#000" }}
										onClick={showDrawer}
									/>
								</Col>
							</Row>
							<Drawer
								closable={false}
								className="social-media mobile-drawer"
								width={318}
								title={<RightSideBarHeader />}
								placement="right"
								onClose={onClose}
								open={open}
							>
								<SideBar />
							</Drawer>
						</Header>
						<Content style={{ padding: "0 20px" }}>
							<Row>
								<Col
									className="gutter-row"
									xs={24}
									sm={24}
									md={24}
									lg={24}
									xl={24}
									xxl={24}
								>
									{children}
								</Col>
							</Row>
						</Content>
					</div>
				)}
			</Layout>
		</div>
	);
};

LayoutWrapper.propTypes = propTypes;

export default LayoutWrapper;
