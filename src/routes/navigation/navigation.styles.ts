import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.div`
	display: flex;
	justify-content: space-between;
	height: 70px;
	width: 100%;
	margin-bottom: 1rem;
	background-color: #7360df;
	border-radius: 16px;
`;

export const NavLinks = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

export const NavLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;

	&:hover {
		color: #3498db;
	}
`;
