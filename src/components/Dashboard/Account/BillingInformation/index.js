import { Space } from "antd";
import CommonTable from "src/common/CommonTable";
import SeacrhField from "src/common/SearchField";
import TextField from "src/common/textField/index";
import { dateHandler1 } from "src/utils/helper";

const BillingInformation = () => {
	const columns = [
		{
			title: "Invoice No",
			dataIndex: "invoice",
			key: "invoice",
		},
		{
			title: "Provider",
			dataIndex: "provider",
			key: "provider",
		},
		{
			title: "Amount($)",
			dataIndex: "amount",
			key: "amount",
		},
		{
			title: "Date And Time",
			dataIndex: "dateTime",
			key: "dateTime",
		},
		{
			title: "Action",
			dataIndex: "key",
			key: "key",
			render: (_) => (
				<Space>
					<img
						src="/assets/icons/downloadIcon.svg"
						className="c-pointer"
					/>

					<img
						src="/assets/icons/eyeIcon.svg"
						className="c-pointer"
					/>
				</Space>
			),
		},
	];

	const dataSource = [
		{
			invoice: "#A348",
			provider: "Alex Martinez",
			amount: "$245",
			dateTime: dateHandler1(),
			key: Math.random(),
		},
		{
			invoice: "#A348",
			provider: "Alex Martinez",
			amount: "$245",
			dateTime: dateHandler1(),
			key: Math.random(),
		},
		{
			invoice: "#A348",
			provider: "Alex Martinez",
			amount: "$245",
			dateTime: dateHandler1(),
			key: Math.random(),
		},
		{
			invoice: "#A348",
			provider: "Alex Martinez",
			amount: "$245",
			dateTime: dateHandler1(),
			key: Math.random(),
		},
		{
			invoice: "#A348",
			provider: "Alex Martinez",
			amount: "$245",
			dateTime: dateHandler1(),
			key: Math.random(),
		},
		{
			invoice: "#A348",
			provider: "Alex Martinez",
			amount: "$245",
			dateTime: dateHandler1(),
			key: Math.random(),
		},
		{
			invoice: "#A348",
			provider: "Alex Martinez",
			amount: "$245",
			dateTime: dateHandler1(),
			key: Math.random(),
		},
		{
			invoice: "#A348",
			provider: "Alex Martinez",
			amount: "$245",
			dateTime: dateHandler1(),
			key: Math.random(),
		},
	];
	return (
		<div>
			<TextField
				name="Billing Information"
				fontSize={18}
				fontFamily="Proxima-Nova"
				mb={10}
			/>
			<SeacrhField placeholder="Seach Here" />
			<CommonTable columns={columns} dataSource={dataSource} />
		</div>
	);
};

export default BillingInformation;
