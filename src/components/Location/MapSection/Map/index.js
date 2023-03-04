import React, { useState, useEffect } from "react";

import {
	LoadScript,
	GoogleMap,
	DrawingManager,
	Polygon,
} from "@react-google-maps/api";

const API_KEY = "AIzaSyAyFvqxIK7LHUoAvZECGjThvrJChh99bkM";

const Map = () => {
	const [appCoordinates, setAppCoordinates] = useState([]);
	const [showIndex, setShowIndex] = useState({ index: null, isShow: false });

	const polygonOptions = {
		fillColor: `#2196F3`,
		strokeColor: `#2196F3`,
		fillOpacity: 0.5,
		strokeWeight: 2,
		clickable: true,
		draggable: true,
		zIndex: 1,
	};
	const markedPolygonOptions = {
		fillColor: `#000000`,
		strokeColor: `#000000`,
		fillOpacity: 0.5,
		strokeWeight: 2,
		clickable: true,
		draggable: true,
		zIndex: 1,
	};
	const drawingManagerOptions = {
		drawingControl: true,
		drawingControlOptions: {
			drawingModes: ["polygon"],
		},
		polygonOptions: {
			strokeColor: `#2196F3`,
		},
	};

	useEffect(() => {
		if (polygons) {
			setPolygons(
				polygons.map((coord, i) => {
					if (showIndex.index === i) {
						coord.show = !coord.show;
					}
					return coord;
				})
			);
		}
	}, [showIndex.index, showIndex.isShow]);

	const [polygons, setPolygons] = useState([]);

	const handlerCoordinates = (coordinate, polygon) => {
		let newCordinates = {
			name: "Area",
			coordinates: coordinate,
			polygon: polygon,
			show: false,
		};
		setAppCoordinates((appCoordinates) => [
			...appCoordinates,
			newCordinates,
		]);
	};

	const removePolygon = (i) => {
		let a = [...polygons];
		let b = [...appCoordinates];
		b.splice(i, 1);
		a.splice(i, 1);
		setPolygons(a);
		setAppCoordinates(b);
	};

	const addPolygon = (polygon) => {
		const polyArray = polygon.getPath().getArray();
		let paths = [];
		polyArray.forEach((path) => {
			paths.push({ latitude: path.lat(), longitude: path.lng() });
		});
		setPolygons([...polygons, { polygon: polygon, show: false }]);
		handlerCoordinates(paths, polygon);
		polygon.setMap(null);
	};

	return (
		<div className="App">
			<LoadScript
				id="script-loader"
				googleMapsApiKey={API_KEY}
				libraries={["drawing"]}
				language="en"
				region="us"
			>
				<GoogleMap
					mapContainerClassName="App-map"
					center={{
						lat: 51.1,
						lng: 17.0333,
					}}
					clickableIcons={false}
					zoom={14}
					version="weekly"
				>
					<DrawingManager
						drawingMode={"drawingMode"}
						options={drawingManagerOptions}
						onPolygonComplete={(polygon) => addPolygon(polygon)}
					/>
					{polygons.map((polygon, i) => (
						<Polygon
							options={
								polygon.show
									? markedPolygonOptions
									: polygonOptions
							}
							path={polygon.polygon.getPath()} //polygon.polygon.getPath()}
							key={i}
							onClick={() => removePolygon(i)}
						/>
					))}
				</GoogleMap>
			</LoadScript>
		</div>
	);
};

export default Map;
