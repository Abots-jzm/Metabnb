import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoPNG from "../assets/Logo.png";
import ConnectWalletModal from "./ConnectWalletModal";

export default function Header() {
	const [navIsOpen, setNavIsOpen] = useState(false);
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const location = useLocation();
	const navigate = useNavigate();

	function handleMobileNavigation(path) {
		navigate(path);
		hideNav();
	}

	function showNav() {
		setNavIsOpen(true);
		document.body.style.overflow = "hidden";
	}

	function hideNav() {
		setNavIsOpen(false);
		document.body.style.overflow = "auto";
	}

	function openModal() {
		setModalIsOpen(true);
		document.body.style.overflow = "hidden";
	}

	function closeModal() {
		setModalIsOpen(false);
		document.body.style.overflow = "auto";
	}

	return (
		<Container>
			{modalIsOpen && <ConnectWalletModal closeModal={closeModal} />}
			<MobileNav isOpen={navIsOpen}>
				<MobileNavItem active={location.pathname === "/"} onClick={handleMobileNavigation.bind(null, "/")}>
					Home
				</MobileNavItem>
				<MobileNavItem active={location.pathname === "/place-to-stay"} onClick={handleMobileNavigation.bind(null, "/place-to-stay")}>
					Place to stay
				</MobileNavItem>
				<MobileNavItem>NFTs</MobileNavItem>
				<MobileNavItem>Community</MobileNavItem>
				<MobileConnectContainer>
					<MobileConnectBtn
						onClick={() => {
							hideNav();
							openModal();
						}}
					>
						Connect wallet
					</MobileConnectBtn>
				</MobileConnectContainer>
			</MobileNav>
			<Logo>
				<img src={LogoPNG} alt="Logo" />
			</Logo>
			<Navigation>
				<WorkingNavItem to="/" active={location.pathname === "/" ? 1 : 0}>
					{/* 1 and 0 is to fix a react warnign/bug */}
					Home
				</WorkingNavItem>
				<WorkingNavItem to="/place-to-stay" active={location.pathname === "/place-to-stay" ? 1 : 0}>
					Place to stay
				</WorkingNavItem>
				<NavItem>NFTs</NavItem>
				<NavItem>Community</NavItem>
			</Navigation>
			<Right>
				<ConnectBtn onClick={openModal}>Connect wallet</ConnectBtn>
				<HamburgerContainer onClick={navIsOpen ? hideNav : showNav}>
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

	transition: transform 0.3s ease-out;

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

	${(props) =>
		props.isOpen &&
		`
		position: fixed;
		right: 2rem;
		top: 5.6rem;
	`};

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

const WorkingNavItem = styled(NavLink)`
	font-size: 2rem;
	text-decoration: none;
	color: #434343;
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

const NavItem = styled.div`
	font-size: 2rem;
	color: #434343;
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
