import { Space } from "antd";
import TextField from "src/common/textField/index";

const AddressCard = ({ address }) => {
	return (
		<div className="Address-Card">
			<Space direction="vertical" size={20} className="w-100">
				<Space className="w-100 justify-content-between">
					<Space>
						<img src={address["icon"]} className="address-icon" />
						<TextField
							name={address["title"]}
							fontFamily="Proxima-Nova"
							fontSize={14}
							lineHeight={1.5}
						/>
					</Space>
					<Space className="action-icons" size={3}>
						<img
							src={"/assets/icons/deleteIcon.svg"}
							className="c-pointer"
						/>
						<img
							src={"/assets/icons/editIcon.svg"}
							className="c-pointer"
						/>
					</Space>
				</Space>
				<TextField
					name={address["location"]}
					fontFamily="Proxima-Nova"
					fontSize={12}
					lineHeight={1.5}
				/>
			</Space>
		</div>
	);
};

export default AddressCard;
