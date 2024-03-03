import styled from "styled-components";

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
	overflow-y: auto;

	&:hover {
		cursor: pointer;
	}
`;

export const ModalWrapper = styled.div`
	overflow-y: auto;
`;
