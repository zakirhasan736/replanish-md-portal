import React from "react";
import PriceingTable from "./priceingTable";

const PricePlanSection = () => {
	return (
		<div className="price-plane-container">
			<div className="layout-wrapper">
				<h1 className="main-heading">
					Compare Plan Suitable for Your Health!
				</h1>
				<p className="_content">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
					diam amet libero purus. Dui sapien vitae donec non id. Massa
					lectus eu sit tellus, congue turpis. Sit quis amet, morbi
					est justo. Eu risus, facilisis egestas sit risus. Vitae
					aenean habitant tellus, nisl. Mattis id enim auctor
					dictumst.
					<br />
					Ipsum quam sit tristique massa eget morbi neque pulvinar in.
					Adipiscing dapibus nunc habitant nunc orci libero neque,
					laoreet. Sapien sit posuere convallis convallis interdum
					enim. Lectus lacus auctor malesuada ornare aliquet.
				</p>
				<PriceingTable />
				<h1 className="main-heading">
					For large organizations Please contact us
				</h1>
			</div>
		</div>
	);
};

export default PricePlanSection;
