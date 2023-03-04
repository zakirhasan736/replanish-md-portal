import { Table } from "antd";
import dayjs from "dayjs";
import CommonTable from "src/common/CommonTable";
import SeacrhField from "src/common/SearchField";
import TextField from "src/common/textField/index";

const Consultations = () => {
	const columns = [
		{
			title: "Treatment",
			dataIndex: "treatment",
			key: "treatment",
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
	];
	const data = [
		{
			key: Math.random(),
			treatment: "Botox/Dermal Fillers",
			provider: "Alex Martinez",
			charges: "$25",
			dateTime: dayjs().format("DD MMM,YYYY,h:mm A"),
		},
		{
			key: Math.random(),
			treatment: "Botox/Dermal Fillers",
			provider: "Alex Martinez",
			charges: "$25",
			dateTime: dayjs().format("DD MMM,YYYY,h:mm A"),
		},
		{
			key: Math.random(),
			treatment: "Botox/Dermal Fillers",
			provider: "Alex Martinez",
			charges: "$25",
			dateTime: dayjs().format("DD MMM,YYYY,h:mm A"),
		},
		{
			key: Math.random(),
			treatment: "Botox/Dermal Fillers",
			provider: "Alex Martinez",
			charges: "$25",
			dateTime: dayjs().format("DD MMM,YYYY,h:mm A"),
		},
		{
			key: Math.random(),
			treatment: "Botox/Dermal Fillers",
			provider: "Alex Martinez",
			charges: "$25",
			dateTime: dayjs().format("DD MMM,YYYY,h:mm A"),
		},
		{
			key: Math.random(),
			treatment: "Botox/Dermal Fillers",
			provider: "Alex Martinez",
			charges: "$25",
			dateTime: dayjs().format("DD MMM,YYYY,h:mm A"),
		},
		{
			key: Math.random(),
			treatment: "Botox/Dermal Fillers",
			provider: "Alex Martinez",
			charges: "$25",
			dateTime: dayjs().format("DD MMM,YYYY,h:mm A"),
		},
		{
			key: Math.random(),
			treatment: "Botox/Dermal Fillers",
			provider: "Alex Martinez",
			charges: "$25",
			dateTime: dayjs().format("DD MMM,YYYY,h:mm A"),
		},
		{
			key: Math.random(),
			treatment: "Botox/Dermal Fillers",
			provider: "Alex Martinez",
			charges: "$25",
			dateTime: dayjs().format("DD MMM,YYYY,h:mm A"),
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
				Consultations
			</TextField>
			<SeacrhField placeholder="Search Here" onSearch={(e) => {}} />
			<CommonTable columns={columns} dataSource={data} />
		</div>
	);
};

export default Consultations;
