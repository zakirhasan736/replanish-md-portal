import { Space } from "antd";
import dayjs from "dayjs";
import TextField from "src/common/textField/index";

const MedicationHistoryCard = ({ medication }) => {
	return (
		<div className="medication-history-card">
			<Space direction="vertical">
				<Space size={15}>
					<img src={medication?.["image"]} />
					<Space direction="vertical" size={0}>
						<TextField
							name={medication?.["title"]}
							fontFamily="Proxima-Nova"
							fontSize={14}
							color="#29333D"
						/>
						<TextField
							name={medication?.["subTitle"]}
							fontFamily="Proxima-Nova"
							fontSize={12}
							color="#4F5665"
						/>
					</Space>
				</Space>
				<div className="medication-bottom-section">
					<Space direction="vertical" size={0}>
						<TextField
							name={"Provider"}
							fontFamily="Proxima-Nova"
							fontSize={12}
							color="#4F5665"
						/>
						<TextField
							name={medication?.["provider"]}
							fontFamily="Proxima-Nova"
							fontSize={12}
							color="#4F5665"
						/>
					</Space>
					<Space direction="vertical" size={0}>
						<TextField
							name={"Dose"}
							fontFamily="Proxima-Nova"
							fontSize={12}
							color="#4F5665"
						/>
						<TextField
							name={medication?.["dose"]}
							fontFamily="Proxima-Nova"
							fontSize={12}
							color="#4F5665"
						/>
					</Space>
				</div>
				<div className="medication-bottom-section">
					<Space direction="vertical" size={0}>
						<TextField
							name={"Time"}
							fontFamily="Proxima-Nova"
							fontSize={12}
							color="#4F5665"
						/>
						<TextField
							name={medication?.["time"]}
							fontFamily="Proxima-Nova"
							fontSize={12}
							color="#4F5665"
						/>
					</Space>
					<Space direction="vertical" size={0}>
						<TextField
							name={"Date"}
							fontFamily="Proxima-Nova"
							fontSize={12}
							color="#4F5665"
							textAlign={"right"}
						/>
						<TextField
							name={dayjs(medication?.["date"]).format(
								"DD-M-YYY"
							)}
							fontFamily="Proxima-Nova"
							fontSize={12}
							color="#4F5665"
						/>
					</Space>
				</div>
			</Space>
		</div>
	);
};
export default MedicationHistoryCard;
