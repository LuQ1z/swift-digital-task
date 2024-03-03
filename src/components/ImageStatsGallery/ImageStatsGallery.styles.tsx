import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(5, 1fr);
	width: 100%;
	margin-top: 2rem;
`;

export const Image = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	position: relative;

	img {
		padding: 1rem;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	img:hover {
		cursor: pointer;
		transform: scale(1.1);
	}
`;

export const Statistics = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-top: 0.5rem;
	margin-bottom: 1.5rem;
	border-radius: 0.3rem;
	width: 75vw;
	height: fit-content;
	background-color: white;
`;
