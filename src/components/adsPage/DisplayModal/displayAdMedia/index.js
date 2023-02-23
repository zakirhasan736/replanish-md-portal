import React from "react";

import { Upload, message } from "antd";
import { FilePdfOutlined } from "@ant-design/icons";

import TextField from "src/common/textField";
import CommonButton from "src/common/button";

import PropTypes from "prop-types";

const AdMedia = ({ back, handleChange, errors }) => {
	const { Dragger } = Upload;

	const props = {
		name: "file",
		multiple: true,
		action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
		onChange(info) {
			const { status } = info.file;
			if (status !== "uploading") {
				console.log("🚀 ~ status", status);
			}
			if (status === "done") {
				message.success(
					`${info.file.name} file uploaded successfully.`
				);
				handleChange();
			} else if (status === "error") {
				message.error(`${info.file.name} file upload failed.`);
			}
		},
		onDrop(e) {
			console.log("Dropped files", e.dataTransfer.files);
		},
	};
	return (
		<div className="ad_media">
			<div className="ad_media_main">
				<h3>Create Display Ads</h3>
			</div>
			<div className="ad_media_content">
				<TextField
					fontSize="15px"
					fontWeight="600"
					fontFamily="Lato, sans-serif"
					letterSpacing="0.4px"
				>
					Upload image/video
				</TextField>
				<div className="ad_media_field">
					<Dragger {...props}>
						<p className="ant-upload-drag-icon">
							<FilePdfOutlined />
						</p>
						<TextField
							fontSize="15px"
							fontWeight="600"
							fontFamily="Lato, sans-serif"
							letterSpacing="0.4px"
						>
							Drag and Drop Your file here
						</TextField>
					</Dragger>
					{errors?.file && (
						<div
							style={{
								marginTop: "10px",
							}}
						>
							<p
								style={{
									color: "red",
									fontSize: "14px",
									marginBottom: "0",
								}}
							>
								{errors?.file}
							</p>
						</div>
					)}
				</div>
			</div>
			<div className="button_main">
				<CommonButton
					child="Next"
					classname="next"
					topClass="nextTop"
					width="128px"
					height="48px"
					background="var(--secondary)"
					borderRadius="24px 0px 0px 24px"
					color="#ffffff"
					htmlType="submit"
				/>
				<CommonButton
					child="Back"
					background="var(--primary)"
					classname="back"
					width="128px"
					height="48px"
					borderRadius="0px 24px 24px 0px"
					color="#ffffff"
					onClick={back}
				/>
			</div>
		</div>
	);
};

AdMedia.propTypes = {
	back: PropTypes.func,
	handleChange: PropTypes.func,
	handleBlur: PropTypes.func,
	errors: PropTypes.func,
};

export default AdMedia;
