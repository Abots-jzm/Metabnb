import React from "react";
import styled from "styled-components";
import LogoPNG from "../assets/Logo.png";

export default function Header() {
	return (
		<Container>
			<Logo>
				<img src={LogoPNG} alt="Logo" />
			</Logo>
			<Navigation>
				<NavItem active>Home</NavItem>
				<NavItem>Place to stay</NavItem>
				<NavItem>NFTs</NavItem>
				<NavItem>Community</NavItem>
			</Navigation>
			<Right>
				<ConnectBtn>Connect wallet</ConnectBtn>
				<HamburgerContainer>
					<Hamburger />
				</HamburgerContainer>
			</Right>
		</Container>
	);
}

const Hamburger = styled.div`
	position: relative;

	&,
	&::before,
	&::after {
		width: 2.5rem;
		height: 2px;
		background-color: #333;
		display: inline-block;
	}

	&::before,
	&::after {
		content: "";
		position: absolute;
		left: 0;
	}

	&::before {
		top: -0.8rem;
	}

	&::after {
		top: 0.8rem;
	}
`;

const HamburgerContainer = styled.div`
	align-self: center;
	margin-top: -0.8rem;
	cursor: pointer;
	display: none;

	@media only screen and (max-width: 1024px) {
		display: block;
	}
`;

const Right = styled.div`
	display: flex;
	gap: 3rem;
`;

const ConnectBtn = styled.button`
	border-radius: 1rem;
	background-color: #a02279;
	padding: 1.4rem 2.6rem;
	color: white;
	transition: all 0.2s;

	&:hover {
		background-color: #ca2b98;
	}

	@media only screen and (max-width: 600px) {
		display: none;
	}
`;

const NavItem = styled.div`
	font-size: 2rem;
	cursor: pointer;
	font-weight: ${(props) => (props.active ? "700" : "400")};

	&::after {
		content: "";
		display: block;
		width: 0;
		height: 1px;
		background-color: black;
		transition: all 0.3s;
	}

	&:hover {
		&::after {
			width: 100%;
		}
	}
`;

const Navigation = styled.nav`
	display: flex;
	gap: 4.8rem;

	@media only screen and (max-width: 1024px) {
		display: none;
	}
`;

const Logo = styled.div`
	flex-basis: 23.3rem;

	@media only screen and (max-width: 600px) {
		flex-basis: 15rem;
	}
`;

const Container = styled.header`
	margin-top: 4.3rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
