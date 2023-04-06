import { Col, Row, Space } from "antd";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import useUser from "src/hooks/useUser";
import { axiosRequest } from "src/utils/helper";
import SearchBar from "../Common/SearchBar";
import ForumBanner from "./CommunityBanner";
import ForumCard from "./CommunityCard";

const Community = () => {
	const dispatch = useDispatch();

	const array = [1, 2, 3, 4];

	useEffect(() => {
		axiosRequest("", dispatch, "get", "/private/api/social-forum/forums/")
			.then((res) => {
				console.log(res, "res");
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div style={{ width: "100%" }}>
			<ForumBanner />
			<SearchBar />
			<div className="card-container">
				<Row gutter={[30, 30]}>
					{array.map(() => (
						<Col
							xxl={{ span: 8 }}
							xl={{ span: 8 }}
							lg={{ span: 12 }}
							md={{ span: 12 }}
							sm={{ span: 12 }}
						>
							<ForumCard />
						</Col>
					))}
				</Row>
			</div>
		</div>
	);
};

export default Community;
