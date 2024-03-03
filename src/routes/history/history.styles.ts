import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #7360df;
	padding: 2rem;
	overflow-y: auto;
`;

export const HistoryItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 16px;
	cursor: pointer;
	background-color: white;
	color: #7469b6;
	width: 50%;
	padding: 1rem;
	margin: 0.5rem;
	font-size: 1.5rem;

	&:hover {
		color: #e1afd1;
	}
`;

export const HistoryImage = styled.div`
	margin-bottom: 2rem;
`;
