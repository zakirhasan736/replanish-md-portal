import { Space } from "antd";
import CommonImagePicker from "src/common/CommonImagePicker";
import CommonTabs from "src/common/CommonTabs";
import TextField from "src/common/textField/index";
import AddressTab from "./AddressTab/index";
import SecurityTab from "./SecurityTab";
import BillingInformation from "./BillingInformation";
import { useRouter } from "next/router";

const Account = () => {
	const router = useRouter();
	const { key } = router.query;
	const pathname = router.asPath.split("?")[0];

	const tabs = [
		{
			key: "address",
			label: `Address`,
			children: <AddressTab />,
		},
		{
			key: "security",
			label: `Security`,
			children: <SecurityTab />,
		},
		{
			key: "billing-info",
			label: `Billing Infomation`,
			children: <BillingInformation />,
		},
	];

	return (
		<div className="Dashboard-Profile">
			<div className="Profile-Header">
				<img
					src="/assets/images/profileHeader.png"
					className="bg-image"
				/>
				<div className="profile-image">
					<CommonImagePicker />
					<Space direction="vertical" size={0}>
						<TextField
							name={"Allison Mango"}
							fontSize={18}
							fontFamily="Proxima-Nova"
						/>
						<TextField
							name={"Doctor"}
							fontSize={13}
							fontFamily="Proxima-Nova"
						/>
						<TextField
							name={"Allison Mango@email.com"}
							fontSize={13}
							fontFamily="Proxima-Nova"
						/>
					</Space>
				</div>
			</div>

			<CommonTabs
				defaultActiveKey={"address"}
				activeKey={key}
				items={tabs}
				onTabPress={(e) =>
					router.push(`${pathname}?key=${e}`, undefined, {
						shallow: true,
					})
				}
			/>
		</div>
	);
};

export default Account;
