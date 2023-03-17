import React from "react";
import { useRouter } from "next/router";
import { Image, Row, Col, Menu } from "antd";
import Link from "next/link";
import PropTypes from "prop-types";

const propTypes = {
	subMenuMode: PropTypes.string.isRequired,
};

export const SubMenu = () => {
	SubMenu.propTypes = propTypes;

	const router = useRouter();
	const { id } = router.query;
	const currentRoute = router.pathname;

	return (
		<Menu
			theme="dark"
			mode="horizontal"
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
				popupOffset={[0, 0]}
				key="SubMenu"
			>
				<Row gutter={[16, 16]}>
					<Col xs={8}>
						<Link href="/services/botox-dermal-filler">
							<a
								className={
									id === "botox-dermal-filler"
										? "active-sub"
										: "non-active-sub"
								}
							>
								<Image
									src="/icons/dermal-filler.svg"
									className="submenu-icon"
									alt="icon"
									preview={false}
								/>
						
								Botox/Dermal Fillers
							</a>
						</Link>
					</Col>
					<Col xs={8}>
						<Link
							href="/services/bioidentical-hormone-replacement-therapy"
							className="submenu-link"
						>
							<a
								className={
									id?.includes("hormone-replacement")
										? "active-sub"
										: "non-active-sub"
								}
								style={{ display: "block" }}
							>
								<Image
									src="/icons/hormonal-therapy.svg"
									className="submenu-icon"
									alt="icon"
									preview={false}
									style={{ marginBottom: "0.5rem" }}
								/>
							
								Bioidentical Hormone Replacement Therapy
							</a>
						</Link>
					</Col>
					<Col xs={8}>
						<Link
							href="/services/peptide-therapy"
							className="submenu-link"
						>
							<a
								className={
									id?.includes("peptide")
										? "active-sub"
										: "non-active-sub"
								}
							>
								<Image
									src="/icons/slim-body.svg"
									className="submenu-icon"
									alt="icon"
									preview={false}
								/>
								Peptide Therapy (Sermorelin/ Ipamorelin)
							</a>
						</Link>
					</Col>
					<Col xs={8}>
						<Link
							href="/services/botox-dermal-filler-parties"
							className="submenu-link"
						>
							<a
								className={
									id === "botox-dermal-filler-parties"
										? "active-sub"
										: "non-active-sub"
								}
							>
								<Image
									src="/icons/dermal-filler-parties.svg"
									className="submenu-icon"
									alt="icon"
									preview={false}
								/>
								Botox / Dermal Filler Parties
							</a>
						</Link>
					</Col>
					<Col xs={8}>
						<Link
							href="/services/tesosterone-therapy"
							className="submenu-link"
						>
							<a
								className={
									id?.includes("tesosterone")
										? "active-sub"
										: "non-active-sub"
								}
							>
								<Image
									src="/icons/hormonal-ring.svg"
									className="submenu-icon"
									alt="icon"
									preview={false}
								/>
								Testosterone Therapy
							</a>
						</Link>
					</Col>
					<Col xs={8}>
						<Link
							href="/services/micronutrient-testing"
							className="submenu-link"
						>
							<a
								className={
									id?.includes("micronutrient")
										? "active-sub"
										: "non-active-sub"
								}
							>
								<Image
									src="/icons/flask.svg"
									className="submenu-icon"
									alt="icon"
									preview={false}
								/>
								Mobile Labs/ Micronutrient Testing
							</a>
						</Link>
					</Col>
					<Col xs={8}>
						<Link
							href="/services/IV-therapy"
							className="submenu-link"
						>
							<a
								className={
									id?.includes("IV-therapy")
										? "active-sub"
										: "non-active-sub"
								}
							>
								<Image
									src="/icons/iv-bag.svg"
									className="submenu-icon"
									alt="icon"
									preview={false}
								/>
								IV therapy
							</a>
						</Link>
					</Col>
					<Col xs={8}>
						<Link
							href="/services/medical-weight-loss"
							className="submenu-link"
						>
							<a
								className={
									id?.includes("medical-weight-loss")
										? "active-sub"
										: "non-active-sub"
								}
							>
								<Image
									src="/icons/diet.svg"
									className="submenu-icon"
									alt="icon"
									preview={false}
								/>
								Medical Weight Loss
							</a>
						</Link>
					</Col>
					<Col xs={8}>
						<Link href="/services/xeo" className="submenu-link">
							<a
								className={
									id?.includes("xeo")
										? "active-sub"
										: "non-active-sub"
								}
							>
								<Image
									src="/icons/xeo-icon.svg"
									className="submenu-icon"
									alt="icon"
									preview={false}
								/>
								XEO
							</a>
						</Link>
					</Col>
					<Col xs={8}>
						<Link
							href="/services/secret-RF"
							className="submenu-link"
						>
							<a
								className={
									id?.includes("secret-RF")
										? "active-sub"
										: "non-active-sub"
								}
							>
								<Image
									src="/icons/secretRf-icon.svg"
									className="submenu-icon"
									alt="icon"
									preview={false}
								/>
								SecretRf
							</a>
						</Link>
					</Col>
				</Row>
			</Menu.SubMenu>
		</Menu>
	);
};

// export default SubMenu;
