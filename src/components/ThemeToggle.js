import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
	const { toggleTheme } = useContext(ThemeContext);

	return (
		<div className="toggle-btn">
			<button onClick={toggleTheme}>Toggle Theme</button>
		</div>
	);
};

export default ThemeToggle;
