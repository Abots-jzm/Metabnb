import React from "react";
import styled from "styled-components";
import { MdTune } from "react-icons/md";
import { CARD_IMAGES } from "../utils/data";
import CardItem from "../components/CardItem";

export default function PlaceToStay() {
	return (
		<>
			<OptionsBar>
				<div className="filters">
					<div>Resturaunt</div>
					<div>Cottage</div>
					<div>Castle</div>
					<div>fantast city</div>
					<div>beach</div>
					<div>Carbins</div>
					<div>Off-grid</div>
					<div>Farm</div>
				</div>
				<button className="location">
					<span className="text">Location</span>
					<MdTune />
				</button>
			</OptionsBar>
			<CardsGrid>
				{CARD_IMAGES.map((item, i) => (
					<CardItem image={item} key={i} />
				))}
			</CardsGrid>
		</>
	);
}

const CardsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
	gap: 2.4rem;
	margin-top: 6.4rem;
	margin-bottom: 9.2rem;
`;

const OptionsBar = styled.div`
	display: flex;
	gap: 6.5rem;
	align-items: center;
	margin-top: 11.5rem;

	@media only screen and (max-width: 768px) {
		margin-top: 5.5rem;
		gap: 4.8rem;
	}

	.filters {
		color: #434343;
		flex: 1;
		display: flex;
		justify-content: space-between;
		align-items: center;
		white-space: nowrap;
		gap: 2.4rem;
		overflow-x: auto;
		align-self: stretch;

		&::-webkit-scrollbar {
			height: 2px;
		}
		&::-webkit-scrollbar-track {
			background-color: transparent;
		}
		&::-webkit-scrollbar-thumb {
			background: #555;
			border-radius: 100rem;
		}

		& > div {
			cursor: pointer;
			transition: all 0.2s;

			&:hover {
				font-weight: 700;
			}
		}
	}

	.location {
		flex: 0;
		display: flex;
		gap: 4rem;
		align-items: center;
		padding: 1.4rem;
		border: 1px solid #b4b4b4;
		border-radius: 0.8rem;
		background-color: white;
		color: #333333;

		&:hover {
			background-color: #f6f6f6;
		}

		.text {
			@media only screen and (max-width: 768px) {
				display: none;
			}
		}
	}
`;
