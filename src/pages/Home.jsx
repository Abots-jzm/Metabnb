import React from "react";
import styled from "styled-components";
import HeroImage1 from "../assets/Hero images/image 1.jpg";
import HeroImage2 from "../assets/Hero images/image 2.jpg";
import HeroImage3 from "../assets/Hero images/image 3.jpg";
import HeroImage4 from "../assets/Hero images/image 4.jpg";

export default function Home() {
	console.log("bro");
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
						<button type="submit">Search</button>
					</form>
				</div>
				<div className="right">
					<img src={HeroImage1} alt="image 1" />
					<img src={HeroImage2} alt="image 2" />
					<img src={HeroImage3} alt="image 3" />
					<img src={HeroImage4} alt="image 4" />
				</div>
			</Hero>
		</>
	);
}

const Hero = styled.div`
	margin-top: 12.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 7vw;

	.left {
		flex: 3;
		display: flex;
		flex-direction: column;
		gap: 4.8rem;
		color: #434343;

		h1 {
			font-size: 5.6rem;
			font-weight: 400;

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

				&:hover {
					background-color: #ca2b98;
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
		}

		& :last-child {
			transform: translateY(-10rem);
		}
	}
`;
