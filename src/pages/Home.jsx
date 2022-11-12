import React from "react";
import styled from "styled-components";
import HeroImage1 from "../assets/Hero images/image 1.jpg";
import HeroImage2 from "../assets/Hero images/image 2.jpg";
import HeroImage3 from "../assets/Hero images/image 3.jpg";
import HeroImage4 from "../assets/Hero images/image 4.jpg";
import MBtokenSVG from "../assets/Band icons/Mbtoken.svg";
import MetamaskSVG from "../assets/Band icons/Metamask.svg";
import OpenseaSVG from "../assets/Band icons/Open sea.svg";
import { BsSearch } from "react-icons/bs";

export default function Home() {
	return (
		<>
			<Hero>
				<div className="left">
					<h1>
						Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span>
					</h1>
					<p>
						we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort
						zone
					</p>
					<form onSubmit={(e) => e.preventDefault()}>
						<input type="text" placeholder="Search for location" />
						<button type="submit" className="big">
							Search
						</button>
						<button type="submit" className="small">
							<BsSearch />
						</button>
					</form>
				</div>
				<div className="right">
					<img src={HeroImage1} alt="image 1" />
					<img src={HeroImage2} alt="image 2" />
					<img src={HeroImage3} alt="image 3" />
					<img src={HeroImage4} alt="image 4" />
				</div>
			</Hero>
			<Sponsors>
				<div>
					<img src={MBtokenSVG} alt="mbtoken" />
				</div>
				<div>
					<img src={MetamaskSVG} alt="meta mask" />
				</div>
				<div>
					<img src={OpenseaSVG} alt="open sea" />
				</div>
			</Sponsors>
		</>
	);
}

const ColoredSection = styled.section`
	background-color: #a02279;
	box-shadow: 0 0 0 100vmax #a02279;
	clip-path: inset(0 -100vmax);
`;

const Sponsors = styled(ColoredSection)`
	padding: 1rem 0;
	display: flex;
	gap: 18vw;
	justify-content: center;
	align-items: center;

	@media only screen and (max-width: 768px) {
		gap: 10vw;
	}
`;

const Hero = styled.section`
	margin-top: 12.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 7vw;
	margin-bottom: 6.7rem;

	@media only screen and (max-width: 1024px) {
		margin-top: 7.2rem;
	}

	@media only screen and (max-width: 768px) {
		margin-top: 4.8rem;
		flex-direction: column;
		gap: 4.8rem;
	}

	.left {
		flex: 3;
		display: flex;
		flex-direction: column;
		gap: 4.8rem;
		color: #434343;

		@media only screen and (max-width: 1024px) {
			flex: 2;
		}

		@media only screen and (max-width: 1024px) {
			gap: 2.4rem;
		}

		h1 {
			font-size: 5.6rem;
			font-weight: 400;

			@media only screen and (max-width: 1024px) {
				font-size: 4.8rem;
			}

			span {
				color: #a02279;
				font-weight: 700;
			}
		}

		p {
			font-size: 2.4rem;
		}

		form {
			display: flex;

			input {
				flex: 3;
				padding-left: 1.5rem;
				border-radius: 0.8rem 0 0 0.8rem;
				width: 100%;

				&,
				&:focus,
				&:active {
					border: 1px solid #a3a3a3;
					outline: none;
				}

				&::placeholder {
					font-size: 1.4rem;
					font-weight: 400;
					color: #b8b8b8;
				}
			}

			button {
				flex: 2;
				padding: 1.7rem;
				background-color: #a02279;
				color: white;
				border-radius: 0 0.8rem 0.8rem 0;

				@media only screen and (max-width: 768px) {
					padding: 1rem;
				}

				&:hover {
					background-color: #ca2b98;
				}
			}

			button.big {
				@media only screen and (max-width: 768px) {
					display: none;
				}
			}

			button.small {
				display: none;
				font-size: 2rem;
				flex: 0;
				padding-inline: 2.4rem;

				@media only screen and (max-width: 768px) {
					display: block;
				}
			}
		}
	}

	.right {
		flex: 2;
		display: grid;
		gap: 0.8rem;
		grid-template-columns: 1fr 1fr;

		& :first-child {
			margin-top: 10rem;

			@media only screen and (max-width: 768px) {
				margin-top: 6rem;
			}
		}

		& :last-child {
			transform: translateY(-10rem);

			@media only screen and (max-width: 768px) {
				transform: translateY(-6rem);
			}
		}
	}
`;
