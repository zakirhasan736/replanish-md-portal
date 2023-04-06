import { Avatar, Space, Typography } from "antd";
import { useRouter } from "next/router";
const { Text } = Typography;
const IconTile = (props) => {
	const { query, push, pathname } = useRouter();
	const router = useRouter();
	const fullPath = router.asPath;
	const lastPath = fullPath.substring(fullPath.lastIndexOf("/") + 1);
	const { name } = query;

	console.log(name, "name");

	return (
		<Space
			style={{ cursor: "pointer", width: "100%" }}
			className={`${name === props?.route ? "active" : ""}`}
			onClick={() => {
				if (props.query) {
					push({
						pathname: `/dashboard/${query?.type}/${props?.route}`,
						query: { q: props.query },
					});
				} else {
					push(`/dashboard/${query?.type}/${props?.route}`);
				}
			}}
		>
			<div className="service-item-icon">
				<Avatar
					className={props.className}
					style={{ padding: 4 }}
					shape={props.shape}
					size={props.avatarSize}
					icon={<img className="default-icon" src={props.icon} />}
				/>
			</div>
			{props.text && (
				<Text className="card-head-title text-dark">{props.text}</Text>
			)}
		</Space>
	);
};

export default IconTile;
