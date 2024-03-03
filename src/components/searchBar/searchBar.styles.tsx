import styled from "styled-components";

export const SearchBar = styled.div`
	width: 100%;
	max-width: 640px;
	height: 2rem;
	border: none;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 18px;

	input[type="search"] {
		flex: 1;
		padding: 0.9375rem;
		font-family: inherit;
		font-weight: 400;
		background-color: white;

		&::placeholder {
			color: rgba(0, 0, 0, 0.5);
		}

		&::-webkit-search-cancel-button {
			-webkit-appearance: none;
		}
	}

	input {
		border: 2px solid rgba(0, 0, 0, 0.3);
		outline: none;
		border-radius: 16px;
		padding: 1rem;
		width: 100%;
		font-size: 14pt;
	}

	input:hover,
	& input:focus {
		border: 2px solid #3498db;
	}
`;
