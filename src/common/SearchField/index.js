import { Input } from "antd";
const { Search } = Input;

const SeacrhField = ({
	placeholder,
	allowClear,
	onSearch,
	width,
	className,
}) => (
	<Search
		placeholder={placeholder}
		allowClear={allowClear}
		onSearch={onSearch}
		className={`common-search-field ${className ?? ""}`}
		style={{
			width,
		}}
	/>
);
export default SeacrhField;
