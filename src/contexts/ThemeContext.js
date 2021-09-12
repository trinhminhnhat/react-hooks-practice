import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState({
		isLightTheme: true,
		light: {
			background: "rgba(240, 240, 240, 0.7)",
			color: "#000",
		},
		dark: {
			background: "rgba(39, 39, 39, 0.7)",
			color: "#fff",
		},
	});

	const toggleTheme = () => {
		setTheme({
			...theme,
			isLightTheme: !theme.isLightTheme,
		});
	};

	const themeContextData = {
		// theme: theme,
		theme,
		toggleTheme,
	};

	return (
		<ThemeContext.Provider value={themeContextData}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
