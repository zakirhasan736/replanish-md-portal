import { AutoComplete, Input } from "antd";
import React, { useState } from "react";

const SearchBar = () => {
	const [state, setState] = useState("");

	const recent = [
		"Lorem ipsum dolor sit amet consectetur. Bibendum nam magna sem elit massa.",
		"Lorem ipsum dolor sit amet consectetur. Egestas at arcu arcu sit sed. Vitae lacus erat egestas condimentum sollicitudin auctor. Donec.",
		"Lorem ipsum dolor sit amet consectetur. Egestas at arcu arcu  auctor. Donec enim pharetra eu at.",
	];
	const recommended = [
		"Botox",
		"Bioidentical Hormone",
		"Testosterone",
		"Medical Weight Loss",
	];

	const renderTitle = (title) => title;

	const renderItem = (array) =>
		array.map((t) => ({
			value: t,
			label: t,
		}));

	const options = [
		{
			label: renderTitle("Recommended Topic"),
			options: renderItem(recommended),
		},
		{
			label: renderTitle("Recent Search"),
			options: renderItem(recent),
		},
	];
	const optionsTwo = [
		{
			value: "Burns Bay Road",
		},
		{
			value: "Downing Street",
		},
		{
			value: "Wall Street",
		},
	];
	return (
		<div className="search-forum">
			<AutoComplete
				popupClassName="forum-search"
				dropdownMatchSelectWidth={500}
				options={state ? optionsTwo : options}
				filterOption={(inputValue, option) =>
					option.value
						.toUpperCase()
						.indexOf(inputValue.toUpperCase()) !== -1
				}
			>
				<Input
					size="large"
					placeholder="input here"
					onChange={(e) => setState(e.target.value)}
					suffix={
						<img
							src="/icons/search.svg"
							style={{
								fontSize: "20px",
								color: "#000",
							}}
						/>
					}
				/>
			</AutoComplete>
		</div>
	);
};

export default SearchBar;
