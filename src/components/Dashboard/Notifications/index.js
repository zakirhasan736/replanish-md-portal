import TextField from "src/common/textField/index";
import NotificationCard from "./NotificationCard";

const Notifications = () => {
	const notifications = [
		{
			title: "Sit Amet, Consectetur Adipiscing Elit.",
			createdAt: new Date(),
			image: "/assets/icons/medical-bag.svg",
		},
		{
			title: "Lorem Dolor Sit Amet, Consectetur Adipiscing Elit.",
			createdAt: new Date(),
			image: "/assets/icons/stethoscope.svg",
		},
		{
			title: "Dolor Sit Amet, Consectetur Adipiscing Elit.",
			createdAt: new Date(),
			image: "/assets/dynamicImage/medi-2.svg",
		},
		{
			title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
			createdAt: new Date(),
			image: "/assets/icons/medical-bag.svg",
		},
		{
			title: "Dolor Sit Amet, Consectetur Adipiscing Elit.",
			createdAt: new Date(),
			image: "/assets/dynamicImage/medi-1.svg",
		},
		{
			title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
			createdAt: new Date(),
			image: "/assets/icons/medical-bag.svg",
		},
	];
	return (
		<div className="Notification">
			<TextField
				fontSize={18}
				fontWeight="400"
				fontFamily="Proxima-Nova"
				mb={15}
			>
				Notifications
			</TextField>
			{notifications.map((notification, ind) => (
				<NotificationCard key={ind} notification={notification} />
			))}
		</div>
	);
};

export default Notifications;
