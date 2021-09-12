import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import ThemeContextProvider from "./contexts/ThemeContext";
import TodoContextProvider from "./contexts/TodoContext";
import AuthContextProvider from "./contexts/AuthContext";
import ThemeToggle from "./components/ThemeToggle";

function App() {
	return (
		<div className="app">
			<ThemeContextProvider>
				<AuthContextProvider>
					<Navbar />
					<TodoContextProvider>
						<Todo />
					</TodoContextProvider>
				</AuthContextProvider>
				<ThemeToggle />
			</ThemeContextProvider>
		</div>
	);
}

export default App;
