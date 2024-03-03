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
	border: 2px solid black;
	width: 100px;
	height: 100px;

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

export const Modal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	img {
		width: 75vw;
		z-index: 100;

		&:hover {
			cursor: default;
		}
	}
`;

export const ModalBackground = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;

	&:hover {
		cursor: pointer;
	}
`;

export const Statistics = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-top: 2rem;
	border-radius: 0.3rem;
	width: 75vw;
	height: fit-content;
	background-color: white;
`;
