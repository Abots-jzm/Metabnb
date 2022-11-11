import React, { useState } from "react";
import styled from "styled-components";
import LogoPNG from "../assets/Logo.png";

export default function Header() {
	const [navIsOpen, setNavIsOpen] = useState(false);

	return (
		<Container>
			<MobileNav isOpen={navIsOpen}>
				<MobileNavItem active>Home</MobileNavItem>
				<MobileNavItem>Place to stay</MobileNavItem>
				<MobileNavItem>NFTs</MobileNavItem>
				<MobileNavItem>Community</MobileNavItem>
				<MobileConnectContainer>
					<MobileConnectBtn>Connect wallet</MobileConnectBtn>
				</MobileConnectContainer>
			</MobileNav>
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
				<HamburgerContainer onClick={() => setNavIsOpen((prevState) => !prevState)}>
					<Hamburger isOpen={navIsOpen} />
				</HamburgerContainer>
			</Right>
		</Container>
	);
}

const MobileConnectBtn = styled.button`
	border-radius: 1rem;
	color: #a02279;
	padding: 1.4rem 2.6rem;
	background-color: white;
	width: 100%;
	transition: all 0.2s;

	&:hover {
		background-color: #ddd;
	}
`;

const MobileConnectContainer = styled.div`
	border-top: 1px solid white;
	padding-top: 2.4rem;
`;

const MobileNavItem = styled.div`
	color: white;
	cursor: pointer;
	padding: 2.4rem 0;
	font-weight: ${(props) => (props.active ? "700" : "400")};
`;

const MobileNav = styled.nav`
	position: fixed;
	inset: 0;
	background-color: #a02279;
	z-index: 99;
	display: none;
	flex-direction: column;
	font-size: 2rem;
	padding-top: 9rem;
	padding-left: 3rem;
	padding-right: 3rem;
	transform: ${(props) => (props.isOpen ? "translateX(0)" : "translateX(100%)")};

	transition: transform 0.3s;

	@media only screen and (max-width: 1024px) {
		display: flex;
	}
`;

const Hamburger = styled.div`
	width: 2.5rem;
	height: 2px;
	display: inline-block;
	position: relative;
	background-color: ${(props) => (props.isOpen ? "transparent" : "#333")};
	transition: all 0.3s;

	&::before,
	&::after {
		content: "";
		width: 2.5rem;
		height: 2px;
		background-color: ${(props) => (props.isOpen ? "white" : "#333")};
		display: inline-block;
		position: absolute;
		left: 0;
		transition: all 0.3s;
	}

	&::before {
		top: -0.8rem;
		${(props) =>
			props.isOpen
				? `
      top: 0;
      transform: rotate(135deg);
    `
				: ""}
	}

	&::after {
		top: 0.8rem;
		${(props) =>
			props.isOpen
				? `
      top: 0;
      transform: rotate(-135deg);
    `
				: ""}
	}
`;

const HamburgerContainer = styled.div`
	align-self: center;
	margin-top: -0.8rem;
	cursor: pointer;
	display: none;
	z-index: 100;

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
