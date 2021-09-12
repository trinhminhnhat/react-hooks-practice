import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = (props) => {
	const { theme } = useContext(ThemeContext);
	const { isLightTheme, light, dark } = theme;
	const themeStyle = isLightTheme ? light : dark;

	const { isAuthenticated, toggleAuth } = useContext(AuthContext);

	return (
		<div className="navbar" style={themeStyle}>
			<h1>My react hooks app</h1>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>
					{isAuthenticated ? "You are logged in" : ""}
					<button onClick={toggleAuth}>
						{isAuthenticated ? "Logout" : "Login"}
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
