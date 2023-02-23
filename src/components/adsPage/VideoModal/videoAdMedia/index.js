import React from "react";

import { Input, Upload, message } from "antd";
import { FilePdfOutlined } from "@ant-design/icons";

import TextField from "src/common/textField";
import VideoPreview from "src/components/adsPage/VideoModal/videoAdMedia/budgetCard";
import CommonButton from "src/common/button";

import PropTypes from "prop-types";

export const SearchIcon = () => {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
				stroke="black"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15.75 15.75L12.4875 12.4875"
				stroke="black"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const VideoAdMedia = ({ back, handleChange, handleBlur, values, errors }) => {
	const { Dragger } = Upload;

	const props = {
		name: "file",
		multiple: true,
		action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
		onChange(info) {
			const { status } = info.file;
			if (status !== "uploading") {
				console.log(info.file, info.fileList);
			}
			if (status === "done") {
				message.success(
					`${info.file.name} file uploaded successfully.`
				);
			} else if (status === "error") {
				message.error(`${info.file.name} file upload failed.`);
			}
		},
		onDrop(e) {
			console.log("Dropped files", e.dataTransfer.files);
		},
	};
	return (
		<div className="video_media">
			<div className="video_media_main">
				<h3>Let&apos;s Create Your Video Ad</h3>
			</div>
			<div className="video_media_content">
				<div className="video_media_modal">
					<div className="video_media_field">
						<TextField
							fontSize="15px"
							fontWeight="600"
							fontFamily="Lato, sans-serif"
							letterSpacing="0.4px"
							mb="16px"
						>
							Select a video
						</TextField>
						<div className="video_search">
							<Input
								size="large"
								placeholder="Search here..."
								prefix={<SearchIcon />}
								name="videoSelect"
								value={values.videoSelect}
								onBlur={handleBlur}
								onChange={handleChange}
							/>
							{errors?.videoSelect && (
								<div>
									<p
										style={{
											color: "red",
											fontSize: "14px",
											marginBottom: "0",
										}}
									>
										{errors?.videoSelect}
									</p>
								</div>
							)}
							<div
								style={{
									color: "#2C99CB",
									marginTop: "5px",
									fontFamily: "Lato, sans-serif",
								}}
							>
								Required
							</div>
						</div>
						<TextField
							mt="20px"
							mb="20px"
							textAlign="center"
							color="#8DD9C2"
							fontSize="15px"
							fontFamily="Lato, sans-serif"
						>
							OR
						</TextField>
						<TextField
							fontSize="15px"
							fontWeight="600"
							fontFamily="Lato, sans-serif"
							letterSpacing="0.4px"
							mb="16px"
						>
							Upload image/video
						</TextField>
						<div>
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
						</div>
					</div>
					<div className="media_rightCard">
						<TextField
							fontSize="15px"
							fontWeight="600"
							fontFamily="Lato, sans-serif"
							letterSpacing="0.4px"
						>
							Ad Preview
						</TextField>
						<VideoPreview />
					</div>
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
			<div className="bottomText">
				<TextField
					fontSize="18px"
					fontWeight="500"
					fontFamily="Lato, sans-serif"
					textAlign="center"
					color="#8dd9c2"
				>
					To use advanced features such as keyword or placement
					targeting,
					<span style={{ color: "#2C99CB", cursor: "pointer" }}>
						{" "}
						Switch to Expert Mode
					</span>
				</TextField>
			</div>
		</div>
	);
};

VideoAdMedia.propTypes = {
	back: PropTypes.func,
	handleChange: PropTypes.func,
	handleBlur: PropTypes.func,
	values: PropTypes.object,
	errors: PropTypes.func,
};

export default VideoAdMedia;
