import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

export default function CardItem({ image }) {
	return (
		<Container>
			<div>
				<img src={image} alt="Desert King" />
			</div>
			<div className="details">
				<div>Desert king</div>
				<div style={{ fontWeight: 700, textAlign: "right" }}>1MBT per night</div>
				<div>2345km away</div>
				<div style={{ textAlign: "right" }}>available for 2weeks stay</div>
				<div className="stars">
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
				</div>
			</div>
		</Container>
	);
}

const Container = styled.div`
	padding: 1.6rem;
	border: 1px solid #d7d7d7;
	border-radius: 1.5rem;

	.details {
		margin-top: 1.6rem;
		display: grid;
		grid-template-columns: 1fr 2fr;
		justify-content: space-between;
		row-gap: 1rem;

		div {
			color: #434343;
			font-size: 1.4rem;
		}

		.stars {
			grid-column: 1 / -1;
			color: #a02279;
			display: flex;
			gap: 0.8rem;
		}
	}
`;
