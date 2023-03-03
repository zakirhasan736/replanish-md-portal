import { useState } from "react";
import LocationCard from "./LocationCard";

const LocationsList = () => {
	const [active, setActive] = useState(0);
	const locations = [
		{
			serial: "REPLINISH # 1",
			name: "5103 Bellaire Blvd #220, ste 225 Bellaire, TX 77401",
			contact: "(832) 770-7975",
			img: "/assets/images/location-1.png",
		},
		{
			serial: "REPLINISH # 2",
			name: "5103 Bellaire Blvd #220, ste 225 Bellaire, TX 77401",
			contact: "(832) 770-7975",
			img: "/assets/images/location-2.png",
		},
		{
			serial: "REPLINISH # 3",
			name: "5103 Bellaire Blvd #220, ste 225 Bellaire, TX 77401",
			contact: "(832) 770-7975",
			img: "/assets/images/location-1.png",
		},
		{
			serial: "REPLINISH # 4",
			name: "5103 Bellaire Blvd #220, ste 225 Bellaire, TX 77401",
			contact: "(832) 770-7975",
			img: "/assets/images/location-2.png",
		},
	];
	return (
		<div className="location-list">
			{locations.map((location, key) => (
				<LocationCard
					key={key}
					location={location}
					onSelect={() => setActive(key)}
					active={key === active}
				/>
			))}
		</div>
	);
};

export default LocationsList;
