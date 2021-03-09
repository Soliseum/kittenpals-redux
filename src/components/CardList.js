// import React from "react";
import Card from './Card';

const CardList = ({ kittens }) => {
	// if (true) { throw new Error("NOOOO!") }
	return (
		<div>
			{kittens.map((user, i) => {
				return <Card key={i} id={user.id} username={user.username} email={user.email} />;
			})}
		</div>
	);
};

export default CardList;
