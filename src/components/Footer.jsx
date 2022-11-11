import React from "react";
import styled from "styled-components";
import LogoWhiteSVG from "../assets/Logo-white.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaRegCopyright } from "react-icons/fa";

export default function Footer() {
	return (
		<Container>
			<Wrapper>
				<div>
					<Logo>
						<img src={LogoWhiteSVG} alt="logo white" />
					</Logo>
					<Socials>
						<FaFacebookF />
						<FaInstagram />
						<FaTwitter />
					</Socials>
				</div>
				<div>
					<Heading>Community</Heading>
					<Item>NFT</Item>
					<Item>Tokens</Item>
					<Item>LandLords</Item>
					<Item>Discord</Item>
				</div>
				<div>
					<Heading>Places</Heading>
					<Item>Castle</Item>
					<Item>Farms</Item>
					<Item>Beach</Item>
					<Item>Learn more</Item>
				</div>
				<div>
					<Heading>About us</Heading>
					<Item>Road map</Item>
					<Item>Creators</Item>
					<Item>Career</Item>
					<Item>Contact us</Item>
				</div>
			</Wrapper>
			<Copyright>
				<FaRegCopyright /> 2022 metabnb
			</Copyright>
		</Container>
	);
}

const Heading = styled.div`
	font-size: 1.8rem;
	font-weight: 700;
	margin-bottom: 2.3rem;
`;

const Item = styled.div`
	font-size: 1.4rem;
	margin-bottom: 1.6rem;
`;

const Copyright = styled.div`
	margin-top: 3.5rem;
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const Socials = styled.div`
	margin-top: 9.6rem;
	color: white;
	display: flex;
	gap: 3.4rem;
	font-size: 1.8rem;
`;

const Logo = styled.div`
	width: 23.3rem;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: 768px) {
		flex-direction: column;
		gap: 4.8rem;
	}
`;

const Container = styled.footer`
	background-color: #1d1d1e;
	box-shadow: 0 0 0 100vmax #1d1d1e;
	clip-path: inset(0 -100vmax);
	color: white;
	padding: 6.2rem 0 3.7rem;
`;
