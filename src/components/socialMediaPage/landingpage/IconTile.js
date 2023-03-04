import { Avatar, Space, Typography } from "antd";
import { useRouter } from "next/router";
const { Text } = Typography;
const IconTile = (props) => {
	const { query, push } = useRouter();

	return (
		<Space
			style={{ cursor: "pointer" }}
			onClick={() => push(`/dashboard/${query?.type}/${props?.route}`)}
		>
			<Avatar
				className={props.className}
				style={{ padding: 5 }}
				shape={props.shape}
				size={props.avatarSize}
				icon={<img className="default-icon" src={props.icon} />}
			/>
			{props.text && (
				<Text className="card-head-title text-dark">{props.text}</Text>
			)}
		</Space>
	);
};

export default IconTile;
