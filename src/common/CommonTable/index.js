import { Table } from "antd";
import PropTypes from "prop-types";

const CommonTable = ({ columns, dataSource, className }) => {
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

CommonTable.prototypes = {
	columns: PropTypes.array,
	dataSource: PropTypes.array,
	className: PropTypes.string,
};

CommonTable.defaultProps = {
	className: "",
};

export default CommonTable;
