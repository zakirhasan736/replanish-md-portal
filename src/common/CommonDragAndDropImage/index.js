import { Space, Upload } from "antd";
import TextField from "src/common/textField/index";
import CommonButton from "../button";

const { Dragger } = Upload;

const CommonDragAndDropImage = ({
	name,
	value,
	handleChange,
	errors,
	touched,
	className = "",
}) => {
	return (
		<div className={`Common-Dragger ${className}`}>
			<Dragger
				name={name}
				onChange={(e) => {
					handleChange({ target: { name, value: e.file } });
				}}
				beforeUpload={() => false}
				showUploadList={false}
			>
				{value ? (
					<img src={URL.createObjectURL(value)} />
				) : (
					<Space direction="vertical" size={18}>
						<img src="/assets/icons/uploadIcon.png" />
						<TextField
							name="Drag & drop files or Browse"
							fontFamily="Proxima-Nova"
							fontWeight="700"
							fontSize={14}
						/>
						<TextField
							name="Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT"
							fontFamily="Proxima-Nova"
							fontWeight="400"
							fontSize={12}
						/>

						<CommonButton child={"Upload Now"} />
					</Space>
				)}
			</Dragger>
			{touched?.[name] && errors?.[name] && (
				<p
					style={{
						color: "red",
						fontSize: "13px",
						marginBottom: "0",
					}}
				>
					{errors[name]}
				</p>
			)}
		</div>
	);
};

export default CommonDragAndDropImage;
