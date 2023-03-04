import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Row, Space } from "antd";
import TextField from "src/common/textField/index";
import AddressCard from "./AddressCard";

const AddressTab = () => {
	const allAddress = [
		{
			title: "Default Address",
			location: "7054 Brandy Spring, North Maureen, Pennsylvania- 81683",
			icon: "/assets/icons/homeIcon.svg",
		},
		{
			title: "Office Address",
			location: "7054 Brandy Spring, North Maureen, Pennsylvania- 81683",
			icon: "/assets/icons/officeIcon.svg",
		},
	];
	return (
		<div className="Address-Tab">
			<Space className="w-100 justify-content-between">
				<TextField
					name="Address"
					fontSize={18}
					fontFamily="Proxima-Nova"
				/>
				<Button shape="round" className="btn-green">
					Add New Address
					<PlusOutlined />
				</Button>
			</Space>
			<Row gutter={[24, 24]}>
				{allAddress.map((address, key) => (
					<Col sm={12} xs={24} key={key}>
						<AddressCard address={address} />
					</Col>
				))}
			</Row>
		</div>
	);
};

export default AddressTab;
