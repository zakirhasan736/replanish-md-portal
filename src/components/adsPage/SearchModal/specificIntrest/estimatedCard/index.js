import React from "react";

import { Card, Divider } from "antd";

import TextField from "src/common/textField";

const EstimatedCard = () => {
	return (
		<div className="right_card">
			<Card>
				<TextField
					fontWeight="600"
					fontSize="16px"
					color="#11084E"
					mb="10px"
					textDecoration="underline"
					fontFamily="Lato, sans-serif"
				>
					Estimated weekly performance
				</TextField>
				<TextField
					fontWeight="700"
					fontSize="16px"
					mb="5px"
					color="#11084E"
					fontFamily="Lato, sans-serif"
				>
					2.4K — 9.6K
				</TextField>
				<TextField
					fontWeight="600"
					fontSize="16px"
					color="#181433"
					mb="10px"
					fontFamily="Lato, sans-serif"
				>
					Impressions
				</TextField>
				<TextField
					fontWeight="400"
					fontSize="14px"
					color="rgba(24, 20, 51, 0.6)"
					fontFamily="Lato, sans-serif"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Amet at mus nulla episode tempus nunc. Felix, at bandit
					groin nisl nisi, sapiens. Curses Massey suspense{" "}
				</TextField>
				<Divider style={{ backgroundColor: "#9edfcb" }} />
				<TextField
					fontWeight="700"
					fontSize="16px"
					mb="5px"
					color="#11084E"
					fontFamily="Lato, sans-serif"
				>
					2.6K — 5.1K
				</TextField>
				<TextField
					fontWeight="600"
					fontSize="16px"
					mb="5px"
					color="#181433"
					fontFamily="Lato, sans-serif"
				>
					Views
				</TextField>
				<TextField
					fontWeight="400"
					fontSize="14px"
					color="rgba(24, 20, 51, 0.6)"
					fontFamily="Lato, sans-serif"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Amet at mus nulla episode tempus nunc. Felix, at bandit
					groin nisl nisi, sapiens. Curses Massey suspense{" "}
				</TextField>
				<Divider style={{ backgroundColor: "#9edfcb" }} />
				<TextField
					fontWeight="700"
					fontSize="16px"
					mb="5px"
					color="#11084E"
					fontFamily="Lato, sans-serif"
				>
					$0.27 — $0.99
				</TextField>
				<TextField
					fontWeight="600"
					fontSize="16px"
					color="#181433"
					mb="10px"
					fontFamily="Lato, sans-serif"
				>
					Average cost-per-view (CPV)
				</TextField>
				<TextField
					fontWeight="400"
					fontSize="14px"
					color="rgba(24, 20, 51, 0.6)"
					fontFamily="Lato, sans-serif"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Amet at mus nulla episode tempus nunc. Felix, at bandit
					groin nisl nisi, sapiens. Curses Massey suspense{" "}
				</TextField>
			</Card>
		</div>
	);
};

export default EstimatedCard;
