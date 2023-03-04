import { Table } from "antd";

const CommonTable = ({ columns, dataSource, className = "" }) => {
	return (
		<div className="CommonTable">
			<Table
				columns={columns}
				dataSource={dataSource}
				pagination={false}
				className={className}
			/>
		</div>
	);
};

export default CommonTable;
