import React from "react";
import styled from "styled-components";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlaceToStay from "./pages/PlaceToStay";

function App() {
	return (
		<Container>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />}></Route>
					<Route path="/place-to-stay" element={<PlaceToStay />}></Route>
				</Route>
			</Routes>
		</Container>
	);
}

export default App;

const Container = styled.div`
	max-width: 126rem;
	padding: 0 2rem;
	margin: 0 auto;
`;
