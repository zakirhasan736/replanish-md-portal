import dayjs from "dayjs";

export const dateHandler1 = (date) => {
	return dayjs(date).format("DD MMM,YYYY,h:mm A");
};
