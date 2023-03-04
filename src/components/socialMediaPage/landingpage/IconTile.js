import { Avatar, Space, Typography } from "antd";
import { useRouter } from "next/router";
const { Text } = Typography;
const IconTile = (props) => {
	const { query, push, pathname } = useRouter();
	const router = useRouter();
	const fullPath = router.asPath;
	const lastPath = fullPath.substring(fullPath.lastIndexOf('/') + 1);

	return (
		<Space
			style={{ cursor: "pointer" }}
			className={`${lastPath === props?.route ? "acxs" : ""}`}
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
