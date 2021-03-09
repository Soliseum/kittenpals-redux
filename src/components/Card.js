// import React from "react";

const Card = ({ id, username, email }) => {
	return (
		<div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="robots" src={`https://robohash.org/set_set4/${id + 12}?size=220x220`} />
			<div>
				<h2>{username}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;
