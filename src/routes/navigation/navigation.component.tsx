import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { Navbar, NavLinks, NavLink } from "./navigation.styles";

const Navigation = () => {
	return (
		<Fragment>
			<Navbar>
				<NavLinks>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/history">History</NavLink>
				</NavLinks>
			</Navbar>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
