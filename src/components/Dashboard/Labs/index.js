import { Space } from "antd";
import CommonTable from "src/common/CommonTable";
import SeacrhField from "src/common/SearchField";
import TextField from "src/common/textField/index";
import { dateHandler1 } from "src/utils/helper";

const Labs = () => {
	const columns = [
		{
			title: "Report",
			dataIndex: "report",
			key: "report",
		},
		{
			title: "Provider",
			dataIndex: "provider",
			key: "provider",
		},
		{
			title: "Charges($)",
			dataIndex: "charges",
			key: "charges",
		},
		{
			title: "Date And Time",
			dataIndex: "dateTime",
			key: "dateTime",
		},
		{
			title: "Action",
			dataIndex: "action",
			key: "action",
			render: () => (
				<Space>
					<img
						src="/assets/icons/deleteIcon.svg"
						className="c-pointer"
					/>
					<img
						src="/assets/icons/downloadIcon.svg"
						className="c-pointer"
					/>
				</Space>
			),
		},
	];
	const data = [
		{
			key: Math.random(),
			report: "Blood Report",
			provider: "Alex Martinez",
			charges: "$25",
			dateTime: dateHandler1(),
		},
		{
			key: Math.random(),
			report: "Urine Report",
			provider: "Alex Martinez",
			charges: "$25",
			dateTime: dateHandler1(),
		},
		{
			key: Math.random(),
			report: "Blood Report",
			provider: "Alex Martinez",
			charges: "$25",
			dateTime: dateHandler1(),
		},
		{
			key: Math.random(),
			report: "Urine Report",
			provider: "Alex Martinez",
			charges: "$25",
			dateTime: dateHandler1(),
		},
		{
			key: Math.random(),
			report: "Blood Report",
			provider: "Alex Martinez",
			charges: "$25",
			dateTime: dateHandler1(),
		},
		{
			key: Math.random(),
			report: "Urine Report",
			provider: "Alex Martinez",
			charges: "$25",
			dateTime: dateHandler1(),
		},
		{
			key: Math.random(),
			report: "Blood Report",
			provider: "Alex Martinez",
			charges: "$25",
			dateTime: dateHandler1(),
		},
		{
			key: Math.random(),
			report: "Urine Report",
			provider: "Alex Martinez",
			charges: "$25",
			dateTime: dateHandler1(),
		},
		{
			key: Math.random(),
			report: "Blood Report",
			provider: "Alex Martinez",
			charges: "$25",
			dateTime: dateHandler1(),
		},
	];
	return (
		<div>
			<TextField
				fontSize={18}
				fontWeight="400"
				fontFamily="Proxima-Nova"
				mt={20}
				mb={15}
			>
				Labs
			</TextField>

			<SeacrhField placeholder="Search Here" onSearch={(e) => {}} />
			<CommonTable columns={columns} dataSource={data} />
		</div>
	);
};

export default Labs;
