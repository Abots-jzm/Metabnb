import React, { useState } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";
import { BiChevronRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import MetamaskPNG from "../assets/Modal logos/MetaMask.png";
import WalletConnectPNG from "../assets/Modal logos/Wallet connect.png";

const element = document.getElementById("modal-overlay");

export default function ConnectWalletModal({ closeModal }) {
	return (
		<>
			{createPortal(
				<Layout>
					<Overlay closeModal={closeModal} />
					<Modal closeModal={closeModal} />
				</Layout>,
				element
			)}
		</>
	);
}

function Overlay({ children, closeModal }) {
	return <BackDrop onClick={closeModal}>{children}</BackDrop>;
}

function Modal({ closeModal }) {
	return (
		<Container>
			<div className="heading">
				Connect Wallet
				<div onClick={closeModal}>
					<IoClose />
				</div>
			</div>
			<p>Choose your preferred wallet:</p>
			<div className="buttons">
				<button>
					<div className="picture">
						<img src={MetamaskPNG} alt="meta mask" />
					</div>
					<div>
						<BiChevronRight />
					</div>
				</button>
				<button>
					<div className="picture">
						<img src={WalletConnectPNG} alt="wallet connect" />
					</div>
					<div>
						<BiChevronRight />
					</div>
				</button>
			</div>
		</Container>
	);
}

const Layout = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	position: relative;
	background-color: white;
	width: min(60rem, 90%);
	border-radius: 1.6rem;
	z-index: 101;

	.buttons {
		margin: 1.2rem 0 3.2rem;
		display: flex;
		flex-direction: column;
		gap: 1.6rem;
		padding-inline: 3.2rem;

		button {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 1.2rem 2rem;
			border: 1px solid #cfd8dc;
			border-radius: 1.2rem;
			background-color: white;
			color: #959da6;
			font-size: 3rem;

			&:hover {
				background-color: #f6f6f6;
			}

			.picture {
				display: grid;
				place-items: center;
			}
		}
	}

	.heading {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 2.4rem 3.2rem;
		border-bottom: 1px solid #cfd8dc;
		font-size: 2.4rem;
		font-weight: 700;
		color: #333333;

		div {
			color: #1a1a1a;
			font-weight: 400;
			font-size: 2rem;
			cursor: pointer;
		}
	}

	p {
		color: #333333;
		margin-top: 3.2rem;
		padding-inline: 3.2rem;
	}
`;

const BackDrop = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(79, 79, 79, 0.4);
	z-index: 100;

	transition: all 0.2s;
`;
