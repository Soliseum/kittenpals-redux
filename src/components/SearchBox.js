// import React from "react";

const SearchBox = ({ searchChange }) => {
	return (
		<div className="pa2">
			<input
				className="pa3 ba br3 b--light-green bg-lightest-blue"
				type="search"
				placeholder="search kittens"
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBox;
