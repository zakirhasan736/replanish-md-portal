import React from "react";
import { Collapse } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

const { Panel } = Collapse;

const propTypes = {
	questionAnswerArr: PropTypes.array,
};

const AboutCollapseSection = ({ questionAnswerArr }) => {
	return (
		<div className="about-collapse-container">
			<Collapse
				defaultActiveKey={["1"]}
				ghost
				accordion
				className="about-collapse"
				expandIconPosition="end"
				expandIcon={
					({ isActive }) => (
						<PlusOutlined
							className="collapse-icon"
							rotate={isActive ? 45 : 0}
						/>
					)
					// isActive ? (
					// 	<CloseOutlined className="collapse-icon" rotate={isActive ? 90 : 0} />
					// ) : (
					// 	<PlusOutlined className="collapse-icon" />
					// )
				}
			>
				{questionAnswerArr?.map((item, index) => {
					const key = index + 1;
					return (
						<Panel
							header={
								<h1 className="question-text">
									{item?.question}
								</h1>
							}
							key={key}
							className="collapse-head"
						>
							<p className="answer-text">{item?.answer}</p>
						</Panel>
					);
				})}
				{/* <Panel
					header={
						<h1 className="question-text">
							What are Botox and Dermal Fillers?
						</h1>
					}
					key="1"
					className="collapse-head"
				>
					<p className="answer-text">{text}</p>
				</Panel>
				<Panel
					header={
						<h1 className="question-text">
							What is the difference between botox and dermal
							fillers?
						</h1>
					}
					key="2"
					className="collapse-head"
				>
					<p className="answer-text">{text}</p>
				</Panel>
				<Panel
					header={
						<h1 className="question-text">
							Are there risks in getting botox or filler
							injections?
						</h1>
					}
					key="3"
					className="collapse-head"
				>
					<p className="answer-text">{text}</p>
				</Panel>
				<Panel
					header={
						<h1 className="question-text">
							How do I know which one to get?
						</h1>
					}
					key="4"
					className="collapse-head"
				>
					<p className="answer-text">{text}</p>
				</Panel> */}
			</Collapse>
		</div>
	);
};

AboutCollapseSection.propTypes = propTypes;

export default AboutCollapseSection;
