import TextField from "src/common/textField/index";
import InputField from "src/common/inputField";
import { Col, Row, Space } from "antd";
import { Formik } from "formik";
import CommonButton from "src/common/button";
import CommonDragAndDropImage from "src/common/CommonDragAndDropImage";
import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), {
	ssr: false,
});

const AskQuestion = () => {
	const [value, setValue] = useState("");

	return (
		<div className="Ask-Qusetion">
			<Formik
				initialValues={{
					title: "",
					details: "",
					tag: "",
					url: "",
					image: null,
				}}
			>
				{({ values, errors, touched, handleChange, handleSubmit }) => (
					<Row>
						<Col span={20}>
							<TextField
								name="Ask a public question"
								fontFamily="Proxima-Nova"
								fontSize={20}
								fontWeight="700"
								mb={20}
							/>
							<Space direction="vertical" size={20}>
								<Space direction="vertical">
									<TextField
										name="Title"
										fontFamily="Proxima-Nova"
										fontSize={14}
										fontWeight="700"
									/>
									<InputField placeholder="Add your title" />
								</Space>
								<Space direction="vertical">
									<TextField
										name="What are the details of your problem?"
										fontFamily="Proxima-Nova"
										fontSize={14}
										fontWeight="700"
									/>
									<TextField
										name="Introduce the problem and expand on what you put in the title. Minimum 20 characters."
										fontFamily="Proxima-Nova"
										fontSize={14}
										fontWeight="400"
									/>
									{/* <InputField placeholder="Add your title" /> */}
									<ReactQuill
										theme="snow"
										value={value}
										onChange={setValue}
									/>
								</Space>
								<Space direction="vertical">
									<TextField
										name="Tag"
										fontFamily="Proxima-Nova"
										fontSize={14}
										fontWeight="700"
									/>

									<InputField placeholder="Add your Tag" />
								</Space>

								<CommonDragAndDropImage
									name="image"
									handleChange={handleChange}
									value={values["image"]}
									touched={touched}
									errors={errors}
								/>

								<Space direction="vertical">
									<TextField
										name="URL"
										fontFamily="Proxima-Nova"
										fontSize={14}
										fontWeight="700"
									/>

									<InputField />
								</Space>
							</Space>
							<Space className="buttons">
								<CommonButton child={"Save Draft"} />
								<CommonButton child={"Post your Question"} />
							</Space>
						</Col>
					</Row>
				)}
			</Formik>
		</div>
	);
};

export default AskQuestion;
