import React from "react";
import styled from "styled-components";
import Header from "./components/Header";

function App() {
	return (
		<Container>
			<Header />
		</Container>
	);
}

export default App;

const Container = styled.div`
	max-width: 126rem;
	padding: 0 2rem;
	margin: 0 auto;
`;
