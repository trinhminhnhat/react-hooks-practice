import React, { useState } from "react";

export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const toggleAuth = () => {
		setIsAuthenticated(!isAuthenticated);
	};

	const authContextData = {
		isAuthenticated,
		toggleAuth,
	};

	return (
		<AuthContext.Provider value={authContextData}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
